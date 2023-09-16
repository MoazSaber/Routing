import React, { Component } from 'react'

export default class AboutContent extends Component {
  render() {
    return (
      <section id='About-content' className=''>
        <div className="container text-white">
            <h1 className='text-center text-white fw-bolder'>ABOUT COMPONENT</h1>
            <div className="star-box w-25 m-auto d-flex justify-content-between align-items-center ">
              <div></div>
              <i class="fa-solid fa-star"></i>
              <div></div>
            </div>
            <div className="row pb-5 mt-3 justify-content-center">
                <div className="col-lg-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae animi distinctio beatae fugiat. Modi repudiandae voluptatibus explicabo facilis sint nesciunt, animi autem quam officia!
                </div>
                <div className="col-lg-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae animi distinctio beatae fugiat. Modi repudiandae voluptatibus explicabo facilis sint nesciunt, animi autem quam officia!
                </div>
            </div>
        </div>
      </section>
    )
  }
}
