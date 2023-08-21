const BACKEND_API = "https://users-app-backend.onrender.com/users";

let default_fetch_options = { 
  "Access-Control-Allow-Origin": "*" ,
  "Content-Type": "application/json",
};

function error_handle(error) {
  console.error(error);
}

////////////////////////////////////////////////////
function fetch_get(url, callback){
  const body = {
    method: "GET",
    headers: {
      ...default_fetch_options,
    },
  }
  
  fetch(url, body)
    .then(response => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch(error => {
      error_handle(error);
      callback({error: error.message});
    });
}
////////////////////////////////////////////////////
const getAllUsers = (callback) => {
  fetch_get(BACKEND_API, (res) => {
    callback(res);
  });
}
////////////////////////////////////////////////////
const entry = {getAllUsers};

export default entry;