import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CoursesCard from '../components/Courses/CoursesCard'
import {useDispatch} from 'react-redux'
import {get_Course} from '../actions/courseAction'
import AddCourseModal from '../components/Courses/AddCourseModal'
import NavBarInstructor from './NavBarIstructor'
const Courses = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( get_Course() );
    },[]);
    

    const courses = useSelector( (state) => state.courseReducer.courses)
    const user = useSelector(state => state.authReducer.user)
    console.log(courses);
    return (

        <div> 
            <NavBarInstructor></NavBarInstructor>
            <div className="position">
            <h1 className="titre" style={{ alignText:'center'}}>All Courses</h1>
           <p style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap'}} >
             
         {courses && courses.filter(el=>el.owner._id===user._id).map((course) => <CoursesCard key = {course._id} course = {course} />)} </p>
              <AddCourseModal/> 
              </div>
       </div>
      
    );
};

export default Courses;