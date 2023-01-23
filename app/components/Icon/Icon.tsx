import Headline from "../Headline/Headline";
type IconProps = {
	text?: string;
	image?: string;
	alt?: string;
	color?: "primary" | "secondary" | "black" | "white" | "blended";
};

function Icon({ text, image, alt, color }: IconProps): JSX.Element {
	return (
		<div className="icon flex flex-col gap-4 justify-center items-center w-fit max-w-xl">
			<div>{image && <img src={image} alt={alt} />}</div>
			<div>
				{text && (
					<Headline size="h3" extraClass="text-center" color={color}>
						{text}
					</Headline>
				)}
			</div>
		</div>
	);
}

export default Icon;
