const{model, Schema} = require('mongoose');

const schema = new Schema({
    name: {type:String,require:true},
    expedition_date: {type:Date,require:true},
    expiration_date: {type:Date,default: '01/01/2025'},
});

module.exports = model('document', schema);