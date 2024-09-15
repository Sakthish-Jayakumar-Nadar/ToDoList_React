import { Button, Box, Text, useDisclosure } from "@chakra-ui/react";
import InputModal from "./InputModal";

export default function Header({setTask}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg="#9F7AEA" color="#E9D8FD" display="flex" alignItems="center" justifyContent="space-between" h="10vh" w="100vw" p="15px">
                <Text fontSize="xl">My ToDo List</Text>
                <Button bg='#E9D8FD' color='#6B46C1' onClick={onOpen}>Add</Button>
            </Box>
            <InputModal isOpen={isOpen} onClose={onClose} setTask={setTask} title={"Add"} task={""}/>
      </>
    )
}