import Image from "./Image";

export default {
	title: "Components/Image",
	component: Image,
	argTypes: {
		image: {
			control: { type: "file" },
		},
		style: {
			control: { type: "select", options: ["circle", "square"] },
			defaultValue: "circle",
		},
	},
};

const Template = (args) => <Image {...args} />;

export const Circle = Template.bind({});
Circle.args = {
	style: "circle",
	alt: "Circle Image",
};

export const Square = Template.bind({});
Square.args = {
	alt: "Square Image",
	style: "square",
};
