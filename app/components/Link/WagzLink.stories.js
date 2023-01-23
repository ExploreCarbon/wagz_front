import WagzLink from "./WagzLink";

export default {
	title: "Components/Link",
	component: WagzLink,
};

const Template = (args) => <WagzLink {...args} />;

export const Main = Template.bind({});
Main.args = {
	href: "#",
	text: "This is a link",
};
