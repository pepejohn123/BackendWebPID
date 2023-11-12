const{model, Schema} = require('mongoose');

const schema = new Schema({
    first_name: {type:String,require:true},
    fathers_last_name: {type:String,require:true},
    mothers_last_name: {type:String,require:true},
    birthdate: {type:Date,require:true},
    email: {type:String, require:true},
    password: {type:String, require:true},
    nationality: {type:String, require:true},
    civil_state: {type:String, require:true},
    birth_entity: {type:String, require:true},
    birth_municipality: {type:String, require:true},
    entity_of_birth: {type:String, require:true},
    genre: {type:String, require:true},
});

module.exports = model('user', schema);