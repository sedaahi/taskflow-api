const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router(); //Express Router'ı kullanarak route'ları tanımlıyoruz

router.get("/", getAllTasks); //Bu route'a Get isteği geldiğinde getAllTasks fonksiyonunu çalıştırıyoruz

router.get("/:id", getTaskById);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;