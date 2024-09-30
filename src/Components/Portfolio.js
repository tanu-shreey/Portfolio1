import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { MdArchitecture } from "react-icons/md";
import { Md360 } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import image3 from './assets/image3.svg'
// import image4 from './assets/project3.png'
// import image5 from './assets/project2.png'
// import image6 from './assets/project (1).png'





const Portfolio = () => {
  return (
    <div className='container-fluid ps-5' style={{ backgroundColor: '#222831' }}>
      <div className='row  ' >
        <div className='col-sm-6 ' style={{ marginTop: '15%' }} >
          <div className='pt-5 ps-5 ms-5' > <h1 className='display-1 ' style={{ color: '#FFF' }}><strong>FRONT-END</strong></h1>


          </div>
          <div>
            <h1 className='display-1 ps-5 ms-5' style={{ color: '#00ADB5' }}> <strong>DEVELOPER</strong></h1>
          </div>


          <div className='d-flex flex-row pt-3 ps-5 ms-5' >
            <div className='text-center '>
              <button className='btn text-white ' style={{ backgroundColor: '#00ADB5' }}> <a className="nav-link text-white" href="#Contact">Hire me</a></button>
            </div>
            <div className='text-center ms-3 '>
              <button className='btn text-white ' style={{ backgroundColor: 'rgba(255,255,255,.2' }}>
                <a className="nav-link text-white" href="https://drive.google.com/file/d/1prTq6QshmJKC4sorbA2TGAHTkxkOMQ14/view?usp=sharing">download CV 
              <i><MdArrowDownward color='grey' size={15} /></i> </a></button>
            </div>
          </div>

        </div>
        <div className='col-sm-6 ps-5'>
          <img src={image1} className='img-fluid' />
        </div>

      </div>
      <div className='col-sm-10 text-center '>
        <i><MdArrowDownward color='grey' size={35} /></i>
      </div>




      {/*------------------------------------------ About -------------------------------------------------------*/}

      <div className='container-fluid  mb-5 ps-5' id='About' style={{ backgroundColor: '#222831' }} >
        <div className='d-flex flex-row   '>
          <div >
            <h1 className=' text-white  ms-5 ps-5 '>About</h1>
          </div>
          <div>

            <h1 style={{ color: '#00ADB5' }}>me</h1>
          </div>
          <i><MdArchitecture color='#00ADB5' size={35} /></i>
        </div>

        <div className='row text-white text-center ms-5 mt-5 ' >
          <div className='col-sm-5 p-5' style={{ backgroundColor: '#00ADB5' }}>
            <p><h5>Education</h5></p>
            <p>  Btech | Computer science</p>

            <p>
              CGPA : 8.5 |  passout-2024
            </p>
            <p>
              Chameli Devi Group of Institutions
            </p>
          </div>

          <div className='col-sm-5 p-5 ms-5' style={{ backgroundColor: '#00ADB5' }}>
            <p><h5>Experience</h5></p>
            <p>  Frontend Developer Intern</p>

            <p>
              Clarigo Infotech Private Limited
            </p>
            <p>
              3-Months
            </p>
          </div>
        </div>

      </div>





      {/*------------------------------------------ Works -------------------------------------------------------*/}

      <div className='container-fluid p-5 mb-5' id='skills'>

        <div className='container-fluid mb-3 ms-4 ' >
          <div className='d-flex flex-row mt-5 ' >

            <div className='text-white display-6  ms-3 pe-2'>  <strong > MY</strong>
            </div>
            <div className='display-6' style={{ color: '#00ADB5' }}> <strong>SKILLS  </strong></div>
          </div>
        </div>

        <section className='container-fluid '>
          <div class="row justify-content-center ">

            <div className='col-sm-3 p-5 m-5' style={{ backgroundColor: 'rgba(255,255,255,.15' }}>
              <div className='text-center  ms-2'>
                <h4 className='text-white  '>Languages</h4>
                <button className='btn text-white m-3' style={{ backgroundColor: '#00ADB5' }}>JavaScript</button>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>Java</button>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>SQL</button>

              </div>
            </div>

            <div className='col-sm-3  m-5 p-5 justify-content-center' style={{ backgroundColor: 'rgba(255,255,255,.15' }}>
              <div className='text-center  ms-2 '>
                <h4 className='text-white'>Web Development</h4>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>JavaScript</button>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>ReactJS</button>
                <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>Html</button>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>Css</button>
                <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>BootStrap</button>



              </div>
            </div>

            <div className='col-sm-3  m-5 p-5 justify-content-center' style={{ backgroundColor: 'rgba(255,255,255,.15' }}>
              <div className='text-center  ms-2 '>
                <h4 className='text-white'>Tools</h4>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>Git</button>
                <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>Github</button>
                <button className='btn text-white m-2' style={{ backgroundColor: '#00ADB5' }}>Postman</button>
                <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>Mysql</button>

              </div>
            </div>
          </div>

        </section>
      </div>

      {/*------------------------------------------ contact me -------------------------------------------------------*/}


      <div className='container-fluid mt-5 mb-5 ps-5 '  >
        <div className='row justify-content-center'>
          <div className='col-sm-6  '>
            <div className='d-flex flex-row text-center py-4' >

              <div className='text-white display-6  pe-2 ms-5'>  <strong > Contact</strong>
              </div>
              <div className='display-6' style={{ color: '#00ADB5' }}> <strong> me</strong></div>
              <i> <Md360 color='#00ADB5' size={35} /></i>
            </div>
            <div> <img src={image3} className='img-fluid' /></div>

          </div>


          <div className='col-sm-4 mt-5  ' id='Contact' >
            {/* <form className='form-group'>
              <div class="row justify-content-center ">
                <div class="col-sm-4 ">
                  <label for="exampleInputEmail1" className='text-white'>Your Name</label>
                  <input type="text" class="form-control border-0 " placeholder="First name" style={{ backgroundColor: 'rgba(255,255,255,.2' }} />
                </div>
                <div class="col-sm-4 ">
                  <label for="exampleInputEmail1" className='text-white'>Your Email</label>

                  <input type="text" class="form-control border-0 " placeholder="Last name" style={{ backgroundColor: 'rgba(255,255,255,.15' }} />
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="form-group col-sm-8  pt-4">
                  <label className='text-white'>message</label>
                  <textarea class="form-control border-0" placeholder="message" rows='7' style={{ backgroundColor: 'rgba(255,255,255,.2' }} />

                  <div className=' mt-3 '>
                    <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>Send Message<i><FaTelegramPlane color='#fff' size={25} /></i></button>
                  </div>
                </div>

              </div>
            </form> */
            }
            <div className='  p-3 justify-content-center' >
              <div className='  ms-2 '>



                <h3 className='text-white mt-2'>Tanushree Yadav</h3>
                <div className='text-white mt-4'>
                  <p className='mt-3' >EMAIL : Ytanushree89@gmail.com</p>
                  <p className='mt-4'>MOBILE NO : 9399641430</p>
                  <p className='mt-4'>ADDRESS : Indore, MP</p>


                </div>
                <div className='d-flex flex-row  mt-5' >

                  <div className='ms-2'>
                    <i><a href='https://www.linkedin.com/in/tanushreey07/'>
                      <TiSocialLinkedin color='#00ADB5' size={25} />
                    </a>

                    </i>
                  </div>

                  <div className='ms-3'>
                    <i>
                      <a href='https://github.com/tanu-shreey'>
                        <FaGithub color='#00ADB5' size={25} />
                      </a>

                    </i>
                  </div>

                  <div className='ms-3'>
                    <i>
                      <SiInstagram color='#00ADB5' size={25} />
                    </i>
                  </div>
                  <div className='text-center ms-3 '>
                    <a href='https://auth.geeksforgeeks.org/user/tanushreey'>
                      <i>
                        <RiCodeBoxFill color='#00ADB5' size={25} />
                      </i>
                    </a>

                  </div>

                </div>



              </div>
            </div>


          </div>
        </div>
      </div>

      {/*------------------------------------------ footer -------------------------------------------------------*/}


      <div className='mt-5 ' >



        <div className='text-center mt-5'>
          <button className='btn scroll-top'>
            <i>
              <FaCircleArrowUp color='#FFF' size={25} />
            </i></button>

        </div>
        <div class="copyright pb-0 mb-0 pt-3 text-white text-center">
          Copyright © 2024 All rights reserved | This website is made by Tanushree yadav
        </div>
      </div>
    </div>

  )
}

export default Portfolio