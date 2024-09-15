import ToDoItem from "./ToDoItem"
import { useEffect, useState } from "react"

export default function ToDoList({task}){
    const [data, setData] = useState([])
    const [key, setKey] = useState(0)
    useEffect(() => {
        if(task.length > 0){
            setData([...data,{id:key,task,done:false}]);
            setKey(key+1);
        }
    },[task])
    return (
        <>
            {data.map(d => <ToDoItem key={d.id} task={d} taskData={data} setTaskData={setData}/>)}
        </>
    )
}