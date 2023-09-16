import React, { Component } from 'react'

export default class PortfolioContent extends Component {
  render() {


   const {src, id} = this.props.pic

    return (
      <>
                    <div className="col-md-4">
                        <div className='position-relative'>
                            <img src={src} alt="kb9" className='w-100 rounded-2' />
                            <div className="layer d-flex justify-content-center align-items-center"> <i class="fa-solid fa-plus text-white display-1"></i> </div>
                        </div>
                       
                    </div>
  
      </>
    )
  }
}
