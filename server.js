const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'yo mama',
        'waterTemp': 200,
        'steepTime': 180,
        'caffinated': true,
        'flavor': 'yum'
    },
    'matcha': {
        'type': 'green',
        'origin': 'yo mama',
        'waterTemp': 200,
        'steepTime': 180,
        'caffinated': false,
        'flavor': 'yum'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime': 0,
        'caffinated': 0,
        'flavor': 'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html/')
})

app.get('/api/:name', (req,res)=>{
    const teaName = req.params.name.toLowerCase()
    if(tea[teaName]){
        res.json(tea[teaName])
    }else{
        res.json(tea['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`);
})
