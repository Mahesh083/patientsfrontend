import axios from 'axios';
import {useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import './patient.css';


function PatientRegistration()
{
    const [id, setId] = useState('');
    const [patientName, setPatientName] = useState("");
    const [diseaseName, setDiseaseName] = useState("");
    const [wardNo, setWardNo] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
   
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8089/patients/save",
        {
        
        patientName:patientName,
        diseaseName:diseaseName,
        wardNo:wardNo,
        dateOfBirth:dateOfBirth,
        age:age,
        phoneNumber:phoneNumber,
        address : address,
        gender:gender
        });
          alert("Patient Registation  is Successfully Completed.");
          setId("");
          setPatientName("");
          setDiseaseName("");
          setAddress("");
          setAge("");
          setDateOfBirth("");
          setPhoneNumber("");
          setGender("");
          setWardNo("");
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (

        <div class="container mt-4"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h1>Enter The Details</h1></center>
        <form>
        <div class="form-group">
            <label><span>PatientName</span></label>
            <input type="text" class="form-control" placeholder="Enter PatientName"
             value={patientName}
            onChange={(event) =>
              {
                setPatientName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>DiseaseName</span></label>
            <input type="text" class="form-control" placeholder="Enter DiseaseName"
             value={diseaseName}
            onChange={(event) =>
              {
                setDiseaseName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Address</span></label>
            <input type="text" class="form-control" placeholder="Enter Address"
             value={address}
             onChange={(event) =>
               {
                setAddress(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Age</span></label>
            <input type="text" class="form-control" placeholder="Enter age"
             value={age}
             onChange={(event) =>
               {
                setAge(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>DateOfBirth</span></label>
            <input type="text" class="form-control" placeholder="Enter DOB"
            value={dateOfBirth}
            onChange={(event) =>
              {
                setDateOfBirth(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>WardNo</span></label>
            <input type="text" class="form-control" placeholder="Enter WardNo"
            value={wardNo}
            onChange={(event) =>
              {
                setWardNo(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>PhoneNumber</span></label>
            <input type="text" class="form-control" placeholder="Enter WardNo"
            value={phoneNumber}
            onChange={(event) =>
              {
                setPhoneNumber(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Gender</span></label>
            <input type="text" class="form-control" placeholder="Enter Gender"
            value={gender}
            onChange={(event) =>
              {
                setGender(event.target.value);      
              }}
           />
        </div>
        <br></br>
       <center> <button class="btn btn-primary mt-4"  onClick={save}>Register</button></center>
        </form>

 
      </div>
    
    );
  }
  
  export default PatientRegistration;