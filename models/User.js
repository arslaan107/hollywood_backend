import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username : {type:String,required:true}, 
    score : {type:String,required:true}

})

var User = mongoose.model('User', UserSchema);

export default User;