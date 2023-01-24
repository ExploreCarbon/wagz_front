import Headline from "../Headline/Headline";
type IconProps = {
	text?: string;
	image?: string;
	alt?: string;
	color?: "primary" | "secondary" | "black" | "white" | "blended";
};

function Icon({ text, image, alt, color }: IconProps): JSX.Element {
	return (
		<div className="icon flex flex-col gap-4 justify-center items-center max-w-xl">
			<div>{image && <img src={image} alt={alt} />}</div>
			<div className="header-div center">
				{text && <h3 className={`header ${color}`}>{text}</h3>}
			</div>
		</div>
	);
}

export default Icon;
