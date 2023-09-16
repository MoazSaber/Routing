import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return ( <>

    <section id='footer' className='p-5 text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h3>LOCATION</h3>
                        <h6>2215 John Daniel Drive</h6>
                        <h6>Clark, MO 65243</h6>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>AROUND THE WEB</h3>
                        <div id='social-icons' className='d-flex justify-content-around w-75 m-auto'>
                            <span><i class="fa-brands fa-facebook"></i></span>
                            <span><i class="fa-brands fa-twitter"></i></span>
                            <span><i class="fa-brands fa-twitch"></i></span>
                            <span><i class="fa-brands fa-youtube"></i></span>
                        </div>
                       
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <h6>Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
                    </div>
                </div>
            </div>
        </section>
        <section id='copy-right' className='p-3 text-white'>
            <h6 className='text-center'>Copyright © Your Website 2021</h6>
        </section>
    </>

     
    
        

        )
  }
}
