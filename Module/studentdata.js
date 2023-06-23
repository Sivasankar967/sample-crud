const mongoose=require('mongoose')

const studentschema=mongoose.Schema({
    name:{
        type:'String',
        required: 'String'
    },
    roll:{
        Num:'String',
        required: 'String',
        unique: 'String',
    },
    registeration:{
        type:'String',
        required:'String',
        unique:'String'
    },
    subjects:{
        type:[String],
        required:'String',
       
    },
    registered_on:{
        type:'String',
        required:'String',
        default: new Date(),
    },
})

var studentdata=mongoose.model('studentdata',studentschema);
module.exports=studentdata