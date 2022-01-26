const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read request data from Json format
app.use(express.json())
// fyi: Json is string

app.post("/amir", (request,response) => {
    // store the request data
    let barang = request.body.barang
    let subtotal=0

    for (let i = 0; i < barang.length; i++) {
        subtotal += barang[i].harga * barang[i].jml
    }

    let total = subtotal * 110/100

    // give response
    return response.json({
        "1": `Total harga sebelum kena pajak adalah Rp ${subtotal.toLocaleString()}`,
        "2": `Total yang harus dibayar adalah Rp ${total.toLocaleString()}`
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})