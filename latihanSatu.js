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

// Endpoint untuk Balok
app.post('/bangunRuang/balok', (req, res) => {
  let { panjang, lebar, tinggi } = req.body;


  let volume = panjang * lebar * tinggi;
  let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

  res.json({
    bangun_ruang: 'Balok',
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    volume: volume,
    luas_permukaan: luasPermukaan,
  });
});

// Endpoint untuk Kubus
app.post('/bangunRuang/kubus', (req, res) => {
  let { sisi } = req.body;

  let volume = sisi * sisi * sisi;
  let luasPermukaan = 6 * sisi * sisi;

  res.json({
    bangun_ruang: 'Kubus',
    sisi: sisi,
    volume: volume,
    luas_permukaan: luasPermukaan,
  });
});

// Endpoint untuk Bola
app.post('/bangunRuang/bola', (req, res) => {
  let { jari_jari } = req.body;


  let pi = Math.PI;
  let volume = (4 / 3) * pi * Math.pow(jari_jari, 3);
  let luasPermukaan = 4 * pi * Math.pow(jari_jari, 2);

  res.json({
    bangun_ruang: 'Bola',
    jari_jari: jari_jari,
    volume: volume,
    luas_permukaan: luasPermukaan,
  });
});

// Endpoint untuk Tabung
app.post('/bangunRuang/tabung', (req, res) => {
  let { jari_jari, tinggi } = req.body;

  let pi = Math.PI;
  let volume = pi * Math.pow(jari_jari, 2) * tinggi;
  let luasPermukaan = 2 * pi * jari_jari * (jari_jari + tinggi);

  res.json({
    bangun_ruang: 'Tabung',
    jari_jari: jari_jari,
    tinggi: tinggi,
    volume: volume,
    luas_permukaan: luasPermukaan,
  });
});

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
