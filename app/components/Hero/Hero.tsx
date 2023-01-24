type HeroProps = {
	fullScreenImage: string;
	mediumScreenImage: string;
	smallScreenImage: string;
	children?: React.ReactNode;
	alt?: string;
};
export default function Hero({
	children,
	fullScreenImage,
	mediumScreenImage,
	smallScreenImage,
	alt,
}: HeroProps): JSX.Element {
	return (
		<div className="hero">
			<div className="relative hero-image">
				<div className="absolute inset-0">
					<img
						className="h-full w-full object-cover fullScreen"
						src={fullScreenImage}
						alt={alt}
					/>
					<img
						className="h-full w-full object-cover mediumScreen"
						src={mediumScreenImage}
						alt={alt}
					/>
					<img
						className="h-full w-full object-cover smallScreen"
						src={smallScreenImage}
						alt={alt}
					/>
				</div>
				<div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
					{children}
				</div>
			</div>
		</div>
	);
}
