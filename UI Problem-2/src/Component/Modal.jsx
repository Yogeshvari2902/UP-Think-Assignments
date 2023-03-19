import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent,ModalHeader, ModalFooter, ModalBody,ModalCloseButton } from '@chakra-ui/react'

const ModalBox = ({id,name,email,isOpen,onClose, onEdit}) => {
    const [nameChange,setNameChange] = useState("")
    const [emailChange,setEmailChange] = useState("")
    const handleOnEditSubmit = (evt) => {
        // console.log(id,name,email)
        onEdit(id, nameChange, emailChange);
      };


  return (
    <div>
        <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px' />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <FormControl>
              <Flex>
              <FormLabel>Name</FormLabel>
              <Input name="name" defaultValue={name}  value={nameChange} onChange={(e)=>setNameChange(e.target.value)} placeholder='Name' />
              </Flex>
            </FormControl>
            <FormControl mt={4}>
              <Flex>
              <FormLabel>Email</FormLabel>
              <Input name="email" defaultValue={email} value={emailChange} onChange={(e)=>setEmailChange(e.target.value)} placeholder='Email' />
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleOnEditSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalBox