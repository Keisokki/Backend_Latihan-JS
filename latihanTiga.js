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

// end-point untuk bilangan desimal
app.post("/desimal", (req, res) => {
    let { bilangan } = req.body;
    let decimal = parseInt(bilangan, 10);
    // mengkonversi bilangan desimal ke biner
    let biner = decimal.toString(2);
    // mengkonversi bilangan desimal ke oktal   
    let oktal = decimal.toString(8);
    // mengkonversi bilangan desimal ke heksadesimal
    let heksadesimal = decimal.toString(16).toUpperCase();
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        bilangan_desimal: bilangan,
        bilangan_biner: biner,
        bilangan_oktal: oktal,
        bilangan_heksadesimal: heksadesimal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response);
});
// end-point untuk bilangan biner
app.post("/biner", (req, res) => {
    let { bilangan } = req.body;
    let biner = bilangan;
    // mengkonversi bilangan biner ke desimal
    let desimal = parseInt(biner, 2);
    // mengkonversi bilangan biner ke oktal
    let oktal = desimal.toString(8);
    // mengkonversi bilangan biner ke heksadesimal
    let heksadesimal = desimal.toString(16).toUpperCase();
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        bilangan_biner: biner,
        bilangan_desimal: desimal,
        bilangan_oktal: oktal,
        bilangan_heksadesimal: heksadesimal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response);
});
// end-point untuk bilangan oktal
app.post("/oktal", (req, res) => {
    let { bilangan } = req.body;
    let oktal = bilangan;
    // mengkonversi bilangan oktal ke desimal
    let desimal = parseInt(oktal, 8);
    // mengkonversi bilangan oktal ke biner
    let biner = desimal.toString(2);
    // mengkonversi bilangan oktal ke heksadesimal
    let heksadesimal = desimal.toString(16).toUpperCase();
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        bilangan_oktal: oktal,
        bilangan_desimal: desimal,
        bilangan_biner: biner,
        bilangan_heksadesimal: heksadesimal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response);
});
// end-point untuk bilangan heksadesimal
app.post("/heksadesimal", (req, res) => {
    let { bilangan } = req.body;
    let heksadesimal = bilangan;
    // mengkonversi bilangan heksadesimal ke desimal
    let desimal = parseInt(heksadesimal, 16);
    // mengkonversi bilangan heksadesimal ke biner
    let biner = desimal.toString(2);
    // mengkonversi bilangan heksadesimal ke oktal
    let oktal = desimal.toString(8);
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        bilangan_heksadesimal: heksadesimal,
        bilangan_desimal: desimal,
        bilangan_biner: biner,
        bilangan_oktal: oktal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response);
});

app.listen(8000, () => {
    console.log("Server run on port 8000");
})