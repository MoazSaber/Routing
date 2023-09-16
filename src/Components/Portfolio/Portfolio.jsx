import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import PortfolioContent from '../PortfolioContent/PortfolioContent'
import Footer from '../Footer/Footer'

export default class Portfolio extends Component {

  state = {
    imgs: [
      { id: 1 ,src: 'imgs/poert1.png'},
      { id: 2 ,src: 'imgs/port2.png'},
      { id: 3 ,src: 'imgs/port3.png'},
      { id: 4 ,src: 'imgs/poert1.png'},
      { id: 5 ,src: 'imgs/port2.png'},
      { id: 6 ,src: 'imgs/port3.png'},
    ]
  }

  render() {
    return (
      <>
        {/* <Navbar /> */}

        <section id='Port-content' className=''>
            <div className="container">
                <h1 className='text-center fw-bolder'>PORTFOLIO COMPONENT</h1>
                <div className="star-box w-25 m-auto d-flex justify-content-between align-items-center my-4">
                    <div></div>
                    <i class="fa-solid fa-star"></i>
                    <div></div>
                </div>

                <div className="row g-4 mb-4">
                    {this.state.imgs.map( ( img , idx ) => { return <PortfolioContent key={idx} pic={img} /> } )}
                </div>

            </div>
        </section>

        {/* <Footer /> */}

      </>
    )
  }
}
