const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read request data from Json format
app.use(express.json())
// fyi: Json is string

app.post("/cari", (request, response) => {
    let cari= request.body.cari
    let siswa= [
        {"nis": 101, "nama": "Adinda", "alamat": "Araya"}, 
        {"nis": 102, "nama": "Andika", "alamat": "Sawojajar"}, 
        {"nis": 103, "nama": "Ahmadi", "alamat": "Araya"}, 
        {"nis": 104, "nama": "Bibi", "alamat": "Kediri"}, 
        {"nis": 105, "nama": "Bubu", "alamat": "Kediri"}, 
        {"nis": 106, "nama": "Dino", "alamat": "Tulungagung"}, 
        {"nis": 107, "nama": "Fahri", "alamat": "Blitar"}, 
        {"nis": 108, "nama": "Galih", "alamat": "Tulungagung"}, 
        {"nis": 109, "nama": "Hadi", "alamat": "Tulungagung"}, 
        {"nis": 110, "nama": "Ika", "alamat": "Sawojajar"}
    ]

    const data = siswa.filter(siswa => siswa.alamat === cari || siswa.nama === cari || siswa.nis === cari)
    
    return response.json({
        jumlah_data : data.length,
        data : data
    })

})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})