const express = require("express");
const validateTask = require("../middleware/validation");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTaskReport,
} = require("../controllers/taskController");

const router = express.Router(); //Express Router'ı kullanarak route'ları tanımlıyoruz

router.get("/", getAllTasks); //Bu route'a Get isteği geldiğinde getAllTasks fonksiyonunu çalıştırıyoruz
router.get("/report", getTaskReport); //getTaskById satırından önce olması önemli. Çünkü aksi durumda Express /report isteğindeki "report" değerini :id olarak değerlendirebilir.
router.get("/:id", getTaskById);

router.post("/", validateTask, createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;