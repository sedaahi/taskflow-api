const fs = require("fs"); //dosyaya veri yazmak için fs modülünü import ediyoruz
const path = require("path"); //task.json dosyasının yolunu almak için path modülünü import ediyoruz

const tasksFilePath = path.join(__dirname, "../data/tasks.json"); //şu an çalışan dosyanın bulunduğu klasörü verir.

const tasks = require("../data/tasks.json"); //Task.json dosyasından verileri alıyoruz

const saveTasks = () => {
  fs.writeFileSync(
    tasksFilePath,
    JSON.stringify(tasks, null, 2)
  );
};


const getAllTasks = (req, res) => {
  res.status(200).json(tasks); //Tüm görevleri döndürüyoruz
};

const getTaskById = (req, res) => {
  const id = Number(req.params.id); //Parametre olarak gelen id'yi alıyoruz ve Number tipine çeviriyoruz

  const task = tasks.find((task) => task.id === id); //tasks dizisinde id'si eşleşen görevi buluyoruz

  if (!task) { //Eğer görev bulunamazsa 404 hatası döndürüyoruz
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json(task); //Eğer görev bulunursa 200 OK ile birlikte görevi döndürüyoruz
};

const createTask = (req, res) => {
  const { title, description, status, priority, assignee } = req.body;

  const newTask = {
    id: tasks.length > 0
      ? Math.max(...tasks.map((task) => task.id)) + 1
      : 1,
    title,
    description,
    status: status || "pending",
    priority,
    assignee,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  saveTasks();

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === id); //findIndex=>dizideki konumunu veriyor=> bulamazsa -1 döndürüyor

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const updatedTask = {
    ...tasks[taskIndex],
    ...req.body,
    id: tasks[taskIndex].id,
    createdAt: tasks[taskIndex].createdAt,
  };

  tasks[taskIndex] = updatedTask;

  saveTasks();

  res.status(200).json(updatedTask);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0]; //splice=>diziden eleman silmek için kullanılır. Silinen elemanı döndürür.

  saveTasks();

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask,
  });
};

module.exports = {
  getAllTasks, //fonksiyonu başka dosyalarda kullanabilmek için export ediyoruz
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}