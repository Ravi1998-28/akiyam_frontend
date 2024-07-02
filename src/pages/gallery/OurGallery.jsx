import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import OurGallery from "../../component/gallery/OurGallery";

function Gallery() {

    return (
        <section className="gallery-page">
            <div className="gallery-banner">
                <Container>
                    <div className="heading text-center">
                        <h2 className="text-white font-32">
                            Our Gallery
                        </h2>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/">
                                    Home
                                </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                <a href="/our-gallery">
                                    Gallery
                                </a>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            <div className="our-gallery text-center my-5">
                <Container>
                    <OurGallery />
                </Container>
            </div>
        </section>
    );
}

export default Gallery;