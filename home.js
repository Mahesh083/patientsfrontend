import React from 'react';
// import './patient.css'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './del';
import GetForm from './get';
import PatientRegistration from './post';
import UpdateForm from './put';

function Dum(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <h1 id='title'>Mahesh Hospital</h1>
                        <div class='nav-link'>
                    <Link to='/'><button><b>HOME</b></button></Link>
                    <Link to='/put'><button><b>UPDATE</b></button></Link>
                    <Link to='/get'><button><b>VIEW</b></button></Link>
                    <Link to='/del'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                <Routes>
                    
                
                <Route path='/' element={<PatientRegistration/>}/>
                <Route path='/get' element={<GetForm/>}/>
                <Route path='/put' element={<UpdateForm/>}/>
                <Route path='/del' element={<Deleteform/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Dum;