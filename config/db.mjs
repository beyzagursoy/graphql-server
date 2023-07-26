import mongoose from 'mongoose';

//const mongoose = require('mongoose')

const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> {
        console.log('MongoDB connected...');
    }).catch((err)=>{
        console.log(err);
    })

}

export default db;