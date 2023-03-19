import React, { useEffect, useState} from 'react';
import {Table,Thead,Tbody,Tr,Th,Td,TableCaption, TableContainer, Button, useDisclosure, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react'
import ModalBox from '../Component/Modal';

const getData=async ()=>{
    const res = await fetch("https://my-test-api-z4lk.onrender.com/users");
    return await res.json();
}


const TableData = () => {
    const [data,setData] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    useEffect(()=>{
        getData()
        .then(res=>{
            setData(res)
        })
    },[])

    const onEdit = async (id, name, email) => {
        await fetch(`https://my-test-api-z4lk.onrender.com/users/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            name: name,
            email: email
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then((res) => {
            const updatedData = data.map((user) => {
              if (user.id === id) {
                user.name = name;
                user.email = email;
              }
    
              return user;
            });
    
            setData((users) => updatedData);
          })
          .catch((error) => console.log(error));
      };

    

  return (
    <div>
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>User Management</TableCaption>
    <Thead>
      <Tr>
        <Th fontSize={'15px'} >Name</Th>
        <Th fontSize={'15px'} >Email</Th>
        <Th fontSize={'15px'} >Groups</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data.map((item)=>(
            <>
            <Tr key={item.id}>
              <Td fontSize={'13px'}>{item.name}</Td>
              <Td fontSize={'13px'}>{item.email}</Td>
               <Td fontSize={'13px'}>
                 <Button color={'white'} bgColor={item.group==="Instructor"?'purple.400':item.group==="Admin"?"red.400":"blue.400"}
                 onClick={onOpen}>
                    {item.group}
                 </Button>
               </Td>
            </Tr>
            </>
        ))
      }
     <ModalBox id={data.id} name={data.name} email={data.email} isOpen={isOpen} onClose={onClose} onEdit={onEdit}/>
    </Tbody>

  </Table>
       </TableContainer>
    </div>
  )
}

export default TableData
