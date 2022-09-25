import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminCourse(props) {
    const [courseDiv , setCourseDiv] = useState([]);

    

    useEffect(() => {
        axios.get("http://localhost:8080/admin/viewCourses")
            .then(res => {
                const courses = [];
                for(const course of res.data){
                    courses.push(
                        <div>
                            <lable>Course Id</lable> : {course.courseId}
                            <lable>Course Name</lable> : {course.courseName}
                            <lable>Number of Students</lable> : {course.registeredStudents}
                            <label>Course Duration</label> : {course.courseDuration}
                            <lable>Course Available Timings</lable> : {course.timings}
                            <lable>Course Description</lable> : {course.description}
                        </div>
                    );
                }

                setCourseDiv(courses) ;
            })
            .catch(err => console.log(err)) ;

    }  , [])
    

    
    return (
        <div>
            {courseDiv}
        </div>
    );
}

export default AdminCourse;