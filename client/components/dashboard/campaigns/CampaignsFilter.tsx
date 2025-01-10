import React from 'react'

const filters=[
    {
        title:"opt-ins"
    },
    {
        title:"invites"
    },
    {
        title:"Accepted-Campaigns"
    },
    {
        title:"My Posts"
    },
]
const CampaignsFilter = () => {
  return (
    <div className='flex justify-between items-center w-full h-12 border border-primary/10 rounded bg-primary/10 px-4'>
      {
        filters.map((item,i)=>(
            <div className="" key={i}>{item.title}</div>
        ))
      }
    </div>
  )
}

export default CampaignsFilter
