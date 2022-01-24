// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express
let app = express()

// endpoint celcius
app.get("/celcius/:suhu", (request,response) => {
    let suhu = request.params.suhu
    let reamur = 4/5 * Number(suhu)
    let fahrenheit = 9/5 * Number(suhu) + 32
    let kelvin = Number(suhu) + 273.15

    return response.json({
        celcius: Number(suhu),
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    })
})

// endpoint reamur
app.get("/reamur/:suhu", (request,response) => {
    let suhu = request.params.suhu
    let celcius = 5/4 * Number(suhu)
    let fahrenheit = 9/4 * Number(suhu) + 32
    let kelvin = 5/4 * Number(suhu) + 273.15

    return response.json({
        reamur: Number(suhu),
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    })
})

// endpoint fahrenheit
app.get("/fahrenheit/:suhu", (request,response) => {
    let suhu = request.params.suhu
    let celcius = 5/9 * (Number(suhu) - 32)
    let reamur = 4/9 * (Number(suhu) - 32)
    let kelvin = 5/9 * (Number(suhu) - 32) + 273.15

    return response.json({
        fahrenheit: Number(suhu),
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    })
})

// endpoint kelvin
app.get("/kelvin/:suhu", (request,response) => {
    let suhu = request.params.suhu
    let celcius = Number(suhu) - 273.15
    let fahrenheit = 9/5 * (Number(suhu) - 273.15) + 32
    let reamur = 4/5 * (Number(suhu) - 273.15)

    return response.json({
        kelvin: Number(suhu),
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})
