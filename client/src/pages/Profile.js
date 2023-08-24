import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {BASEURL} from './Baseurl'

const Profile = () => {
    const [data,setData] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(data);
        const formdata = new FormData()
        formdata.append('formdata',JSON.stringify(data))
        await axios.post(BASEURL+'save-profile',formdata)
        .then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
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
                        <label className="text-white">Address</label>
                        <textarea name="address" onChange={handleChange} className='form-control' id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="offset-sm-2 col-sm-8">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Profile