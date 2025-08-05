const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express() //implementasi express
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//end-point BMI
app.post("/bmi", (req, res) => {
    let { berat, tinggi } = req.body;
    let bmi = berat / (tinggi * tinggi);
    // membuat objek yang berisi data yang akan dijadikan response
    let kategori;
    if (bmi < 18.5) {
        kategori = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Normal";
    } else if (bmi >= 25.0 && bmi < 29.9) {
        kategori = "Kelebihan Berat Badan";
    } else {
        kategori = "Obesitas";
    }
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        berat: berat,
        tinggi: tinggi,
        bmi: bmi.toFixed(1), // membatasi 1 angka di belakang koma
        kategori: kategori
    }
    res.json(response);
});

app.listen(8000, () => {
    console.log("Server run on port 8000");
})