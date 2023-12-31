const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _name: String,
    _lastName: String,
    _phone: String,
    _address: {
        street: String,
        number: String,
        zip: String,
        city: String,
        state: String,
        country: String
    }
});

class Member {
  
    constructor(name, lastName, phone, address) {
        this._name = name;
        this._lastName = lastName;
        this._phone = phone;
        this._address = address;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}

schema.loadClass(Member);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Member', schema);
