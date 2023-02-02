import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    largeScreenImage: {
      control: { type: "file" },
    },
    mediumScreenImage: {
      control: { type: "file" },
    },
    smallScreenImage: {
      control: { type: "file" },
    },
  },
};

const Template = (args) => <Hero {...args} />;

export const HeroFull = Template.bind({});
HeroFull.args = {};
