type HeroProps = {
	image: string;
	alt?: string;
	style: "circle" | "square";
};
export default function Hero({
	image = "https://cdn.shopify.com/s/files/1/0474/1899/8949/files/nerd_dog.png?v=1637190862",
	alt,
	style,
}: HeroProps): JSX.Element {
	return (
		<div>
			<img className={`${style} image`} src={image} alt={alt} />
		</div>
	);
}
