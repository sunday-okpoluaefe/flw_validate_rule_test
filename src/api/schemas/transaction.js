/**
 * Account Schema
 */
const mongoose = require('mongoose');

module.exports.TransactionSchema = new mongoose.Schema({
    account: { type: mongoose.Schema.Types.ObjectId, index: true, ref: "Account"},
    channel: { type: String },
    currency: { type: String },
    description: { type: String },
    message: { type: String },
    amount: { type: Number },
    charge: { type: Number },
    reference: { type: String },
    auth: { type: String },
    meta: {type: Object},
    extra: {type: Object},
    status: {type: String, default: 'attempted', enum: ['success', 'failed', 'pending', 'reversed', 'attempted']},
    type: { type: String, enum: ['credit', 'debit'] },
}, { timestamps: true })

/*
{
    "id": 918899542,
    "domain": "test",
    "status": "success",
    "reference": "760788181663",
    "amount": 10000,
    "message": null,
    "gateway_response": "Approved",
    "paid_at": "2020-12-11T10:34:19.000Z",
    "created_at": "2020-12-11T10:34:18.000Z",
    "channel": "card",
    "currency": "NGN",
    "ip_address": null,
    "metadata": 0,
    "log": null,
    "fees": 150,
    "fees_split": null,
    "authorization": {
        "authorization_code": "AUTH_8ss1gsxfe5",
        "bin": "408408",
        "last4": "4081",
        "exp_month": "12",
        "exp_year": "2021",
        "channel": "card",
        "card_type": "visa ",
        "bank": "TEST BANK",
        "country_code": "NG",
        "brand": "visa",
        "reusable": true,
        "signature": "SIG_cvDkIO8t1eY4r7xVmnvF",
        "account_name": null
    },
    "customer": {
        "id": 35329056,
        "first_name": null,
        "last_name": null,
        "email": "okpejuliet@gmail.com",
        "customer_code": "CUS_o43pd7eo95fux8f",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
    },
    "plan": null,
    "split": {},
    "order_id": null,
    "paidAt": "2020-12-11T10:34:19.000Z",
    "createdAt": "2020-12-11T10:34:18.000Z",
    "requested_amount": null,
    "pos_transaction_data": null,
    "transaction_date": "2020-12-11T10:34:18.000Z",
    "plan_object": {},
    "subaccount": {}
}
 */
