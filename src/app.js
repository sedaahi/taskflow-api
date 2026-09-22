const express = require("express");
const taskRoutes = require("./routes/taskRoutes"); //taskRoutes.js dosyasındaki route'ları kullanabilmek için import ediyoruz

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TASKFLOW API is running"
  });
});

app.use("/api/tasks", taskRoutes); //taskRoutes.js dosyasındaki route'ları kullanıyoruz

app.listen(PORT, () => {
  console.log(`TASKFLOW API is running on http://localhost:${PORT}`);
});