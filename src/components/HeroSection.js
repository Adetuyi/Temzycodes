import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/HeroSection.module.css';
import Button from './Button';

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<h1>We build innovative software products</h1>
			<p>
				Edurald is a web and software development agency. We work with our clients to
				deliver digital experiences that create value for their customers and helps their
				businesses grow.
			</p>
			<Link to='contact'>
				<Button>Reach out</Button>
			</Link>
			<img src='/assets/svgs/hero-bg.svg' alt='' />
		</section>
	);
};

export default HeroSection;
