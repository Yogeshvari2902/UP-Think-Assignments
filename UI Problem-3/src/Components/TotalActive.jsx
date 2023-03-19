import React from 'react'

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

const TotalActive = () => {
  return (
    <div style={{border:"2px solid #E0E0E0",height:'200px', width:'450px', borderRadius:'10px', padding:'5px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{fontSize:'100px', fontWeight:'bold'}}>{data.length}</div>
        <div style={{fontSize:'20px', textTransform:'uppercase'}}>Active Students</div>
    </div>
  )
}

export default TotalActive