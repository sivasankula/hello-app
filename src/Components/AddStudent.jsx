import React, { useState } from 'react';

const addStudent = () => {

}

function AddStudent(props) {

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [fatherName , setFatherName] = useState("");
    const [motherName , setMotherName] = useState("");
    const [email , setEmail] = useState("");
    const [age , setAge] = useState("");
    const [gender , setGender] = useState("");
    const [mobile , setMobile] = useState("");
    const [alternameMobile , setAlternameMobile] = useState("");
    const [houseNo , setHouseNo] = useState("") ;
    const [streetName , setStreetName] = useState("");
    const [areaName , setAreaName] = useState("");
    const [pincode , setPincode] = useState("");
    const [state , setState] = useState("");
    const [nationality , setNationality] = useState("") ;

    return (
        <div>

            <div>
                <input type = 'text' placeholder='Enter your first name' value={firstName} onChange={e => setFirstName(e.target.value)}/><br/>
                <input type = 'text' placeholder='Enter your father name' value={fatherName} onChange={e => setFatherName(e.target.value)}/><br/>
                <input type = 'text' placeholder='Enter your mother name' value={motherName} onChange={e => setMotherName(e.target.value)} /><br/>
                <input type = 'text' placeholder='enter email Id' value={email} onChange={e => setEmail(e.target.value)} /><br/>
                <input type = 'text' placeholder='enter your age' value={age} onChange={e => setAge(e.target.value)} /><br/>
            </div>

            <div>
                <input type = 'text' placeholder='Enter your last name' value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
                <input type = 'text' placeholder='Enter male or female' value={gender} onChange={e => setGender(e.target.value)}  /><br/>
                <input type = 'text' placeholder='Enter phone number' value={mobile} onChange={e => setMobile(e.target.value)} /><br/>
                <input type = 'text' placeholder='Enter alternate number' value={alternameMobile} onChange={e => setAlternameMobile(e.target.value)} /><br/>
            </div>

            <div>
                <p>Address Information</p>
                <input type = 'text' placeholder='House Number' value={houseNo} onChange={setHouseNo} /><br/>
                <input type = 'text' placeholder='Street Name' value={streetName} onChange={setStreetName}/><br/>
                <input type = 'text' placeholder='Area Name' value={areaName} onChange={setAreaName} /><br/>
                <input type = 'text' placeholder='Pincode' value={pincode} onChange={e => setPincode}  /><br/>
                <input type = 'text' placeholder='state' value={state} onChange={e => setState} /><br/>
                <input type = 'text' placeholder='Nationality' value={nationality} onChange={e => setNationality} /><br/>
            </div>

            <button onClick={addStudent}>Add Student</button>

        </div>
    );
}

export default AddStudent;