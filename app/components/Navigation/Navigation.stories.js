import Navigation from "./Navigation";

export default {
	title: "Components/Navigation",
	component: Navigation,
};

const Template = (args) => <Navigation {...args}>{args.children}</Navigation>;

export const Main = Template.bind({});
Main.args = {};
