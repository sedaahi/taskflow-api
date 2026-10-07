const validateTask = (req, res, next) => {
    const { title, description, priority, assignee } = req.body; //Request body'den gerekli alanları alıyoruz

    if (!title || !description || !priority || !assignee) { //bunların herhangi biri eksikse 400 Bad Request döndürüyoruz
        return res.status(400).json({
            message: "Title, description, priority and assignee are required",
        });
    }

    const validPriorities = ["low", "medium", "high"];

    if (!validPriorities.includes(priority)) {
        return res.status(400).json({
            message: "Priority must be low, medium or high",
        });
    }

    next(); //Eğer tüm alanlar mevcutsa, bir sonraki middleware'e geçiyoruz
};

module.exports = validateTask;