import TextBlock from "./TextBlock";

export default {
	title: "Components/Text Block",
	component: TextBlock,
};

const Template = (args) => (
	<div className="max-w-3xl">
		<TextBlock {...args} buttons={args.buttons} />
	</div>
);

export const Main = Template.bind({});
Main.args = {
	title: "Title",
	supTitle: "Sub Title",
	text: "Proident proident aliqua eu elit adipisicing culpa ea culpa dolor tempor cupidatat id sunt. Consectetur est fugiat fugiat duis mollit esse consectetur velit eiusmod non sint eiusmod pariatur. Culpa voluptate nulla adipisicing Lorem anim occaecat velit nulla pariatur occaecat cillum eu. Duis magna dolore aliquip sit. Dolor nisi cillum culpa sint sint consequat.",
};

export const TwoButtons = Template.bind({});
TwoButtons.args = {
	title: "Title",
	supTitle: "Sub Title",
	text: "Proident proident aliqua eu elit adipisicing culpa ea culpa dolor tempor cupidatat id sunt. Consectetur est fugiat fugiat duis mollit esse consectetur velit eiusmod non sint eiusmod pariatur. Culpa voluptate nulla adipisicing Lorem anim occaecat velit nulla pariatur occaecat cillum eu. Duis magna dolore aliquip sit. Dolor nisi cillum culpa sint sint consequat.",
	buttons: [
		{
			variant: "primary",
			children: "Primary Button",
		},
		{
			variant: "secondary",
			children: "Secondary Button",
		},
	],
};
