import Balancer from "react-wrap-balancer";
import Text from "../Text/Text";
type HeadlineProps = {
	children: React.ReactNode;
	id?: string;
	size?: "h1" | "h2" | "h3" | "h4";
	fontFamily?: "sans" | "serif";
	color?: "primary" | "secondary" | "black" | "white" | "blended";
	align?: "left" | "center";
	extraClass?: string;
};
function Headline({
	size = "h1",
	fontFamily = "sans",
	color = "primary",
	id,
	align = "left",
	extraClass,
	children,
}: HeadlineProps): JSX.Element {
	return (
		<div className={`header-div ${align}`}>
			<Balancer>
				{size === "h1" && (
					<h1
						className={`header ${fontFamily} ${color} ${align} ${extraClass}`}
						id={id}
					>
						<Text text={children} />
					</h1>
				)}
				{size === "h2" && (
					<h2
						className={`header ${fontFamily} ${color} ${align} ${extraClass}`}
						id={id}
					>
						<Text text={children} />
					</h2>
				)}
				{size === "h3" && (
					<h3
						className={`header ${fontFamily} ${color} ${align} ${extraClass}`}
						id={id}
					>
						<Text text={children} />
					</h3>
				)}
				{size === "h4" && (
					<h4
						className={`header ${fontFamily} ${color} ${align} ${extraClass}`}
						id={id}
					>
						<Text text={children} />
					</h4>
				)}
			</Balancer>
		</div>
	);
}

export default Headline;
