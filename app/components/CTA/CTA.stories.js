import CTA from "./CTA";

export default {
	title: "Components/CTA",
	component: CTA,
};

const Template = (args) => <CTA {...args} />;

export const Split = Template.bind({});
Split.args = {
	type: "split",
	title: "Title",
	subTitle: "Sub Title",
	buttonText: "Button Text",
	text: "Occaecat pariatur consequat adipisicing id ut Lorem est culpa labore Lorem est est ad sunt. Deserunt magna id deserunt mollit ullamco consequat anim non dolore. Ipsum occaecat in excepteur dolore cupidatat aliquip nisi ut. Cillum laborum aliqua enim non magna laboris. Ut aute non dolore id elit velit excepteur adipisicing officia. Consectetur dolore Lorem eu nostrud occaecat sit. Adipisicing tempor officia est reprehenderit quis in ipsum elit.",
};

export const Circle = Template.bind({});
Circle.args = {
	type: "circle",
	title: "Title",
	subTitle: "Sub Title",
	buttonText: "Button Text",
	text: "Nostrud aliqua mollit ullamco laboris dolore esse.",
};
