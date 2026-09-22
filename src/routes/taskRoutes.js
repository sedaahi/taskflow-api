const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
} = require("../controllers/taskController");

const router = express.Router(); //Express Router'ı kullanarak route'ları tanımlıyoruz

router.get("/", getAllTasks); //Bu route'a Get isteği geldiğinde getAllTasks fonksiyonunu çalıştırıyoruz

router.get("/:id", getTaskById);

router.post("/", createTask);

module.exports = router;