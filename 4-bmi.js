// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express
let app = express()

// endpoint hitung BMI
// request data: tinggi, berat
// response data: nilai BMI, status BMI

// setting agar dapat membaca data request dgn format json
app.use(express.json())

app.post("/bmi", (request, response) => {
    // tampung data
    let tinggi = request.body.tinggi
    let berat = request.body.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null

    if (bmi < 18.5) {
        status = 'Tulang Berjalan'
    } else if (bmi >= 18.5 && bmi <25) {
        status = 'ideal'
    } else if (bmi >= 25 && bmi < 30) {
        status = 'kelebihan dikit'
    } else if (bmi >= 30) {
        status = 'obesitas'
    }

    return response.json({
        nilai: bmi,
        status: status
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})