// import node module libraries
import Link from 'next/link';
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Video } from 'react-feather';
import ModalVideo from 'react-modal-video';

const LearnLatestSkills = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState('GfmUQK29MpE'); 

  return (
    <section className="py-lg-10 py-6 bg-gray-100">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
            <Row className="align-items-center">
              <Col lg={5} md={12} xs={12}>
                <div className="mb-5 mb-lg-0">
                  <h2 className="display-4 fw-bold mb-3">Unlock Your Future Comprehensive <u className="text-warning"><span
                    className="text-primary"> Job Placement Services
                  </span></u></h2>

                  <p className="mb-5 lead">
                    <u className="text-warning"><span
                      className="text-primary"> 1. Personalized Career Guidance:</span></u>
                    Our expert counselors work with you to identify your strengths, set career goals, and create a customized job search strategy.
                  </p>

                  <p className="mb-5 lead">
                    <u className="text-warning"><span
                      className="text-primary">
                      2. Industry Connections:</span></u>
                    Benefit from our extensive network of industry partners and alumni. We provide exclusive access to job openings, internships, and networking events.
                  </p>

                  <p className="mb-5 lead">
                    <u className="text-warning"><span
                      className="text-primary">
                      3. Resume and Interview Preparation:</span></u>
                    Stand out to employers with a polished resume and strong interview skills. We offer workshops, mock interviews, and one-on-one coaching to help you present your best self.
                  </p>
                  <p className="mb-5 lead">
                    <u className="text-warning"><span
                      className="text-primary">
                      4. Ongoing Support:</span></u>
                    Our commitment to your success doesn't end at graduation. We offer continuous support and resources to help you navigate your career journey.</p>
                  <a href="/job/landing-job" className="btn btn-outline-secondary">PLACEMENT BOARD</a>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 1 }} md={12} xs={12}>
             
                <div
                  className="d-flex justify-content-center position-relative rounded py-17 border-gray-100 border border-4 rounded-3 bg-cover"
                  style={{ backgroundImage: `url(${'/images/courseTwo/ZS-CVGI7RUu2ftTgsf6WZA.png'})` }}
                >
                 
                  <Link className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
                    href="#" scroll={false}
                    onClick={() => setOpen(true)}>
                    <i className="fe fe-play"></i>
                  </Link>

                </div>

                {/* video popup */}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                />
                {/* end of video popup */}

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LearnLatestSkills