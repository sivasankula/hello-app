import axios from 'axios';
import React, { useState } from 'react';
import '../Styles/login.css'


function ViewAcademy(props) {
    const [search , setSearch ] = useState("")
    const submitSearch = () =>{

        if(search === "")
            return ;
        axios.get('http://localhost:8080')
            .then(res => alert(res))
            .catch(err => alert(err)) ;
    }

    return (
        <div>
            <input style={{borderRadius : '5px' , width:"200px" , height : "25px" , padding : '10px'}} type='text' placeholder='Type here to serach' value = {search} onChange={e => setSearch(e.target.value)} /> <button onClick={submitSearch}>Search</button>
        </div>
    );
}

export default ViewAcademy;