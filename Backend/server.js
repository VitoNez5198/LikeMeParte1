const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
