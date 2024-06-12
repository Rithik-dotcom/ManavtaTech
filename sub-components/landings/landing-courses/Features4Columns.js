// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget/custom components
import {SectionHeadingCenter, FeatureTopIcon } from 'widgets';

const Features4Columns = () => {
	const title = 'Build Coding skills,faster';
	const subtitle = 'Why Learn with ManavtaTech';
	const description = `Explore new skills, deepen existing passions, and get lost in creativity. What you find
    just might surprise and inspire you.`;

	const features = [
		{
			id: 1,
			icon: 'settings',
			title: 'Learn the latest skills',
			description: `A developer Profile with All latest Skills Required From basic to Real life application.`
		},
		{
			id: 2,
			icon: 'user',
			title: 'Get ready for a career',
			description: `Develop a portfolio showcasing your projects, coding skills, and expertise in relevant programming languages and technologies. Include personal projects, open-source contributions, or freelance work to demonstrate your abilities to potential employers.`
		},
		{
			id: 3,
			icon: 'award',
			title: 'Earn a Certificate',
			description: `Earn Certificate That help you to impress Recruiter.`
		},
		{
			id: 4,
			icon: 'users',
			title: 'Upskill your organization',
			description: `Learn to juggle multiple responsibilities effortlessly with Time Management 101. Discover effective strategies for harmonizing your learning pursuits with work and personal commitments, ensuring productivity, balance, and success in all aspects of life.`
		}
	];

	return (
		<section className="py-8 py-lg-18 bg-white">
			<Container>
				<SectionHeadingCenter
					title={title}
					description={description}
					subtitle={subtitle}
				/>
				<Row>
					{features.map((item, index) => {
						return (
							<Col lg={3} md={6} sm={12} key={index}>
								<FeatureTopIcon item={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Features4Columns;
