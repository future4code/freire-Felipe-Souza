import { connection } from ".."

const insertTaks = async (newTask: any): Promise<any> => {

    await connection
        .insert(newTask)
        .into("TodoListTask")
}

export default insertTaks