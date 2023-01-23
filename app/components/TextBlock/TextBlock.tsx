type TextBlockProps = {};
function TextBlock({}: TextBlockProps): JSX.Element {
	return (
		<div className="flex flex-col">
			<div id="title" />
			<div id="body" />
			<div id="icons" />
			<div id="cta" />
		</div>
	);
}

export default TextBlock;
