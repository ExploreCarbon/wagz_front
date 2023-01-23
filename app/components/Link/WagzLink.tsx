// Create a link that is either a button or a hyperlink

type LinkProps = {
	href: string;
	text: string;
	target?: "_self" | "_blank";
	button?: boolean;
};

function WagzLink({
	href,
	text,
	target = "_self",
	button = false,
}: LinkProps): JSX.Element {
	return (
		<a
			href={href}
			target={target}
			className={`${button ? "button medium primary" : "link"}`}
			rel="prefetch"
		>
			{text}
		</a>
	);
}

export default WagzLink;
