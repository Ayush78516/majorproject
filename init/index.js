const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

const mongo_url="mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(()=>{
    console.log("connected to db");
  })
  .catch((err)=>{
    console.log(err);
  });


async function main() {
    await mongoose.connect(mongo_url);
}

const initdb=async()=> {
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj) => ({...obj , owner:"6534e18476afb0e4a9262deb"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialised");
}

initdb();