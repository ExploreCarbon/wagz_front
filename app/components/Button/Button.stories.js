import Button from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
	},
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
	children: "Button",
	variant: "primary",
	size: "medium",
};
