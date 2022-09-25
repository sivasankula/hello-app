import axios from 'axios';
import React, { useEffect, useRef } from 'react';

const addStudent = () =>{
    /** to redirect */
}

function AdminStudent(props) {
    const studentsDiv = []
    const tableRef = useRef('')

    useEffect(() => {
        const students = [] ;
        axios.get("http://localhost:8080/admin/viewStudents/")
            .then(res => students = res.data )
            .catch(err => console.log(err)) ;
        
        for(let student of students){
            studentsDiv.push(
                <tr>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.enrolledCourse}</td>
                    <td>{student.mobileNumber}</td>
                    <td>Click</td>
                </tr>
            );
        }

    } , [])
    return (
        <div>
            <table ref={tableRef}>
                <tr>
                    <th>Student ID</th>
                    <th>Student name</th>
                    <th>Enrolled course</th>
                    <th>Mobile number</th>
                    <th>Student ID</th>
                    <th>Actions</th>
                </tr>
                {studentsDiv}
            </table>

            <button onClick={addStudent}>+ Add Student</button>
        </div>
    );
}

export default AdminStudent;