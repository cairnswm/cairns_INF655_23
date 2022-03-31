function saveTasks(tasks) {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
}

function loadTasks() {
    return JSON.parse(localStorage.getItem("Tasks"))
}

module.exports = { saveTasks, loadTasks }