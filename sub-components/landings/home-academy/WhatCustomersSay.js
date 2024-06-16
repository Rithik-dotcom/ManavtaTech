// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';

// import widget/custom components
import { Ratings, TestimonialsSlider3 } from 'widgets';

const WhatCustomersSay = () => {
  return (
    <section className="bg-gray-200 pt-14 pb-16">
      <Container className="container">
        <Row className="mb-10">
          <Col lg={{ span: 10, offset: 1 }} xs={12}>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="">
                  <div className="mb-3"><span className="text-dark fw-semi-bold">4.5/5.0</span>{' '}
                    <span className="text-warning">
                      <Ratings rating={4.5} />
                    </span>{' '}
                    <span className="text-warning">5</span><span className="ms-2">(Based on 3265 ratings)</span></div>
                  <h2 className="h1">What our customers say</h2>
                  <p className="mb-0"> Dive into inspiring testimonials from our graduates who have turned their ambitions into reality with our Fullstack Development Program. Learn how our innovative curriculum and hands-on experience have propelled them into exciting careers at leading companies.</p>
                </div>
              </Col>
              {/* <Col md={6} className="text-md-end mt-4 mt-md-0">
                <Link href="#" className="btn btn-primary">View Reviews</Link>
              </Col> */}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="position-relative">
              {/*  Testimonial slider */}
              <TestimonialsSlider3 />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhatCustomersSay