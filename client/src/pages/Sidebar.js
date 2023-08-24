import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <div className="bg-white sidebar">
            <div className="m-2">
                <span className='brand-name fs-4'>Piyush</span>
            </div>

            <hr className="text-dark" />

            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item py-2">
                    <i className="bi bi-speedometer2 me-2 fs-5"></i>
                    <span className='fs-6'>Dashboard</span>
                </Link>
            </div>
            <div className="list-group list-group-flush">
                <a href="" className="list-group-item py-2">
                    <i className="bi bi-house me-2 fs-5"></i>
                    <span className='fs-6'>Products</span>
                </a>
            </div>
            <div className="list-group list-group-flush">
                <a href="" className="list-group-item py-2">
                    <i className="bi bi-clipboard-data me-2 fs-5"></i>
                    <span className='fs-6'>Reports</span>
                </a>
            </div>
            <div className="list-group list-group-flush">
                <a href="" className="list-group-item py-2">
                    <i className="bi bi-people me-2 fs-5"></i>
                    <span className='fs-6'>Customers</span>
                </a>
            </div>
            <div className="list-group list-group-flush">
                <a href="" className="list-group-item py-2 fs-5">
                    <i className="bi bi-power me-2"></i>
                    <span className='fs-6'>Logout</span>
                </a>
            </div>
        </div>
    </>
  )
}

export default Sidebar