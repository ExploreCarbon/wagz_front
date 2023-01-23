type ButtonProps = {
	label: string;
	type?: "button" | "submit" | "reset";
	size: "small" | "medium" | "large";
	variant: "primary" | "secondary" | "tertiary" | "white";
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children?: React.ReactNode;
};

function Button({
	type = "button",
	size = "medium",
	variant = "primary",
	onClick,
	children,
}: ButtonProps): JSX.Element {
	return (
		<div>
			<button
				type={type}
				onClick={onClick}
				className={`button ${size} ${variant}`}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
