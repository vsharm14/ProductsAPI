const mongoose = require('mongoose');

main().catch(err => console.log(err));

main().then(console.log("successfully connected to database now!"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1/product');    
  }
  