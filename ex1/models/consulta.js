var mongoose = require('mongoose');



var consultaSchema = new mongoose.Schema({
        _id: mongoose.ObjectId,
        nome:String,
        nif:Number,
        idade:Number,
        sexo:String,
        data:String,
        nr_operacoes:Number,
        operacoes: [{_id: false,codigo:String,nome:String,descricao:String}]
});



module.exports = new mongoose.model('consulta',consultaSchema);