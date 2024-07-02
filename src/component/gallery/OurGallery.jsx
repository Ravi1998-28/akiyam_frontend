import React from 'react'
import { Row, Col } from 'react-bootstrap';
import football from "../../assets/images/football.jpg"
import bike from "../../assets/images/bike.jpg"
import cycling from "../../assets/images/cycling.jpg"
import headline from "../../assets/images/heading_line.png"

const OurGallery = () => {
    return (
        <div>
            <div className='mb-5'>
                <h2 className='font-xxl-36 font-30 fw-semibold mb-2 text-lightblue'>Our Galley</h2>
                <img src={headline} alt="sport" />
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
            </Row></div>
    )
}

export default OurGallery