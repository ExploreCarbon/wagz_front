type TextBlockProps = {};
function TextBlock({}: TextBlockProps): JSX.Element {
	return (
		<div className={`flex flex-col`}>
			<div id="title"></div>
			<div id="body"></div>
			<div id="icons"></div>
			<div id="cta"></div>
		</div>
	);
}

export default TextBlock;
