import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../scss/Contact.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ReactComponent as Image } from '../contact.svg';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
	const imageWrapper = useRef(null);

	useEffect(() => {
		const [svgElements] = imageWrapper.current.children;
		const people = svgElements.getElementById('people');
		const mailIcon = svgElements.getElementById('mail-icon');
		const locationIcon = svgElements.getElementById('location-icon');
		const phoneIcon = svgElements.getElementById('phone-icon');

		gsap.set([mailIcon, locationIcon, phoneIcon], {
			autoAlpha: 0,
			yPercent: -50,
		});

		let tl = gsap.timeline({
			defaults: {
				duration: 0.7,
			},
			scrollTrigger: {
				target: people.current,
				start: 'bottom bottom',
				// markers: true,
			},
		});

		tl.to(locationIcon, {
			autoAlpha: 1,
			yPercent: 0,
		})
			.to(mailIcon, {
				autoAlpha: 1,
				yPercent: 0,
			})
			.to(phoneIcon, {
				autoAlpha: 1,
				yPercent: 0,
			})
			.fromTo(
				people,
				{ autoAlpha: 0, xPercent: -10 },
				{
					autoAlpha: 1,
					xPercent: 0,
					delay: 1,
				}
			);
	});

	return (
		<section className="contact">
			<h2>Kontakt</h2>
			<div>
				<p className="text">
					Hugona Kołłątaja 2,
					<br />
					10-035 Olsztyn
				</p>
				<p className="text">tel. 609 255 854</p>
				<p className="text">e-mail: emkastudioolsztyn@wp.pl</p>
			</div>
			<div className="site-logo">
				<h2>eMka</h2>
				<p>studio</p>
			</div>
			<div ref={imageWrapper}>
				<Image className="main-section-image" />
			</div>
		</section>
	);
}
