const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read request data from Json format
app.use(express.json())
// fyi: Json is string

app.post("/sembako", (request, response) => {
    let barang = request.body.barang
    let total_bayar =0
    let total_qty =0
    hasil =[]
    
    for (let i = 0; i < barang.length; i++) {
        let total = barang[i].price * barang[i].qty
        if (barang[i].qty >= barang[i].min_discount) {
            total -= total * barang[i].discount
        } else{ }
        
        hasil.push({
            nama : barang[i].name,
            harga : barang[i].price.toLocaleString(),
            jumlah : barang[i].qty,
            bayar : total.toLocaleString()
        })

        total_bayar += total
        total_qty += barang[i].qty
    }

    return response.json({
        "Total yang harus dibayar" : `Rp ${total_bayar.toLocaleString()}`,
        "Total item" : total_qty,
        rincian : hasil
    })
})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})