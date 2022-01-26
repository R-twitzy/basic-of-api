const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read request data from Json format
app.use(express.json())
// fyi: Json is string

app.post("/ages", (request,response) => {
    // store the request data
    let data = request.body.ages
    let jmlRemaja=0, jmlDewasa=0, jmlTua=0, jmlSesepuh=0

    for (let i = 0; i < data.length; i++) {
        if (data[i].umur >= 12 && data[i].umur < 25) {
            jmlRemaja+=1
        }
        if (data[i].umur >= 25 && data[i].umur < 55) {
            jmlDewasa+=1
        }
        if (data[i].umur >= 55 && data[i].umur < 100) {
            jmlTua+=1
        }
        if (data[i].umur >= 100) {
            jmlSesepuh+=1
        }
    }

    // give response
    return response.json({
        "Jumlah_Remaja": jmlRemaja,
        "Jumlah_Dewasa": jmlDewasa,
        "Jumlah_Tua": jmlTua,
        "Jumlah_Sesepuh": jmlSesepuh
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})