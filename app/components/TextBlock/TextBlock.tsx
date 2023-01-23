import Headline from "../Headline/Headline";
import Button from "../Button/Button";
import Text from "../Text/Text";

type TextBlockProps = {
	buttons?: React.ReactNode;
	title?: string;
	supTitle?: string;
	subTitle?: string;
	text?: string;
};
function TextBlock({
	buttons,
	title = "Headline",
	supTitle = "",
	subTitle = "",
	text,
}: TextBlockProps): JSX.Element {
	return (
		<div className="flex flex-col text-block">
			<div>
				{supTitle && (
					<Headline size="h4" extraClass="supTitle">
						{supTitle}
					</Headline>
				)}
				{title && (
					<Headline size="h1" extraClass="title">
						{title}
					</Headline>
				)}
				{subTitle && (
					<Headline size="h4" extraClass="subTitle">
						{subTitle}
					</Headline>
				)}
			</div>
			{text && (
				<div className="text">
					<p className="">
						<Text text={text} />
					</p>
				</div>
			)}

			<div className="buttons">
				{buttons?.map((button: React.ReactNode, index: number) => (
					<Button key={index} {...button} />
				))}
			</div>
		</div>
	);
}

export default TextBlock;
