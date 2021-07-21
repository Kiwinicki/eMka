import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../scss/History.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Image } from '../polaroid.svg';
gsap.registerPlugin(ScrollTrigger);

export default function History() {
	const text = useRef(null);
	const imageWrapper = useRef(null);
	const text2 = useRef(null);

	useEffect(() => {
		const [imgElements] = imageWrapper.current.children;
		const background = imgElements.getElementById('background');
		const frame = imgElements.getElementById('frame');
		const person = imgElements.getElementById('person');
		const flower = imgElements.getElementById('flower');

		gsap.set([frame, person, flower], {
			autoAlpha: 0,
		});
		gsap.set(flower, { transformOrigin: '0%, 100%' });

		let tl = gsap.timeline({
			defaults: {
				duration: 0.5,
				ease: 'power3',
			},
			scrollTrigger: {
				trigger: imgElements,
				start: '-20% center',
			},
		});

		gsap.from(text.current, {
			opacity: 0,
			xPercent: -100,
			scrollTrigger: {
				trigger: text.current,
				start: '20% center',
			},
		});
		tl.from(background, {
			xPercent: -100,
			opacity: 0,
		})
			.to(frame, {
				autoAlpha: 1,
			})
			.fromTo(
				flower,
				{
					scaleY: 0,
				},
				{
					autoAlpha: 1,
					scaleY: 1,
				}
			)
			.fromTo(
				person,
				{
					transformOrigin: 'center center',
					scale: 0,
				},
				{
					autoAlpha: 1,
					scale: 1,
				},
				'<'
			);

		gsap.from(text2.current, {
			opacity: 0,
			x: '+=100%',
			scrollTrigger: {
				trigger: text2.current,
				start: '-100% center',
			},
		});
	});

	return (
		<section id="history">
			<div className="text" ref={text}>
				<h2>Na początek trochę historii</h2>
				<p>
					Dawno, dawno temu, za górami, za lasami lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nunc commodo arcu sit amet elit tincidunt
					consequat. Suspendisse ac ligula non ex maximus porta quis non mauris.
					Proin vitae mi consectetur, auctor mauris in, ultrices augue. Duis at
					justo massa. Donec pulvinar magna ut purus dignissim cursus.
					Vestibulum dignissim nulla lectus, ac laoreet est semper id. Aenean
					vulputate ante ac volutpat sagittis.
				</p>
			</div>
			<div ref={imageWrapper}>
				<Image className="main-section-image" />
			</div>
			<div className="text" ref={text2}>
				<h3>Lorem don simet.</h3>
				<p>
					Proin vitae mi consectetur, auctor mauris in, ultrices augue. Duis at
					justo massa. Donec pulvinar magna ut purus dignissim cursus.
					Vestibulum dignissim nulla lectus, ac laoreet est semper id. Aenean
					vulputate ante ac volutpat sagittis.
				</p>
			</div>
		</section>
	);
}
