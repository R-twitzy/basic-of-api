const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/uang", (request, response) => {
    let uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500]
    let butuh = request.body.butuh
    let hasil = []

    for (let i = 0; i < uang.length; i++) {
        if (butuh >= uang[i]) {
            let jmlUang = Math.floor(butuh/uang[i])
            butuh -= (jmlUang * uang[i])

            hasil.push({
                pecahan : uang[i],
                jumlah : jmlUang
            })
        }
    }


    return response.json({
        hasil_pecahan : hasil
    })
})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})