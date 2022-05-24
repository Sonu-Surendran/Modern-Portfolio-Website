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
            <article className="experiences__details">
              <AiFillHtml5 className="experiences__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experiences__details">
              <DiCss3 className="experiences__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experiences__details">
              <IoLogoJavascript className="experiences__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experiences__details">
              <SiBootstrap className="experiences__details-icon"/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>

            <article className="experiences__details">
              <SiReact className="experiences__details-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>


  {/* -----------------------backend container-------------------------------------- */}      
        
        <div className="container container__backend">
        <h3>backend developement</h3>
          <div className="experiences__content">
            <article className="experiences__details">
              <SiJava className="experiences__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experiences__details">
              <GrMysql className="experiences__details-icon"/>
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experiences__details">
              <SiPython className="experiences__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>

            
          </div>
          
        </div>
        
      </div>
      
    </section>
  )
}

export default Experiences