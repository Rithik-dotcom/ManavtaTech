// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget/custom components
import { WebinarCard } from 'widgets';

// import data files
import UpcomingWebinarsData from 'data/marketing/landing-education/UpcomingWebinarsData';

const UpcomingWebinars = () => {
  return (
    <section className="py-lg-10 py-6">
      <Container>
        
        <Row>
          <Col xl={6} md={12} xs={12}>
            <div className="mb-lg-10 mb-6">
              <h2 className="h1 fw-bold">Exclusive Weekly Webinar Series: <u className="text-warning"><span className="text-primary"> Experience Live Learning at Its Best!
              </span></u></h2>
              <p className="lead mb-0">Elevate your skills and knowledge by participating in our premium weekly webinars. Engage in real-time sessions with industry experts and gain invaluable insights to advance your career.</p>
            </div>
            
          </Col>
          <Col>

          <video width="600" autoPlay loop muted>
                    <source src="/images/video/displayVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </Col>
        </Row>
        <div className="table-responsive-xl pb-6">
          <Row className="row-cols-lg-3 row-cols-1 flex-nowrap">
            {UpcomingWebinarsData.slice(0, 3).map((item, index) => {
              return (
                <Col key={index}>
                  <WebinarCard item={item} />
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default UpcomingWebinars