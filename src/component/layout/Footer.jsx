import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <section>
            <div className="sclub_footer_wrapper">
                <Container>
                    <Row>
                        <Col md="4" sm="6">
                            <div className="footer_section foot_logo">
                                <div className='font-30 fw-bold text-white mb-3'>
                                    <img src={logo} alt="sports-club-logo" className=" img-fluid pe-3"/>
                                    SPORTS CLUB
                                </div>
                                <div className="">
                                    <p className='font-16'>2861 Coffman Alley Bowling 42101,Brownwood USA</p>
                                    <p className='font-16 mb-0'>(+33)325-641-8980 </p>
                                    <a href="mailto:651ttnn@payspun.com" className='font-16 text-white text-decoration-none'>651ttnn0n5w@payspun.com</a>

                                </div>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="footer_section footer_sec2">
                                <h1 className='font-30 mb-3'>Useful Links</h1>
                                <ul className="ps-3">
                                    <li className='mb-2'>
                                        <a href="/" className='font-18 text-white text-decoration-none'>Offers</a>
                                    </li>
                                    <li className='mb-2'>
                                        <a href="/" className='font-18 text-white text-decoration-none'>Membership</a>
                                    </li>
                                    <li className='mb-2'>
                                        <a href="/" className='font-18 text-white text-decoration-none'>Resources</a>
                                    </li>
                                    <li className='mb-2'>
                                        <a href="/" className='font-18 text-white text-decoration-none'>Todays Offer</a>
                                    </li>
                                    <li className='mb-2'>
                                        <a href="/" className='font-18 text-white text-decoration-none'> Connected Peoples</a>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="footer_section footer_sec3">
                                <h1 className='font-30 mb-3'>Latest News</h1>
                                <p className='font-18 mb-2 text-lightblue'>January 25,2019</p>
                                <a href="#" className='font-16 text-decoration-none text-white'>Dolor sit amet,consectetur adipiscing elit. Mauris eleifend.</a>
                                <p className='font-18 mb-2 mt-3 text-lightblue'>January 25,2019</p>
                                <a href="#" className='font-16 text-decoration-none text-white'>Dolor sit amet,consectetur adipiscing elit. Mauris eleifend.</a>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className="sclub_copyright_wrapper">
                <Container>
                    <Row>
                        <Col md="6">
                            <p className="paragraph">Copyright © 2019, All Rights Reserved</p>
                        </Col>
                        <Col md="6">
                            <ul className="policy_term">
                                <li>
                                    <a href="/">Privacy</a>
                                </li>
                                <li>
                                    <a href="/">Terms</a>
                                </li>
                                <li>
                                    <a href="/">Sitemap</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

    )
}

export default Footer