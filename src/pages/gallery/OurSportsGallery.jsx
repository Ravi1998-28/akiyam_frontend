import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "reactstrap";
import football2 from "../../assets/images/football-2.jpg"
import bike2 from "../../assets/images/bike2.jpg"
import hockey from "../../assets/images/hockey.jpg"
import headline from "../../assets/images/heading_line.png"
function OurSportsGallery() {

    return (
        <section className="gallery-page">
            <div className="gallery-banner">
                <Container>
                    <div className="heading text-center">
                        <h2 className="text-white font-32">
                            Our Sport Gallery
                        </h2>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/">
                                    Home
                                </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                <a href="/our-support-gallery">
                                    Support Gallery
                                </a>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            <div className="our-gallery text-center my-5">
                <Container>
                    <div className='mb-5'>
                        <h2 className='font-xxl-36 font-30 fw-semibold mb-3 text-lightblue'>Our Suport Gallery</h2>
                        <img src={headline} alt="sport" />
                    </div>
                    <Row>
                        <Col sm="6" xs="12">
                            <div className='sport_section'>
                                <div className='sports_image sports_hover'>
                                    <img src={football2} className='img-fluid center card__image ' alt="sport" />
                                    <div className='sport_overlay'>
                                        <div className="sports_icon">
                                            <p className="subheading">cycling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sport_section'>
                                <div className='sports_image sports_hover'>
                                    <img src={bike2} className='img-fluid center card__image ' alt="sport" />
                                    <div className='sport_overlay'>
                                        <div className="sports_icon">
                                            <p className="subheading">cycling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sport_section'>
                                <div className='sports_image sports_hover'>
                                    <img src={hockey} className='img-fluid center card__image ' alt="sport" />
                                    <div className='sport_overlay'>
                                        <div className="sports_icon">
                                            <p className="subheading">cycling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col> <Col sm="6" xs="12">
                            <div className='sport_section'>
                                <div className='sports_image sports_hover'>
                                    <img src={football2} className='img-fluid center card__image ' alt="sport" />
                                    <div className='sport_overlay'>
                                        <div className="sports_icon">
                                            <p className="subheading">cycling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sport_section'>
                                <div className='sports_image sports_hover'>
                                    <img src={bike2} className='img-fluid center card__image ' alt="sport" />
                                    <div className='sport_overlay'>
                                        <div className="sports_icon">
                                            <p className="subheading">cycling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sport_section'>
                                <div className='sports_image sports_hover'>
                                    <img src={hockey} className='img-fluid center card__image ' alt="sport" />
                                    <div className='sport_overlay'>
                                        <div className="sports_icon">
                                            <p className="subheading">cycling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default OurSportsGallery;