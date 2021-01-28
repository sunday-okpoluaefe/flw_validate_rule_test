
const config = require('config')
const server = require('../src/app')
const chai = require('chai')
const http = require('chai-http')

chai.should()
chai.use(http)

describe('-------- Input Validation -------', ()=> {

    /*
    * Test for required fields  --- rule **
    */
    describe('POST /validate-rule', ()=>{
        it('should return with a response (HTTP 400 status code) If a required field isn\'t passed', (done)=> {
            chai.request(server)
                .post("/validate-rule")
                .send({

                    data: {
                        name: "James Holden",
                        crew: "Rocinante",
                        age: 34,
                        position: "Captain",
                        missions: 45
                    }

                })
                .end((error, response)=> {
                    response.should.have.status(400)
                    done()
                })
        })
    })

    /*
   * Test for required fields  --- data **
   */
    describe('POST /validate-rule', ()=>{
        it('should return with a response (HTTP 400 status code) If a required field isn\'t passed ', (done)=> {
            chai.request(server)
                .post("/validate-rule")
                .send({
                    rule: {
                        field: "missions",
                        condition: "gte",
                        condition_value: 30
                    }
                })
                .end((error, response)=> {
                    response.should.have.status(400)
                    done()
                })
        })
    })

    /*
  * Test for field types  --- rule **
  */
    describe('POST /validate-rule', ()=>{
        it('should return with a response (HTTP 400 status code) for invalid field type', (done)=> {
            chai.request(server)
                .post("/validate-rule")
                .send({
                    rule: 10,
                    data: {
                        field: "missions",
                        condition: "gte",
                        condition_value: 30
                    }
                })
                .end((error, response)=> {
                    response.should.have.status(400)
                    done()
                })
        })
    })


})

describe('-------- Rule Validation -------', ()=> {

    /*
    * Test for failed validation --- **
    */
    describe('POST /validate-rule', ()=>{
        it('should return with a response (HTTP 400 status code) for failed validation', (done)=> {
            chai.request(server)
                .post("/validate-rule")
                .send({
                    rule: {
                        field: "5",
                        condition: "contains",
                        condition_value: "rocinante"
                    },
                    data: ["The Nauvoo", "The Razorback", "The Roci", "Tycho"]
                })
                .end((error, response)=> {
                    response.should.have.status(400)
                    done()
                })
        })
    })

    /*
   * Test for successful validation  --- **
   */
    describe('POST /validate-rule', ()=>{
        it('should return with a response (HTTP 200 status code) for successful validation', (done)=> {
            chai.request(server)
                .post("/validate-rule")
                .send({
                    rule: {
                        field: "missions.count",
                        condition: "gte",
                        condition_value: 30
                    },
                    data: {
                        name: "James Holden",
                        crew: "Rocinante",
                        age: 34,
                        position: "Captain",
                        missions: {
                            count: 45,
                            successful: 44,
                            failed: 1
                        }
                    }
                })
                .end((error, response)=> {
                    response.should.have.status(200)
                    done()
                })
        })
    })

})


