import Icon from "./Icon";

export default {
	title: "Components/Icon",
	component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Main = Template.bind({});
Main.args = {
	image:
		"//cdn.shopify.com/s/files/1/0474/1899/8949/files/customizable_1024x1024.png?v=1625050535",
	text: "Customizable",
	color: "blended",
};
