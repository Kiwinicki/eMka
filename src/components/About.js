import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../scss/About.scss';
import { ReactComponent as Image } from '../videographer.svg';

export default function About() {
	const imageWrapper = useRef(null);
	const text = useRef(null);

	useEffect(() => {
		const [imgElements] = imageWrapper.current.children;
		const background = imgElements.getElementById('background');
		const flowers = imgElements.getElementById('flowers');

		gsap.from(text.current.children, {
			y: '-100px',
			autoAlpha: 0,
			stagger: 0.2,
			duration: 0.5,
			scrollTrigger: {
				trigger: text.current,
				start: 'top center',
			},
		});

		let tl = gsap.timeline({
			defaults: {
				duration: 1,
			},
			scrollTrigger: {
				trigger: imgElements,
				start: '-50% center',
			},
		});

		tl.from(background, {
			y: '-50px',
			autoAlpha: 0,
		}).from(flowers, {
			x: '-50px',
			autoAlpha: 0,
		});
	});

	return (
		<section className="about">
			<div className="text" ref={text}>
				<h2>O nas</h2>
				<p>
					No ogólnie jesteśmy najlepsi amet, consectetur adipiscing elit.
					Integer vulputate dapibus nisl id pellentesque. In euismod finibus
					odio, quis varius diam eleifend nec. Curabitur eros odio, feugiat nec
					odio sed, porta sodales odio. In id massa cursus, egestas sapien a,
					laoreet dui. Ut imperdiet, dolor nec egestas vehicula, nibh tortor
					fermentum risus, eu tempor lectus orci in mi. Vestibulum placerat sem
					in ligula euismod, vel ultricies lectus pharetra. In et placerat est.
				</p>
			</div>
			<div ref={imageWrapper}>
				<Image className="main-section-image" />
			</div>
		</section>
	);
}
