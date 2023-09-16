import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <>
        <section id='Contact-content'>
          <div className="container py-5">
          <h1 className='text-center fw-bolder'>CONTACT SECTION</h1>
            <div className="star-box w-25 m-auto d-flex justify-content-between align-items-center ">
              <div></div>
              <i class="fa-solid fa-star"></i>
              <div></div>
            </div>
            <div className="row my-4">
              <div className="col-md-10 text-center bg-dark-subtle m-auto">
                    <input type="text" className='form-control  m-auto my-4' placeholder='userName' />
                    <input type="text" className='form-control  m-auto my-4' placeholder='Age' />
                    <input type="text" className='form-control  m-auto my-4' placeholder='email'/>
                    <input type="text" className='form-control  m-auto my-4' placeholder='Password'/>
                    <button className='btn btn-dark mt-2 w-100'>Send Message</button>
              </div>
            </div>
          </div>

        </section>
      </>
    )
  }
}
