/**
 * Response wrapper class for processing and sending response
 */
class Respond {
    constructor (res) {
        this.res = res;
        this.header = {};
    }

    /**
     * Send the response.
     * @params {Any} data
     * @params {Object} res
     */
    send (status, data) {
        this.res.status(status);
        for (let key in this.header){
            this.res.set(key, this.header[key]);
        }
        if(data) return this.res.send(data);
        this.res.end();
    }

    /**
     * Ok
     * respond with status code of 200
     * @params {Any} data
     */
    ok (data) {
        this.send(200, data);
    }

    /**
     * Created
     * respond with status code of 201
     * @params {Any} data
     */
    created (data) {
        this.send(201, data);
    }

    /**
     * No data
     * respond with status code of 204
     * @params {Any} data
     */
    noData () {
        this.send(204);
    }

    /**
     * Bad request
     * respond with status code of 400
     * @params {Any} data
     */
    badRequest (data) {
        this.send(400, data);
    }

    /**
     * Unauthorized
     * respond with status code of 404
     * @params {Any} data
     */
    unauthorized (data) {
        this.send(401, data);
    }

    /**
     * Forbidden
     * respond with status code of 403
     * @params {Any} data
     */
    forbidden (data) {
        this.send(403, data);
    }

    /**
     * Not found
     * respond with status code of 404
     * @params {Any} data
     */
    notFound (data) {
        this.send(404, data);
    }

    /**
     * Internal error
     * respond with status code of 500
     * @params {Any} data
     */
    internalError (data) {
        this.send(500, data);
    }
};

module.exports = Respond
