import React,{useEffect,useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {BASEURL} from './Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(data);
        await axios.post(BASEURL+'signin',{data:JSON.stringify(data)})
        .then(res=>{
            // console.log(res); return
            localStorage.setItem('usertoken',res.data.usertoken);             
            localStorage.setItem('emailID',res.data.email);             
            localStorage.setItem('userID',res.data.id);             
            localStorage.setItem('userName',res.data.name);             

            toast(res.data.message)
            navigate("/");

        }).catch(err=>{
            console.log(err.response.data.error);
            toast(err.response.data.error)
        })
    }
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value})        
    }
  return (
    <>
        <div class="container-fluid bg-transparent row g-3 my-2">
            <form onSubmit={handleSubmit}>
                <div class="mb-3 row">
                    <div class="offset-sm-2 col-8 mb-3">
                        <label className="text-white">Email</label>
                        <input type="text" onChange={handleChange} class="form-control" name="email" id="inputName" placeholder="Name"/>
                    </div>
                    <div class="offset-sm-2 col-8 mb-3">
                        <label className="text-white">Password</label>
                        <input type="password" onChange={handleChange} class="form-control" name="password" id="inputName" placeholder="Name"/>
                    </div>
                   
                </div>
                <div class="mb-3 row">
                    <div class="offset-sm-2 col-sm-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                        <Link to="/signup" className='text-white pl-3'>Signup</Link>
                        <ToastContainer/>
                    </div>
                    
                </div>
            </form>
        </div>
    </>
  )
}

export default Profile