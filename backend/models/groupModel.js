const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    GroupName:{
        type:String,
        required:true
    },
    GroupTopic:{
        type:String,
        required:true
    },
    GroupDescription:{
        type:String,
        required:true
    },
    GroupLocation:{
        type:String,
        required:true
    },
    GroupImage:{
        type:String,
        required:true
    },
    GroupCreationDate:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Group",groupSchema);

