const URL = 'mongodb+srv://amantyagi4987:admin123@cluster0.iyhsv1d.mongodb.net/ideproject?retryWrites=true&w=majority';
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error During DB Connection ', err);
})
export default mongoose;