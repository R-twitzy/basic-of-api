// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express
let app = express()

// end point kubus
app.get("/kubus/:r", (request,response) => {
    let r = request.params.r
    let volume = r * r * r
    let luas = 6 * (r * r)

    return response.json({
        rusuk: r,
        volume: volume,
        luas_permukaan: luas
    })
})

// end point balok
app.get("/balok/:p/:l/:t", (request,response) => {
    let p = request.params.p
    let l = request.params.l
    let t = request.params.t
    let volume = p * l * t
    let luas = 2 * (p*l + p*t + l*t)

    return response.json({
        panjang: p,
        lebar: l,
        tinggi: t,
        volume: volume,
        luas_permukaan: luas
    })
})

// end point tabung
app.get("/tabung/:r/:t", (request,response) => {
    let r = request.params.r
    let t = request.params.t
    let volume = 22/7 * r * r * t
    let luas = 2 * 22/7 * r * (Number(r)+Number(t))

    return response.json({
        diameter: r,
        tinggi: t,
        volume: volume,
        luas_permukaan: luas
    })
})

// end point bola
app.get("/bola/:r", (request,response) => {
    let r = request.params.r
    let volume = 4/3 * 22/7 * r * r * r
    let luas = 4 * 22/7 * r * r

    return response.json({
        diameter: r,
        volume: volume,
        luas_permukaan: luas
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})