// import node module libraries
import { Col, Row, Container, ListGroup, Image } from 'react-bootstrap';
import Link from 'next/link';

// import bootstrap icons
import { CheckCircleFill } from 'react-bootstrap-icons';

const HeroRightImage = () => {
  return (
    <section className="py-lg-16 py-6">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={5} xl={6} lg={6} xs={12} >
            <div>
              <h1 className="display-2 fw-bold mb-3">ManavtaTech-
                <u className="text-warning"><span className="text-primary">Modern Learning Management.</span></u>
              </h1>
              <p className="lead mb-4">Fast-Track Your Success: Master Coding Techniques in Record Time 🕓 </p>
              <ListGroup as="ul" bsPrefix='list-unstyled' className="mb-5">
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">
                  Build a Strong Portfolio & Network</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">
                  Time Management 101: Balancing Learning with Work and Life Demands</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">
                  Future-Proof Your Skills</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Job Portal</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                <Link href="#!" className="btn btn-dark btn-lg">Explore Online Courses</Link>
                <Link href="/job/landing-job" className="btn btn-primary btn-lg ms-2">Job-Portal</Link>

                </ListGroup.Item>
              </ListGroup>
             
            </div>
          </Col>
          <Col xxl={{ offset: 1, span: 5 }} xl={6} lg={6} xs={12} className="d-lg-flex justify-content-end">
            <div className="mt-12 mt-lg-0 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                <Image src='/images/svg/graphics-2.svg' alt="graphics-2" />
              </div>
              <Image src='/images/education/skils.jpg' alt="online course"
                className="img-fluid rounded-4 w-100 z-1 position-relative" />
              <div className="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
                <Image src='/images/svg/graphics-1.svg' alt="graphics-1" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroRightImage