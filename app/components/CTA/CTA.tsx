import Split from "./Split";
import Circle from "./Circle";
type CTAProps = {
	type: "split" | "circle";
	title: string;
	subTitle?: string;
	text?: string;
	buttonText?: string;
	buttonLink?: string;
};

function CTA({
	type,
	title,
	subTitle,
	text,
	buttonText,
	buttonLink,
}: CTAProps) {
	return (
		<div>
			{type === "split" && (
				<Split
					title={title}
					subTitle={subTitle}
					text={text}
					buttonText={buttonText}
					buttonLink={buttonLink}
				/>
			)}
			{type === "circle" && (
				<Circle
					title={title}
					subTitle={subTitle}
					text={text}
					buttonText={buttonText}
					buttonLink={buttonLink}
				/>
			)}
		</div>
	);
}

export default CTA;
