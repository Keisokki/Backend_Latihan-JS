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

// membuat endpoint "Celcius" dengan method GET
app.get("/celcius/:suhu", (req, res) => {
    // mengambil nilai suhu dari parameter
    let suhu = Number(req.params.suhu)
    // mengkonversi suhu dari Celcius ke Fahrenheit
    let fahrenheit = (suhu * 9/5) + 32
    // mengkonversi suhu dari Celcius ke Kelvin
    let kelvin = suhu + 273.15
    // mengkonversi suhu dari Celcius ke Reamur
    let reamur = suhu * 4/5
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        suhu_celcius: suhu,
        suhu_fahrenheit: fahrenheit,
        suhu_kelvin: kelvin,
        suhu_reamur: reamur
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// membuat endpoint "Fahrenheit" dengan method GET
app.get("/fahrenheit/:suhu", (req, res) => {
    // mengambil nilai suhu dari parameter
    let suhu = Number(req.params.suhu)
    // mengkonversi suhu dari Fahrenheit ke Celcius
    let celcius = (suhu - 32) * 5/9
    // mengkonversi suhu dari Fahrenheit ke Kelvin
    let kelvin = (suhu - 32) * 5/9 + 273.15
    // mengkonversi suhu dari Fahrenheit ke Reamur
    let reamur = (suhu - 32) * 4/9
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        suhu_fahrenheit: suhu,
        suhu_celcius: celcius,
        suhu_kelvin: kelvin,
        suhu_reamur: reamur
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// membuat endpoint "Kelvin" dengan method GET
app.get("/kelvin/:suhu", (req, res) => {
    // mengambil nilai suhu dari parameter
    let suhu = Number(req.params.suhu)
    // mengkonversi suhu dari Kelvin ke Celcius
    let celcius = suhu - 273.15
    // mengkonversi suhu dari Kelvin ke Fahrenheit
    let fahrenheit = (suhu - 273.15) * 9/5 + 32
    // mengkonversi suhu dari Kelvin ke Reamur
    let reamur = (suhu - 273.15) * 4/5
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        suhu_kelvin: suhu,
        suhu_celcius: celcius,
        suhu_fahrenheit: fahrenheit,
        suhu_reamur: reamur
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// membuat endpoint "Reamur" dengan method GET
app.get("/reamur/:suhu", (req, res) => {
    // mengambil nilai suhu dari parameter
    let suhu = Number(req.params.suhu)
    // mengkonversi suhu dari Reamur ke Celcius
    let celcius = suhu * 5/4
    // mengkonversi suhu dari Reamur ke Fahrenheit
    let fahrenheit = (suhu * 9/4) + 32
    // mengkonversi suhu dari Reamur ke Kelvin
    let kelvin = (suhu * 5/4) + 273.15
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        suhu_reamur: suhu,
        suhu_celcius: celcius,
        suhu_fahrenheit: fahrenheit,
        suhu_kelvin: kelvin
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})