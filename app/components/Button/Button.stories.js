import Button from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
	},
};

const Template = (args) => <Button {...args} />;

export const DIY = Template.bind({});
DIY.args = {
	children: "Button",
	variant: "primary",
	size: "medium",
};

export const Large = Template.bind({});
Large.args = {
	children: "Button",
	variant: "primary",
	size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
	children: "Button",
	variant: "primary",
	size: "medium",
};

export const Small = Template.bind({});
Small.args = {
	children: "Button",
	variant: "primary",
	size: "small",
};

export const Primary = Template.bind({});
Primary.args = {
	children: "Button",
	variant: "primary",
	size: "medium",
};
export const Secondary = Template.bind({});
Secondary.args = {
	children: "Button",
	variant: "secondary",
	size: "medium",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	children: "Button",
	variant: "tertiary",
	size: "medium",
};

export const White = Template.bind({});
White.args = {
	children: "Button",
	variant: "white",
	size: "medium",
};
