import axios from 'axios'
const getPublished =  () => (dispatch) => {
  axios({url:'http://localhost:3000/searchRoles', method: 'POST', headers: {
    "Content-Type": "application/json"
  },
  data: "{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": {\n    \"bool\": {\"must\" : [{\"term\":{\"entityState.itemID\":5 } }] }\n  }\n}",
    
})


  // fetch("http://localhost:3000/searchRoles", {
  //   body: "{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": {\n    \"bool\": {\"must\" : [{\"term\":{\"entityState.itemID\":5 } }] }\n  }\n}",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST"
  // })
  //.then((response) => { return response.json()})
  .then(list => {
      console.log(list)
    //console.log(list.hits.hits)
      let temp = []
      for(let i = 0; i < list.data.hits.hits.length; i ++) {
        console.log(list.data.hits.hits[i]._source)
        temp.push(list.data.hits.hits[i]._source)
      }
      console.log(temp)
      dispatch({ type: "SETDATA", payload: temp });
  });    
    
};

const getDeleted = () => (dispatch) => {
  
  // fetch("http://localhost:3000/searchRoles", {
  //   body: "{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": {\n    \"bool\": {\"should\" : [{\"term\":{\"entityState.itemID\":7 } },{\"term\":{\"entityState.itemID\":5 } }] }\n  }\n}",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST"
  // })
  axios({url:'http://localhost:3000/searchRoles', method: 'POST', headers: {
      "Content-Type": "application/json"
    },
    data: "{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": {\n    \"bool\": {\"should\" : [{\"term\":{\"entityState.itemID\":7 } },{\"term\":{\"entityState.itemID\":5 } }] }\n  }\n}"
  })
  .then(list => {
      console.log(list.data)
    //console.log(list.hits.hits)
      let temp = []
      for(let i = 0; i < list.data.hits.hits.length; i ++) {
        console.log(list.data.hits.hits[i]._source)
        temp.push(list.data.hits.hits[i]._source)
      }
      console.log(temp)
      dispatch({ type: "SETDATA", payload: temp });
  });    
    
};

// const getMatched = (name) => (dispatch) => {
  
//   fetch("http://localhost:3000/searchRoles", {
//     body: `{\n  \"from\" : 0, \"size\" : 20,\n  \"query\":     {\"query_string\" : {\"default_field\":\"name\", \"query\":\"*${name}*\" }}\n}`,
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "POST"
//   })
//   .then((response) => { return response.json()})
//   .then(list => {
//       console.log(list)
//     //console.log(list.hits.hits)
//       let temp = []
//       for(let i = 0; i < list.hits.hits.length; i ++) {
//         console.log(list.hits.hits[i]._source)
//         temp.push(list.hits.hits[i]._source)
//       }
//       console.log(temp)
//       dispatch({ type: "SETDATA", payload: temp });
//   });    
    
// }


const getMyFunc = (itemID, name) => (dispatch) => {
  if(itemID == 5)
  axios({url:'http://localhost:3000/searchRoles', method: 'POST', headers: {
      "Content-Type": "application/json"
    },
    data: `{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": { \"bool\": {\"must\": [ {\"term\":{\"entityState.itemID\":${itemID}}},  {\"bool\":{\"should\" :[ {\"query_string\" : {\"default_field\":\"name\", \"query\":\"*${name}*\" }},{\"query_string\" : {\"default_field\":\"description\", \"query\":\"*${name}*\" }}]}}]}}\n}`,
  })
  // fetch("http://localhost:3000/searchRoles", {
  //   body: `{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": { \"bool\": {\"must\": [ {\"term\":{\"entityState.itemID\":${itemID}}},  {\"bool\":{\"should\" :[ {\"query_string\" : {\"default_field\":\"name\", \"query\":\"*${name}*\" }},{\"query_string\" : {\"default_field\":\"description\", \"query\":\"*${name}*\" }}]}}]}}\n}`,
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST"
  // })
 
 // .then((response) => { return response.json()})
  .then(list => {
     // console.log(list)
    //console.log(list.hits.hits)
      let temp = []
      for(let i = 0; i < list.data.hits.hits.length; i ++) {
        console.log(list.data.hits.hits[i]._source)
        temp.push(list.data.hits.hits[i]._source)
      }
      console.log(temp)
      dispatch({ type: "SETDATA", payload: temp });
  })
   else if(itemID == 7)
   axios({url:'http://localhost:3000/searchRoles', method: 'POST', headers: {
      "Content-Type": "application/json"
    },
    data: `{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": { \"bool\": {\"must\": [ {\"bool\":{\"should\" : [{\"term\":{\"entityState.itemID\":7 } },{\"term\":{\"entityState.itemID\":5 } }]}}, {\"bool\":{\"should\" :[ {\"query_string\" : {\"default_field\":\"name\", \"query\":\"*${name}*\" }},{\"query_string\" : {\"default_field\":\"description\", \"query\":\"*${name}*\" }}]}}]}}\n}`,
  })
  // fetch("http://localhost:3000/searchRoles", {
  //   body: `{\n  \"from\" : 0, \"size\" : 20,\n  \"query\": { \"bool\": {\"must\": [ {\"bool\":{\"should\" : [{\"term\":{\"entityState.itemID\":7 } },{\"term\":{\"entityState.itemID\":5 } }]}}, {\"bool\":{\"should\" :[ {\"query_string\" : {\"default_field\":\"name\", \"query\":\"*${name}*\" }},{\"query_string\" : {\"default_field\":\"description\", \"query\":\"*${name}*\" }}]}}]}}\n}`,
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST"
  // })
  // .then((response) => { return response.json()})
  .then(list => {
      console.log(list)
    //console.log(list.hits.hits)
      let temp = []
      for(let i = 0; i < list.data.hits.hits.length; i ++) {
        console.log(list.data.hits.hits[i]._source)
        temp.push(list.data.hits.hits[i]._source)
      }
      console.log(temp)
      dispatch({ type: "SETDATA", payload: temp });
  })
    
}



  
export { getPublished, getDeleted,  getMyFunc };