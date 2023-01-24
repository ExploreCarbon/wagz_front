import Logos from "./Logos";

export default {
	title: "Components/Logos",
	component: Logos,
};

const Template = (args) => <Logos {...args} />;

export const Main = Template.bind({});
Main.args = {};
