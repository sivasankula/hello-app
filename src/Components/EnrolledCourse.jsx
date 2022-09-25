import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EnrolledCourse(props) {

    const [courses , setCourses] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/getCourses")
            .then(res => {
                const data = res.data ;
                const courseDiv = [];
                for(let course of data){
                    courseDiv.push(<div>
                            <label>Course Name : </label><input readOnly value = {course.courseName}/> <br/>
                            <label>Joined Date : </label><input readOnly value = {course.joinedDate}/> <br/>
                            <label>Course End Date : </label><input readOnly value = {course.endDate}/> <br/>
                            <button>My learning</button>
                        </div>);
                }

                setCourses(courseDiv) ;
            }).catch(err => alert(err)) ;
    } , [])
    return (
        <div>
            {courses}
        </div>
    );
}

export default EnrolledCourse;