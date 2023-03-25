const port = 3000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

//routes
app.use(express.static('public'))

// Renders my index.html as the homepage on http://localhost:3000/
app.get('/', (req,res)=>{
  res.render(__dirname +'/index.html')
})

//Connects to my MongoDB API
app.get('/results', (req,res)=>{
  let queryData = req.query.search

  var config = {
    method: 'post',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-eddpb/endpoint/data/v1/action/aggregate',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'EeEfMQnJocksl1TPpW2J8h9YnwIuGpfkVuFhpVrNYbKswltZoIjvVyLL331WLBfZ',
    },
    data: loadInfo(queryData)
  };

// Using the pipeline parameter allows me to use the Lucene Standard Analyzer to search through the database
  function loadInfo(x){
    let data = JSON.stringify({
      "collection": "All",
      "database": "GraphicsCards",
      "dataSource": "Cluster0",
      "pipeline": [
        {
          "$search": {
              "index": "default",
              "text": {
                "query": x,
                "path": {
                    "wildcard": "*"
                }
              }
          }
        },
        { $limit : 1 }
      ],
    });
  
    return data
  }

  axios(config)
    .then((response)=>{
      res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
  
})

app.listen(port, ()=> console.log(`Server running on port:${port}`)) 




            

            



