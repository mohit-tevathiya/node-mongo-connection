let mongodb=require('mongodb')
let MongoClient = require('mongodb').MongoClient
let assert = require('assert')

let connect =() =>{

MongoClient.connect(
    'mongodb://localhost:27017', 
    { useNewUrlParser: true}
)
.then((client,err) => {
    if(err) throw err
   
    
    let db = client.db('nodeScheduler')
   
    
    db.collection('demo').find().toArray(function(err, result){
    if(!assert.equal(null, err)){
        console.log(result)
    } 
    
    client.close()
   
})
})}

module.exports = {connect}