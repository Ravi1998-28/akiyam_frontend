import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import Sports from "../../assets/images/sports.jpg"
import headline from "../../assets/images/heading_line.png"

function About() {
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
          <Row className="align-items-center">
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