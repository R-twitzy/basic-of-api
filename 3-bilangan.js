// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express
let app = express()

// end point desimal
app.get("/desimal/:bil", (request,response) => {
    let bil = request.params.bil
    let biner = Number(bil).toString(2)
    let octal = Number(bil).toString(8)
    let hexadecimal = Number(bil).toString(16)
    return response.json({
        desimal: Number(bil),
        biner: biner,
        octal: octal,
        hexadecimal: hexadecimal
    })
})

// end point biner
app.get("/biner/:bil", (request,response) => {
    let bil = request.params.bil
    let desimal = parseInt(bil, 2)
    let octal = Number(desimal).toString(8)
    let hexadecimal = Number(desimal).toString(16)
    return response.json({
        desimal: desimal,
        biner: Number(bil),
        octal: octal,
        hexadecimal: hexadecimal
    })
})

// end point octal
app.get("/octal/:bil", (request,response) => {
    let bil = request.params.bil
    let desimal = parseInt(bil, 8)
    let biner = Number(desimal).toString(2)
    let hexadecimal = Number(desimal).toString(16)
    return response.json({
        desimal: desimal,
        biner: biner,
        octal: Number(bil),
        hexadecimal: hexadecimal
    })
})

// end point octal
app.get("/hexadecimal/:bil", (request,response) => {
    let bil = request.params.bil
    let desimal = parseInt(bil, 16)
    let biner = Number(desimal).toString(2)
    let octal = Number(desimal).toString(8)
    return response.json({
        desimal: desimal,
        biner: biner,
        octal: octal,
        hexadecimal: bil
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})