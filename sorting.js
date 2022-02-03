const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read request data from Json format
app.use(express.json())
// fyi: Json is string

app.post("/sorting", (request, response) => {
    let data= request.body.data
    let key= request.body.key
    let type= request.body.type

    if (key == "nama") {
        data.sort((a, b) => {
            let fa = a.nama.toLowerCase(),
                fb = b.nama.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
    } else if (key == "umur"){
        data.sort((a, b) => {
            return a.umur - b.umur;
        })
    } else if (key == "nis"){
        data.sort((a, b) => {
            return a.nis - b.nis;
        })
    } 

    if (type === "descending") {
        data.reverse();
    } 

    return response.json({
        data : data
    })
})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})