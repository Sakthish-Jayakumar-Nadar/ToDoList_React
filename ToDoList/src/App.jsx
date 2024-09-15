import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList';
import { Box, Center } from '@chakra-ui/react';

function App() {
  const [task , setTask] = useState("");
  return (
    <Box bg='#E9D8FD'>
        <Header setTask={setTask}/>
      <Box h="90vh" w="100vw" display="flex" justifyContent="center" flexWrap="nowrap" overflowY="scroll">
        <Box h="100%" w="80%">
          <ToDoList task={task} />
        </Box>
      </Box>
    </Box>
  )
}

export default App
