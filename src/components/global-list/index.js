import React, { useState } from 'react'
import Header from './header'
import SideBar from './sideBar'
import LevelOfAssociate from './level-of-associate'
import Companies from './companies'
import Salutations from './salutations'
import EventTypes from './event-types'



const GlobalList = () => {

    const [sidBar, setSideBar] = useState(false);

    const showSideBar = () => {

        setSideBar(!sidBar)
    }


    return (
        <div className="container-fluid Global_Lists">
         
         <Header click={showSideBar}/>


          <div className="wrapper">
         
            <SideBar  active={sidBar}/>

            <div className="content">
              <nav className="navbar navbar-expand-lg navbar-light content_nav">
                <div className="container-fluid">
                  <div className="page_title">
                              Global Lists
                          </div>
                  
                  <div className="container">
                    <div className="row">

                      <LevelOfAssociate />

                      <Companies />

                      <div className="w-100"></div>

                      <Salutations />

                      <EventTypes />
                    </div>

                  </div>
                  </div>

              </nav>

            </div>
            

          </div>
      
    </div>

    )
}

export default GlobalList