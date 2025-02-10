import mongoose from "mongoose";


// connect to db
function connect(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch(err =>{
        console.log(err);
    })
}

export default connect;