const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const students = [{
        "id": 1,
        "firstName": "Alice",
        "lastName": "Zephyr",
        "homeTown": "Seattle"
    },{
        "id": 2,
        "firstName": "Bob",
        "lastName": "Yellow",
        "homeTown": "Vancouver"
    },{
        "id": 3,
        "firstName": "Claire",
        "lastName": "Xylitol",
        "homeTown": "Toledo"
    },{
        "id": 4,
        "firstName": "Daniel",
        "lastName": "Winston",
        "homeTown": "Akron"
    },{
        "id": 4,
        "firstName": "Edina",
        "lastName": "Veritas",
        "homeTown": "Wichita"
    }]



app.get('/', (request, response) =>{
  response.json({data: students})
})

app.get('/:id', (request, response) =>{
  let thisResponse =  students[request.params.id - 1]
  if (!thisResponse){
    response.status(404)
    response.json({
           error: {
               message: "No student found!"
           }
       })
  }

  response.json({data: thisResponse})
})



app.listen(process.env.PORT || 3000)
