import Reviews from "./Reviews";

export default {
	title: "Components/Reviews",
	component: Reviews,
};

const Template = (args) => <Reviews {...args} />;

export const Main = Template.bind({});
Main.args = {
	title: "Reviews",
	text: "This is a review block",
};
