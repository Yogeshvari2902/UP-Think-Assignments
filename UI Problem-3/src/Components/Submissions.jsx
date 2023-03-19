import React from 'react'
import {Button,Flex} from "@chakra-ui/react"
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
        name:"Will Kinsman",
        submissionStatus:true,
        GradingStatus:false,
        submissionDate:"a month ago",
      },
    {
      id:2,
      name:"Taceveg 653",
      submissionStatus:true,
      GradingStatus:false,
      submissionDate:"6 hours ago",
    }
  ]

const Submissions = () => {
  return (
    <div>
        <div style={{fontSize:'30px', fontWeight:'bold'}}>Submissions</div>
        <div style={{border:'1px solid black', padding:'10px'}}>
        <TableContainer>
   <Table variant='simple'>
    <Thead>
      <Tr>
        <Th textAlign={'center'} fontSize={'15px'}>Name</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Submission Status</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Grading Status</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Submission Date</Th>
        <Th textAlign={'center'} fontSize={'15px'}>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data.map((item)=>(
          <Tr>
             <Td textAlign={'center'} fontSize={'15px'}>{item.name}</Td>
             <Td textAlign={'center'} fontSize={'15px'} color="white" bgColor={item.submissionStatus?'#8cc751':'#D0D0D0'} >{item.submissionStatus?'Submitted':'Pending'}</Td>
             <Td textAlign={'center'} fontSize={'15px'} color="white" bgColor={item.GradingStatus?'#8cc751':'#D0D0D0'} >{item.GradingStatus?'Submitted':'Pending'}</Td>
             <Td textAlign={'center'} fontSize={'15px'}>{item.submissionDate}</Td>
             <Td>
               <Flex gap="10px">
                 <Button fontSize={'15px'} bgColor={'#8cc751'} color='white' >Download Keylogs</Button>
                 <Button fontSize={'15px'} bgColor={'#034694'} color='white' >Show Submissions</Button>
               </Flex>
             </Td>
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

export default Submissions