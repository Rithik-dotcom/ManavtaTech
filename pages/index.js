// import node module libraries
import { Fragment, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { HeroAcademy, AcademyStats, MostPopularCourses, BecomeAnInstructor, WhatCustomersSay } from 'sub-components';
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import BlankLayout from 'layouts/marketing/BlankLayout';

// import widget/custom components
import { CourseSlider, FeaturesList, HeroHeader } from 'widgets';
import AcademyLayout from 'layouts/marketing/AcademyLayout';
import {
	EducationHeroRightImage,
	ExploreSkillCourses,
	BuildingSkills,
	LearnLatestSkills,
	EducationFeaturesWithBullets,
	UpcomingWebinars,
	FindRightCourse
} from 'sub-components';
import { LogosTopHeading3 } from 'widgets';
import LogoList2 from 'data/clientlogos/LogoList2';
import FooterCenter from 'layouts/marketing/footers/FooterWithLinks';
const Home = () => {
	useEffect(() => {
		document.body.className = 'bg-light';
	});
	return (
		<Fragment>
			{/*  Page Content  */}
			{/* <HeroHeader /> */}

			{/*  Features list  */}
			{/* <FeaturesList /> */}

			{/* <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Recommended to you</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider recommended={true} />
					</div>
				</Container>
			</section> */}

			{/* <section className="pb-lg-3 pt-lg-3">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Most Popular</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider popular={true} />
					</div>
				</Container>
			</section> */}

			{/* <section className="pb-lg-8 pt-lg-3 py-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Trending</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider trending={true} />
					</div>
				</Container>
			</section> */}
			<NavbarLanding center />

			{/*   section  */}
			<main>

				{/*  learn today hero section */}
				<EducationHeroRightImage />

				{/*  trusted */}
				<LogosTopHeading3
					title="TRUSTED BY OVER 12,500 GREAT TEAMS"
					logos={LogoList2}
					limit={5}
				/>

				{/*  Explore skill courses */}
				<ExploreSkillCourses />

				{/*  Building strong foundational skills */}
				<BuildingSkills />

				{/*  Learn latest Skills */}
				<LearnLatestSkills />

				{/*  Features With Bullets */}
				<hr className="my-0 bg-transparent text-white" />
				<EducationFeaturesWithBullets />

				{/*  upcoming webinars */}
				<UpcomingWebinars />

				{/*  find right course */}
				<FindRightCourse />

			</main>

			{/* What our customers say */}
			<WhatCustomersSay />

			{/*   Footer with center alignment */}
			<FooterCenter />





		</Fragment>
	);
};

Home.Layout = BlankLayout;
export default Home;
