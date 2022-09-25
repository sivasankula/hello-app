import React, { useEffect, useState } from 'react';
import '../Styles/login.css'

function AdminAcademy(props) {

    const [academyName , setAcademyName] = useState("");
    const [mobile , setMobile] = useState("");
    const [url , setUrl] = useState("");
    const [email , setEmail] = useState("");
    const [location , setLocation] = useState("");
    const [description , setDescription] = useState("");


    return (
        <div>
            <input placeholder='Enter Academy Name' value={academyName} className='inputStyle' onChange={e => setAcademyName(e.target.value)} /><br/><br/>
            <input placeholder='Enter mobile number' value={mobile} className='inputStyle' onChange={e => setMobile(e.target.value)} /><br/><br/>
            <input placeholder='Enter Academy Image url' value={url} className='inputStyle' onChange={e => setUrl(e.target.value)} /><br/><br/>
            <input placeholder='Enter Academy Email' value={email} className='inputStyle' onChange={e => setEmail(e.target.value)} /><br/><br/>
            <input placeholder='Enter Academy Location' value={location} className='inputStyle' onChange={e => setLocation(e.target.value)} /><br/><br/>

            <textarea className='textAreaStyle' placeholder='Enter Academy Description' value={description} onChange={e => setDescription(e.target.value)}></textarea><br/><br/>

            <button>Add Academy</button>
        </div>
    );
}

export default AdminAcademy;