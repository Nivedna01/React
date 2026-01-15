import React from 'react'
import Card from './components/card'


const App = () => {

      const jobRecruitments = [
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    companyName: "Google",
    postedDaysAgo: "2 days ago",
    role: "Senior UI/UX Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150 / hour",
    location: "Bangalore"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNuvdA60X9tQmlPWSA2qd2ZojccIVAes_HA&s",
    companyName: "Apple",
    postedDaysAgo: "5 days ago",
    role: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$160 / hour",
    location: "Hyderabad"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    postedDaysAgo: "1 day ago",
    role: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$130 / hour",
    location: "Bangalore"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    postedDaysAgo: "3 days ago",
    role: "UX Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$170 / hour",
    location: "Mumbai"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    postedDaysAgo: "6 days ago",
    role: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$180 / hour",
    location: "Remote"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    postedDaysAgo: "4 days ago",
    role: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$145 / hour",
    location: "Hyderabad"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    companyName: "Google",
    postedDaysAgo: "7 days ago",
    role: "UX Researcher",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$120 / hour",
    location: "Pune"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNuvdA60X9tQmlPWSA2qd2ZojccIVAes_HA&s",
    companyName: "Apple",
    postedDaysAgo: "8 days ago",
    role: "Mobile UI Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$135 / hour",
    location: "Bangalore"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    postedDaysAgo: "9 days ago",
    role: "Design Technologist",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$140 / hour",
    location: "Chennai"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    postedDaysAgo: "10 days ago",
    role: "Visual Designer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$125 / hour",
    location: "Remote"
  }
];

  console.log(jobRecruitments)

  return (

    <div className='parent'>
     
    {
      jobRecruitments.map(function(elem , key)
      {
        return <div key="idx">
         <Card logo={elem.companyLogo} company={elem.companyName} post={elem.postedDaysAgo} role={elem.role} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
         </div>
          
      
      })
    }
     
    </div>
  )
}

export default App