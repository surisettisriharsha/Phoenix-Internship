require("dotenv").config();
const express = require("express");
const app = express();

// Routes
const authRoutes = require("./routes/auth");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED !!");
  });
const PORT = process.env.PORT || 8000;

//My Routes
app.use("/api", authRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Listening at PORT ${PORT}`);
});
