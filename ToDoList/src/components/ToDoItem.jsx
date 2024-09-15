import { Button, Card, CardBody, CardFooter, Text, useDisclosure } from "@chakra-ui/react"
import { DeleteIcon, EditIcon,  } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import InputModal from "./InputModal";

export default function ToDoItem(prop){
    const {id , task, done} = prop.task;
    const taskData = prop.taskData;
    const setTaskData = prop.setTaskData;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [editTask, setEditTask] = useState("");
    function handleOnClickDone(){
        if(taskData.length > 0) setTaskData(taskData.map(task => {
            if(task.id === id) task.done = !task.done;
            return task;
        }));
    }
    function updateTask(){
        if(taskData.length > 0) setTaskData(taskData.map(t => {
            if(t.id === id) t.task = editTask;
            return t;
        }));
    }
    useEffect(() => {
        if(editTask.length > 0) updateTask();
    },[editTask])
 return (
    <>
        <Card bg={(done)?"#D6BCFA":""} w="100%" minH="2rem" m="10px" display="flex" flexDir="row" alignItems="center" justifyContent="space-between">
            <CardBody>
                <Text fontSize="lg" color="#6B46C1">{task}</Text>
            </CardBody>
            <CardFooter display="flex" flexDir="row" alignItems="center">
                <DeleteIcon fontSize="lg" color="#FC8181" cursor="pointer" onClick={() => {setTaskData(taskData.filter((t) => t.id !== id))}}/>
                {!done && <EditIcon fontSize="lg" color="#6B46C1" ml="0.7rem" cursor="pointer" onClick={onOpen}/>}
                <Button bg='#E9D8FD' color='#6B46C1' ml="0.7rem" onClick={handleOnClickDone}>{(done)?"Undo":"Done"}</Button>
            </CardFooter>
        </Card>
        <InputModal isOpen={isOpen} onClose={onClose} setTask={setEditTask} title={"Edit"} task={task}/>
    </>
 )
}