import axios from "axios";

export function findAll() {
    return axios.get(`/`, function(req, res) {
        console.log("SERVER HIT CLIENT ROUTE");
        console.log("SERVER REQ BODY: ", req.body);
        // res.json({status: true, message: "SENDING MSG TO SERVER"})
    }) 
}

// export function sendQuery(dataObj) {
//     return axios.post("/", dataObj, function(req, res) {
//         console.log("CLIENT POST HIT");
//         console.log("RECEIVED req FROM SERVER", req);
//         console.log("RECEIVED res FROM SERVER", res);
//     })
// }

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://testing-backend-with-chloe.herokuapp.com/",
  responseType: "json"
});