const mongoose = require("mongoose");

const ConnectDatabase = () =>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
      
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`mongodb connected with Host on ${con.connection.host}.`)
    })
}

module.exports= ConnectDatabase;