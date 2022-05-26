import React from 'react'
import './experiences.css'

// --------------------------------icons import------------------------------------------

import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiPython} from 'react-icons/si'
import ExpComponent from './ExpComponent'


const Experiences = ()=> {
  return (
    <section id="experiences">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="container__frontend">

  {/* -----------------------frontend container-------------------------------------- */}

          <h3>frontend developement</h3>
          <div className="experiences__content">
            <ExpComponent icon={AiFillHtml5} name="HTML" epe="Intermediate"/>
            <ExpComponent icon={DiCss3} name="CSS" epe="Intermediate"/>
            <ExpComponent icon={IoLogoJavascript} name="JavaScript" epe="Intermediate"/>
            <ExpComponent icon={SiBootstrap} name="BootStrap" epe="Basic"/>
            <ExpComponent icon={SiReact} name="ReactJs" epe="Intermediate"/>
          </div>
        </div>


  {/* -----------------------backend container-------------------------------------- */}      
        
        <div className="container container__backend">
        <h3>backend developement</h3>
          <div className="experiences__content">
          <ExpComponent icon={SiJava} name="Java" epe="Intermediate"/>
          <ExpComponent icon={GrMysql} name="Mysql" epe="Intermediate"/>
          <ExpComponent icon={SiPython} name="Python" epe="Basic"/>
          </div>
          
        </div>
        
      </div>
      
    </section>
  )
}

export default Experiences