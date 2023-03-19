import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const data=[
  {
    id:1,
    name:"Taceveg 653",
    lastActivity:"12 hours ago",
    sessions: 7,
    words: 65,
    submissionDate:"12 hours ago",
    typeID:"100%",
    cb:"100%"
  },
  {
    id:2,
    name:"Will Kinsman",
    lastActivity:"a month ago",
    sessions: 2,
    words: 118,
    submissionDate:"a month ago",
    typeID:"80%",
    cb:"44%"
  }
]

const Active = () => {
  return (

    <div style={{border:'1px solid #E0E0E0', borderRadius:'10px', padding:'15px'}}>
      <div style={{fontSize:'25px', textAlign:'center', fontWeight:'600'}}>Active Students</div>
       <div>
       <TableContainer border={'2px solid #E0E0E0'}>
     <Table variant='simple'>
      <Thead>
      <Tr>
        <Th textAlign={'center'} fontSize={'15px'}>Name</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Last Activity</Th>
        <Th textAlign={'center'} fontSize={'15px'} isNumeric>Sessions</Th>
        <Th textAlign={'center'} fontSize={'15px'} isNumeric>Words</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Submission Date</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Type ID</Th>
        <Th textAlign={'center'} fontSize={'15px'}>CB</Th>
      </Tr>
      </Thead>
      <Tbody>
      {
        data.map((item)=>(
          <Tr>
             <Td textAlign={'center'} fontSize={'15px'}>{item.name}</Td>
             <Td textAlign={'center'} fontSize={'15px'}>{item.lastActivity}</Td>
             <Td textAlign={'center'} fontSize={'15px'} >{item.sessions}</Td>
             <Td textAlign={'center'} fontSize={'15px'} >{item.words}</Td>
             <Td textAlign={'center'} fontSize={'15px'}>{item.submissionDate}</Td>
             <Td textAlign={'center'} fontSize={'15px'}>{item.typeID}</Td>
             <Td textAlign={'center'} fontSize={'15px'}>{item.cb}</Td>
          </Tr>
        ))
      }
      </Tbody>
     </Table>
    </TableContainer>
       </div>
    </div>
  )
}

export default Active