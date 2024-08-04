import {useState} from "react";

function App() {
    interface Task {
        taskName: string;
    }

    const [taskList, setTaskList] = useState<Task[]>([]);
    const [task, setTask] = useState<string>("");

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTaskList([...taskList, { taskName: task }]);
        setTask("");
    };

    const deleteTask = (indexToDelete: number) => {
        setTaskList(taskList.filter((_, index) => index !== indexToDelete));
    }

  return (
    <div className={"bg-cyan-100 w-full h-screen flex items-center"}>

        <div className={"w-[500px] mx-auto bg-white p-5 text-center rounded-lg pb-3 "}>

            <h1 className={"text-5xl font-bold mb-3 pb-4"}>Todo List</h1>
            <form className={"mb-2 border-b-2 border-t-2 border-black pt-4 pb-4"} onSubmit={handleForm}>
                <p className={"text-left ml-0.5 mb-1"}>Insert Task:</p>
                <input className={"mb-5 border-2 border-gray-500 rounded-md w-full p-2 placeholder:italic placeholder:text-gray-400"}
                       type = "text"
                       placeholder={"example: Do Laundry"}
                       value={task}
                       onChange={(e) => setTask(e.target.value)}
                />
                <button type={"submit"} className={"bg-blue-600 text-white rounded-lg p-2 px-4"}>Add Task</button>
            </form>

            <div className={""}>
                <p className={"text-left ml-0.5"}>Current Tasks:</p>
                <ul className={"mt-4"}>

                    {taskList.map((singleTask, index) => (
                        <li className={"bg-gray-100 text-left pl-3 rounded flex justify-between items-center mb-2"}>
                            {singleTask.taskName}
                            <span
                                onClick={() => {deleteTask(index)}}
                                className={"text-red-500 text-2xl rounded px-1 bg-red-300 cursor-pointer"}
                            >x</span>
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    </div>
  )
}

export default App
