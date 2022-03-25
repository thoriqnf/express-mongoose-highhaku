const express = require("express");
const cors = require("cors");

const db = require("./config/db")
const allRouter = require("./routes")

const app = express();
const PORT = process.env.PORT || 3000;

// buat koneksi
db
  .then(() => console.log("berhasil konek ke mongoose"))
  .catch((err) => console.log("gagal konek ke mongo"));

app.use(cors());
app.use(express.json());
app.use(allRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});