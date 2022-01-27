const { request, response } = require("express")
const express = require("express")
const { status } = require("express/lib/response")
const app = express()

// set to read request data from Json format
app.use(express.json())
// fyi: Json is string

app.post("/nilai", (request, response) => {
    let nilai = request.body.nilai
    let total =0
    let count =0
    let hasil = []

    // for dan hitung untuk rata rata
    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i].math + nilai[i].english
        count ++
    }
    count= count * 2
    let rata_rata = total/count

    // untuk setiap siswa
    for (let l = 0; l < nilai.length; l++) {
        let nilai_rata = (nilai[l].math + nilai[l].english) / 2
        if (nilai_rata > rata_rata) {
            var status = "Lulus"
        } else{
            var status = "Tidak_Lulus"
        }

        hasil.push({
            nama : nilai[l].nama,
            nilai_rata : nilai_rata,
            kelulusan : status
        })
        
    }
    
    return response.json({
        "rata_rata": `${total} / ${count} = ${rata_rata}`,
        hasil_siswa : hasil
    })
})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})