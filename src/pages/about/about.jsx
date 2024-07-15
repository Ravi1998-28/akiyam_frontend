import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import Sports from "../../assets/images/sports.jpg"
import headline from "../../assets/images/heading_line.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import staff from "../../assets/images/staff.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function About() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <section className="about-page">
      <div className="about-banner">
        <Container>
          <div className="heading text-center">
            <h2 className="text-white font-32">
              About Us
            </h2>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <a href="/about">
                  About
                </a>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

        </Container>
      </div>
      <div className="py-5 my-4">
        <Container>
          <Row className="align-items-center g-3">
            <Col md="6">
              <div className="sport-img">
                <img src={Sports} className="img-fluid" alt="sport" />
              </div>
            </Col>
            <Col md="6">
              <div className="sport-img-txt">
                <h2 className="font-32">All About Our <span>Sports</span></h2>
                <p className="font-18">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Despite gains during the last three decades.</p>
                <h2 className="font-24 mb-4">Here the game is played by <span className="text-decoration-underline">the mind</span></h2>
                <div className="d-flex gap-3">
                  <div>
                    <h3 className="font-20">
                      International
                    </h3>
                    <p className="font-16 mb-0">In the international team version of kabaddi, two teams of seven members.</p>
                  </div>
                  <div>
                    <h3 className="font-20">
                      Youth Participation
                    </h3>
                    <p className="font-16 mb-0">Youth sports present children with opportunities for fun, and socialization.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sclub_testomonial_wrapper mb-5">
        <Container>
          <div className='mb-5 text-center'>
            <h2 className='font-xxl-36 font-30 fw-semibold mb-3 text-lightblue'>Our Happy CLient</h2>
            <img src={headline} alt="sport" />
          </div>
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
            navigation
            modules={[Pagination]}
            loop={true}
            breakpoints={{
              567: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="testimonial_section">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                  <g>
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                  </g>
                </svg>
                <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
                <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                  <img src={staff} class="radius" alt="images" />
                  <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Mike John</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">emma kim</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial_section">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 95.333 95.332">
                <g>
                  <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
											c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
											s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
											c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
											c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                  <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
											c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
											c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
											c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
											c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                </g>
              </svg>
              <p class="paragraph paragraph_bg mb-0 font-18">Sport (UK) or sports (US) are all usually forms of competitive physical activity or games which through casual or organised participation.</p>
              <div className="d-flex gap-3 align-items-center mt-4 pt-2 ps-3">
                <img src={staff} class="radius" alt="images" />
                <p class=" paragraph capital text-white font-24 fw-medium mb-0">Linda</p>
              </div>
            </div></SwiperSlide>
          </Swiper>
        </Container>

      </div>
      <div className="do-your-best-section mb-5">
        <Container>
          <div className='mb-5 text-center'>
            <h2 className='font-xxl-36 font-30 fw-semibold mb-2 text-lightblue'>Do Your Best</h2>
            <img src={headline} alt="sport" />
          </div>
          <Row>
            <Col lg="3" md="4">
              <div className="best-card-wrapper">
                <div className="round-circle mb-3">
                  <h2 className="mb-0 font-28">1</h2>
                </div>
                <h3 className="text-lightblue font-26 fw-normal">
                  Technique Is All
                </h3>
                <p className="font-16">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p>

              </div>
            </Col>
            <Col lg="3" md="4">
              <div className="best-card-wrapper">
                <div className="round-circle mb-3">
                  <h2 className="mb-0 font-28">2</h2>
                </div>
                <h3 className="text-lightblue font-26 fw-normal">
                  Bodyweight Rules
                </h3>
                <p className="font-16">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p>

              </div>
            </Col>
            <Col lg="3" md="4">
              <div className="best-card-wrapper">
                <div className="round-circle mb-3">
                  <h2 className="mb-0 font-28">3</h2>
                </div>
                <h3 className="text-lightblue font-26 fw-normal">
                  Limber Up
                </h3>
                <p className="font-16">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p>

              </div>
            </Col>
            <Col lg="3" md="4">
              <div className="best-card-wrapper">
                <div className="round-circle mb-3">
                  <h2 className="mb-0 font-28">4</h2>
                </div>
                <h3 className="text-lightblue font-26 fw-normal">
                  Plan Your Route
                </h3>
                <p className="font-16">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p>

              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </section>
  );
}

export default About;