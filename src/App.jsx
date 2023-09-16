import React, { Component } from 'react'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'




const router = createBrowserRouter([


  {path:'' , element: <Layout /> , children: [
    {path:'/', element: <About />   },
    {path:'about', element: <About />   },
    {path:'portfolio', element: <Portfolio />   },
    {path:'contact', element: <Contact />   },
    {path:'*', element: <>
                          <div className='d-flex justify-content-center vh-100'>
                            <h1 className='mt-5 p-5'>404: NOT FOUND</h1>
                          </div>
                          
                          </>   }

  ]    
}



  // {path:'/', element: <About />},
  // {path:'about', element: <About />},
  // {path:'portfolio', element: <Portfolio />},
  // {path:'contact', element: <Contact />},

  // {path:'*', element: <> <Navbar />
  //                         <div className='d-flex justify-content-center vh-100'>
  //                           <h1 className='mt-5'>404: NOT FOUND</h1>
  //                         </div>
  //                         <Footer />
  //                         </>   }
]
)

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={ router } />
      </>
    )
  }
}

