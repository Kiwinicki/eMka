import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../scss/Home.scss';
gsap.registerPlugin(ScrollTrigger);

export default function Home({ toggleMenu }) {
	const logo = useRef(null);
	const circle = useRef(null);
	const arrow = useRef(null);
	const home = useRef(null);
	const hiddenContact = useRef(null);

	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: circle.current,
				start: 'top top',
			},
			defaults: {
				duration: 0.3,
				ease: 'power3',
			},
		});

		tl.to(circle.current, {
			borderRadius: 0,
			width: '100vw',
			height: '100vh',
			alignItems: 'flex-end',
		})
			.to(
				logo.current.children[1],
				{
					color: 'black',
				},
				'<'
			)
			.to(
				arrow.current,
				{
					autoAlpha: 0,
				},
				'<'
			)
			.to(
				hiddenContact.current,
				{
					zIndex: 100,
				},
				'<'
			);
	});

	return (
		<section className="home" ref={home} id="home">
			<header className="site-header">
				<div className="site-logo" ref={logo}>
					<h1>eMka</h1>
					<p>studio</p>
				</div>
			</header>
			<div className="hidden-contact" ref={hiddenContact}>
				<p className="text">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-telephone-fill"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
						/>
					</svg>
					tel. 609 255 854
				</p>
				<p className="text">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-geo-alt-fill"
						viewBox="0 0 16 16"
					>
						<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
					</svg>
					Hugona Kołłątaja 2,
					<br />
					10-035 Olsztyn
				</p>
				<p className="text">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-envelope-fill"
						viewBox="0 0 16 16"
					>
						<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
					</svg>
					emkastudioolsztyn@wp.pl
				</p>
			</div>
			<button className="site-menu-btn" onClick={() => toggleMenu()}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div className="welcome">
				<div className="circle" ref={circle}>
					<p>Witaj w świecie fotografii</p>
				</div>
			</div>
			<button className="arrow-cnt" ref={arrow}>
				<span className="arrow-down"></span>
			</button>
		</section>
	);
}
