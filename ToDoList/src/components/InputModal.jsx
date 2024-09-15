import { Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function InputModal({isOpen, onClose, setTask, title, task}) {
    const [inputValue, setInputValue] = useState("");
    const [isRequired, setIsRequired] = useState(false);
    function handleOnClick(){
        if(inputValue.trim() !== "") {
            setTask(inputValue);
            setInputValue("");
            onClose();
        }
        else {
            setIsRequired(true);
        }
    }
    useEffect(() => {
        setInputValue(task);
    },[task])
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color='#6B46C1'>{title} Task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        <Input 
                        borderWidth={1}
                        borderColor={(isRequired)?"#F56565":"#9F7AEA"}
                        color='#553C9A' placeholder='Task' 
                        onChange={(e) => setInputValue(e.target.value)} 
                        onFocus={() => setIsRequired(false)}
                        value={inputValue}
                        />
                        {isRequired && <Text color="#F56565" fontSize="small" ml={3}>Required</Text>}
                    </Box>
                </ModalBody>
                <ModalFooter>
                <Button bg='#E9D8FD' color='#6B46C1' onClick={handleOnClick}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}