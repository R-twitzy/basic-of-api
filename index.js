// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express
let app = express()

// endpoint pertama kita
app.get("/test", (request, response) => {
    let kata = `Mudah dipahami, semoga harimu menyenangkan`
    let nama = `Rama`
    return response.json({
        message: kata,
        nama: nama,
        age: 17

    })
})

// endpoint kedua: hitung BMI
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

// end point ketiga (request with GET method)
app.get("/profile/:nama/:usia", (request, response) => {
    // tampung data
    let nama = request.params.nama
    let usia = request.params.usia

    let status = null

    if (usia < 10) {
        status = `Bocil`
    } else if (usia >= 10 && usia <20) {
        status = `Remaja`
    } else if (usia >= 20 && usia <50) {
        status = `Dewasa`
    } else if (usia >= 50) {
        status = `Tua`
    }

    return response.json({
        message: `Nama saya ${nama}, umur saya ${usia}, saya masih ${status}`
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})
