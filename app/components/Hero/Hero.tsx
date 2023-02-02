// TODO: Make this into an actual picture HTML element instead of this hacky solution
type HeroProps = {
	largeScreenImage: string;
	mediumScreenImage: string;
	smallScreenImage: string;
	children?: React.ReactNode;
	alt?: string;
};
export default function Hero({
	children,
	largeScreenImage,
	mediumScreenImage,
	smallScreenImage,
	alt,
}: HeroProps): JSX.Element {
	return (
		<div className="hero">
			<div className="relative hero-image">
				<div className="absolute inset-0">
					<img
						className="h-full w-full object-cover object-left fullScreen"
						src={largeScreenImage}
						alt={alt}
					/>
					{mediumScreenImage && (
						<img
							className="h-full w-full object-cover object-center mediumScreen"
							src={mediumScreenImage}
							alt={alt}
						/>
					)}
					{smallScreenImage && (
						<img
							className="h-full w-full object-cover object-center smallScreen"
							src={smallScreenImage}
							alt={alt}
						/>
					)}
				</div>
				<div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
					{children}
				</div>
			</div>
		</div>
	);
}
