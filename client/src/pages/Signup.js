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
        const formdata = new FormData()
        formdata.append('formdata',JSON.stringify(data))
        await axios.post(BASEURL+'signup',{data:JSON.stringify(data)})
        .then(res=>{
            console.log(res);
            toast(res.data.message)
            navigate("/login");

        }).catch(err=>{
            // console.log(err.response.data.msg);
            toast(err.response.data.msg)
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
                        <label className="text-white">Name</label>
                        <input type="text" onChange={handleChange} class="form-control" name="name" id="inputName" placeholder="Name"/>
                    </div>
                    <div class="offset-sm-2 col-8 mb-3">
                        <label className="text-white">Email</label>
                        <input type="text" onChange={handleChange} class="form-control" name="email" id="inputName" placeholder="Name"/>
                    </div>
                    <div class="offset-sm-2 col-8 mb-3">
                        <label className="text-white">Phone</label>
                        <input type="text" onChange={handleChange} class="form-control" name="phone" id="inputName" placeholder="Name"/>
                    </div>
                    <div class="offset-sm-2 col-8 mb-3">
                        <label className="text-white">Password</label>
                        <input type="text" onChange={handleChange} class="form-control" name="password" id="inputName" placeholder="Name"/>
                    </div>
                    <div class="offset-sm-2 col-8 mb-3">
                        <label className="text-white">Address</label>
                        <textarea name="address" onChange={handleChange} className='form-control' id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="offset-sm-2 col-sm-3">
                        <button type="submit" class="btn btn-primary">Signup</button>
                        <Link to="/login" className='text-white pl-3'>Login</Link>
                        <ToastContainer />
                    </div>
                    
                </div>
            </form>
        </div>
    </>
  )
}

export default Profile