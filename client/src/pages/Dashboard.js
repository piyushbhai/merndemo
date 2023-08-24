import React from 'react'


const Dashboard = () => {
  return (
    <div className=''>
    
    <div className="container-fluid bg-transparent">
        <div className="row g-3 my-2">
            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                <div className="">
                  <h3 className='fs-2'>230</h3>
                  <p className='fs-5'>Sales</p>
                </div>
                <i className="bi bi-currency-dollar p-3 fs-1"></i>
                </div>
            </div>
            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                <div className="">
                  <h3 className='fs-2'>230</h3>
                  <p className='fs-5'>Orders</p>
                </div>
                <i className="bi bi-truck p-3 fs-1"></i>
                </div>
            </div>
            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                <div className="">
                  <h3 className='fs-2'>230</h3>
                  <p className='fs-5'>Products</p>
                </div>
                <i className="bi bi-cart-plus p-3 fs-1"></i>
                </div>
            </div>
            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                <div className="">
                  <h3 className='fs-2'>230</h3>
                  <p className='fs-5'>Increase</p>
                </div>
                <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
                </div>
            </div>
        </div>

        <div className="row pt-4">
          <div className="col-12">
            <h3 className='fs-4 text-white'>Recent Orders</h3>
            <div class="table-responsive">
              <table class="table caption-top rounded bg-white">
                <thead>
                  <tr>
                    <th scope="col">Column 1</th>
                    <th scope="col">Column 2</th>
                    <th scope="col">Column 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td scope="row">R1C1</td>
                    <td>R1C2</td>
                    <td>R1C3</td>
                  </tr>
                  <tr class="">
                    <td scope="row">Item</td>
                    <td>Item</td>
                    <td>Item</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard