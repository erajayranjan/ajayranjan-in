import CourseCard from "../../components/CourseCard"

import React,{ useState, useEffect } from 'react'
import { deleteData, getData, saveData } from "../../services/apiServices"
import Message from "../../components/utilities/Message"

const Courses = () => {
  // const courses=[
  //   {
  //     id:"1",
  //     course_title:"MernStack Developement Course for Begineers",
  //     images:[],
  //     course_name:"mern_stack_full_time",
  //     overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
  //     key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
  //     description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
  //     price:"55000",
  //     discount:"30000",
  //     selling_price:"25000",
  //   },
  //   {
  //     id:"2",
  //     course_title:"MernStack Developement",
  //     images:[],
  //     course_name:"mern_stack_full_time",
  //     overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
  //     key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
  //     description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
  //     price:"55000",
  //     discount:"30000",
  //     selling_price:"25000",
  //   },
  //   {
  //     id:"3",
  //     course_title:"MernStack Developement",
  //     images:[],
  //     course_name:"mern_stack_full_time",
  //     overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
  //     key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
  //     description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
  //     price:"55000",
  //     discount:"30000",
  //     selling_price:"25000",
  //   },
  //   // {
  //   //   id:"11",
  //   //   course_title:"MernStack Developement",
  //   //   images:[],
  //   //   course_name:"mern_stack_full_time",
  //   //   overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
  //   //   key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
  //   //   description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
  //   //   price:"55000",
  //   //   discount:"30000",
  //   //   selling_price:"25000",
  //   // },
  //   // {
  //   //   id:"12",
  //   //   course_title:"MernStack Developement",
  //   //   images:[],
  //   //   course_name:"mern_stack_full_time",
  //   //   overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
  //   //   key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"},{name:"Coding practice", image:"", description:"Fully practice based Approach"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
  //   //   description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
  //   //   price:"55000",
  //   //   discount:"30000",
  //   //   selling_price:"25000",
  //   // },
  //   // {
  //   //   id:"13",
  //   //   course_title:"MernStack Developement",
  //   //   images:[],
  //   //   course_name:"mern_stack_full_time",
  //   //   overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
  //   //   key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
  //   //   description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
  //   //   price:"55000",
  //   //   discount:"30000",
  //   //   selling_price:"25000",
  //   // }
  // ]

  const [courses, setCourses]=useState([])

  const loadCourses=async () => { 
    const res=await getData("course/all-course")

    if(res){
        res.data?.message ?
        setCourses(res.data.data) && Message.success(res.data.message) :
        Message.error(res.response?.error)
    }
 }

//  const updateRequest=async (data, status) => { 
//     const res=await saveData(`userQuery/edit-userQuery`, data)
//     if(res){
//         res.data?.message ?
//         Message.success(res.data.message) && loadCourses() :
//         Message.error(res.response?.error)
//     }
//  }

 const deleteCourse=async (id) => { 
  const res= await deleteData( `course/${id} `, null )  
      if(res){
        console.log(res)
        res.data?.message ?
        Message.success(res.data.message) :
        Message.error(res.response?.error);
        loadCourses();
    }
  }

  useEffect(() => {
    loadCourses()
  }, [])
  

  return (
    <div className="flex flex-wrap gap-6 justify-center ">
      {
        courses.map((course, index)=>{
          return(
            <div>
              
              <CourseCard key={index} course={course} deleteCourse={deleteCourse} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Courses