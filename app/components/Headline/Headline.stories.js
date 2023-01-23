import Headline from "./Headline";

export default {
	title: "Components/Headline",
	component: Headline,
	args: {
		id: "headline",
		color: "primary",
	},
};

const Template = (args) => <Headline {...args}>{args.children}</Headline>;

export const Main = Template.bind({});
Main.args = {
	children: "Wagz Headline",
	size: "h1",
	fontFamily: "sans",
	align: "center",
};
