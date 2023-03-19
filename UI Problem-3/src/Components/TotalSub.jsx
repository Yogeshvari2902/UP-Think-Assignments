import React from 'react'

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

const TotalSub = () => {
  return (
    <div style={{border:"2px solid #E0E0E0", height:'200px', width:'450px', borderRadius:'10px', padding:'5px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{fontSize:'100px', fontWeight:'bold'}}>{data.length}</div>
        <div style={{fontSize:'20px', textTransform:'uppercase'}}>Submissions</div>
    </div>
  )
}

export default TotalSub