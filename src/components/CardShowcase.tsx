'use client';

import { useEffect } from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

const cardSites = [
	{
		src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Flores Nexus Cards — Digital Business Cards',
	},
	{
		src: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Pulpería La Morenita — Latin Grocery Store',
	},
	{
		src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Alma Closet — Fashion & Resale',
	},
	{
		src: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Flores Lawn Care — Professional Landscaping',
	},
	{
		src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Business Analytics & Growth',
	},
	{
		src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Small Business Solutions',
	},
	{
		src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Flores Nexus Group — Empowering Local Businesses',
	},
];

export default function CardShowcase() {
	useEffect(() => {
		let raf: number;
		function scroll(time: number) {
			raf = requestAnimationFrame(scroll);
		}
		raf = requestAnimationFrame(scroll);
		return () => cancelAnimationFrame(raf);
	}, []);

	return (
		<main
			style={{
				minHeight: '100vh',
				width: '100%',
				fontFamily: 'Geist, system-ui, -apple-system, sans-serif',
			}}
		>
			<div
				style={{
					position: 'relative',
					display: 'flex',
					height: '50vh',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					padding: '0 1.5rem',
				}}
			>
				<div
					aria-hidden="true"
					style={{
						position: 'absolute',
						top: '-50%',
						left: '50%',
						height: '120vmin',
						width: '120vmin',
						transform: 'translateX(-50%)',
						borderRadius: '50%',
						background:
							'radial-gradient(ellipse at center, rgba(11, 11, 11, 0.08), transparent 50%)',
						filter: 'blur(30px)',
						pointerEvents: 'none',
					}}
				/>
				<div>
					<p
						style={{
							fontSize: '0.75rem',
							fontWeight: 700,
							letterSpacing: '0.15em',
							textTransform: 'uppercase',
							color: '#2563EB',
							marginBottom: '1rem',
						}}
					>
						floresnexus.cards
					</p>
					<h1
						style={{
							fontSize: 'clamp(2rem, 5vw, 3.5rem)',
							fontWeight: 800,
							color: '#0B0B0B',
							lineHeight: 1.1,
							marginBottom: '0.75rem',
						}}
					>
						Nexus Card Websites
					</h1>
					<p
						style={{
							fontSize: '1.1rem',
							color: '#6B6B6B',
							maxWidth: '480px',
							margin: '0 auto',
						}}
					>
						Scroll down to explore the websites we've built for local businesses.
					</p>
				</div>
			</div>

			<ZoomParallax images={cardSites} />

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '50vh',
					gap: '1.5rem',
					textAlign: 'center',
					padding: '0 1.5rem',
				}}
			>
				<h2
					style={{
						fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
						fontWeight: 700,
						color: '#0B0B0B',
					}}
				>
					Ready to get your own Nexus Card?
				</h2>
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
					<a
						href="/servicios"
						style={{
							display: 'inline-block',
							padding: '0.85rem 2rem',
							background: '#0B0B0B',
							color: '#F7F5F0',
							borderRadius: '9px',
							fontWeight: 600,
							fontSize: '0.95rem',
							textDecoration: 'none',
							border: '1px solid #0B0B0B',
							transition: 'background-color 220ms ease, color 220ms ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#2563EB';
							e.currentTarget.style.color = '#0B0B0B';
							e.currentTarget.style.borderColor = '#2563EB';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#0B0B0B';
							e.currentTarget.style.color = '#F7F5F0';
							e.currentTarget.style.borderColor = '#0B0B0B';
						}}
					>
						View Plans
					</a>
					<a
						href="https://www.floresnexus.com"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'inline-block',
							padding: '0.85rem 2rem',
							background: 'transparent',
							color: '#0B0B0B',
							borderRadius: '9px',
							fontWeight: 600,
							fontSize: '0.95rem',
							textDecoration: 'none',
							border: '2px solid #0B0B0B',
							transition: 'color 220ms ease, border-color 220ms ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = '#2563EB';
							e.currentTarget.style.borderColor = '#2563EB';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = '#0B0B0B';
							e.currentTarget.style.borderColor = '#0B0B0B';
						}}
					>
						Flores Nexus Group
					</a>
				</div>
			</div>
		</main>
	);
}
