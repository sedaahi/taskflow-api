const tasks = require("../data/tasks.json"); //Task.json dosyasından verileri alıyoruz

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


module.exports = {
  getAllTasks, //fonksiyonu başka dosyalarda kullanabilmek için export ediyoruz
  getTaskById,
}