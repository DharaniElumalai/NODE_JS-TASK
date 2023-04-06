const TaskDetails = require('../models/taskDetails')

const getAllTasks = async () => {
    try {
        let response = await TaskDetails.findAll({
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error occurred while fetching all the tasks from DB: ", err);
        return false;
    }
}
const getTaskById = async (taskId) => {
    try {
        let response =  await TaskDetails.findOne({
            where:{
                task_id: taskId
            }
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const createTask = async (data) => {
    try {
        let response =  await TaskDetails.create(data)
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const updateTask = async (id, data) => {
    try {
        let response =  await TaskDetails.update(data,{
            where:{
                task_id: id
            }
            
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const deleteTask = async (id) => {
    try {
        let response =  await TaskDetails.destroy({
            where:{
                task_id: id
            }
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

module.exports = {
    getAllTasks: getAllTasks,
    getTaskById: getTaskById,
    createTask : createTask,
    updateTask : updateTask,
    deleteTask : deleteTask,
}


