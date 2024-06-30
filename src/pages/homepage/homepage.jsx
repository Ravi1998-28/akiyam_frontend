import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import cycle from "../../assets/images/cycle.jpg"
import soccer from "../../assets/images/soccer.png"
import club from "../../assets/images/club.png"
import football from "../../assets/images/football.jpg"
import bike from "../../assets/images/bike.jpg"
import cycling from "../../assets/images/cycling.jpg"
import staff from "../../assets/images/staff.jpg"
import headline from "../../assets/images/heading_line.png"
function HomePage() {
  return (

   <section>
      {/* hero section */}
      <div className="hero-section">
        <div className='sclub_slide'>
          <Container>
            <div className="bnr_heading1">
              <div className='position-relative'>
                <h4 className="text-white look-wrap font-xxl-24 font-xl-20 font-18">Look . Feel . Live</h4>
                <h1 className="heading1 text-white">Sports</h1>
              </div>
              <p className="heading1 text-white text-end fw-medium">Club</p>
            </div>
          </Container>
        </div>
      </div>
      {/* club sports section */}
      <div className='club-sports'>
        <Container>
          <Row className='g-4'>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className='sport_section text-center'>
                <div className='sports_image sports_hover'>
                  <img src={cycle} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>

                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                      <a href="sport_single.html">cycle</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* latest result section */}
      <Container>
        <div className='latest-result-wrapper mb-5'>
          <div className='mb-5'>
            <h2 className='font-xxl-36 font-30 fw-semibold mb-2 text-lightblue'>Latest Result</h2>
            <img src={headline} alt="sport"/>
          </div>

          <Row>
            <Col md="5">
              <div className='text-end'>
                <img src={soccer} alt="sport"/>
                <div className="team_name_result1 d-flex justify-content-end">
                  <div className='result-data text-center position-relative'>
                    <h3 className='font-20 mb-0'>Soccer Champions <span>Since 1975</span></h3>
                  </div>

                </div>
              </div>
            </Col>
            <Col md="2">
              <div className='text-center score'>
                <h2 className='font-xxl-60 font-xl-50'>V/S</h2>
                <p className='font-16 teams-name'>Bayern 2 x 1 Borussia Dortmund - Champions League Final 2019</p>
                <h3 className='font-44 mb-0'>3-2</h3>
              </div>
            </Col>
            <Col md="5">
              <div className='text-start'>
                <img src={club} alt="sport"/>
                <div className="team_name_result2 d-flex justify-content-start">
                  <div className='result-data text-center position-relative'>
                    <h3 className='font-20 mb-0'>Soccer Champions <span>Since 1975</span></h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* our gallery section */}
        <div className='ourGallery-section text-center pt-5 mb-5'>
          <div className='mb-5'>
            <h2 className='font-xxl-36 font-30 fw-semibold mb-2 text-lightblue'>Our Galley</h2>
            <img src={headline} alt="sport"/>
          </div>
          <Row className='g-4'>
            <Col sm="4" >
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={football} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={bike} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={cycling} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="4" >
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={football} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={bike} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={cycling} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="4" >
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={football} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={bike} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sport_section'>
                <div className='sports_image sports_hover'>
                  <img src={cycling} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                    <div className="sports_icon">
                      <p className="subheading">cycling</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* our team section */}
        <div className='ourteam-section text-center pt-5 mb-5'>
          <div className='mb-5'>
            <h2 className='font-xxl-36 font-30 fw-semibold mb-2 text-lightblue'>Our Team</h2>
            <img src={headline} alt="sport"/>
          </div>
          <Row className='g-4'>
            <Col sm="3">
              <div className="staff_section bottompadder10 text-center">
                <div className='sports_image sports_hover'>
                  <img src={staff} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>
                  </div>
                </div>
                <div className=" mt-2">
                  <h2 className="subheading font-20 mb-0">Mike</h2>
                  <p className="paragraph font-14 mb-2">gym trainer</p>
                </div>
              </div>
            </Col>
            <Col sm="3">
              <div className="staff_section bottompadder10 text-center">
                <div className='sports_image sports_hover'>
                  <img src={staff} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>
                  </div>
                </div>
                <div className=" mt-2">
                  <h2 className="subheading font-20 mb-0">Mike</h2>
                  <p className="paragraph font-14 mb-2">gym trainer</p>
                </div>
              </div>
            </Col>
            <Col sm="3">
              <div className="staff_section bottompadder10 text-center">
                <div className='sports_image sports_hover'>
                  <img src={staff} className='img-fluid center card__image ' alt="sport"/>
                  <div className='sport_overlay'>
                  </div>
                </div>
                <div className=" mt-2">
                  <h2 className="subheading font-20 mb-0">Mike</h2>
                  <p className="paragraph font-14 mb-2">gym trainer</p>
                </div>
              </div>
            </Col>
            <Col sm="3">
              <div className="staff_section bottompadder10 text-center">
                <div className='sports_image sports_hover'>
                  <img src={staff} className='img-fluid center card__image ' alt="sport" />
                  <div className='sport_overlay'>
                  </div>
                </div>
                <div className=" mt-2">
                  <h2 className="subheading font-20 mb-0">Mike</h2>
                  <p className="paragraph font-14 mb-2">gym trainer</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      </section>
  );
}

export default HomePage;