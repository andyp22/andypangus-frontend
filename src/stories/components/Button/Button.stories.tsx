import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  ButtonComponent,
  ButtonProps,
} from "../../../components/shared/Button/Button";

export default {
  title: "Example/Button",
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  text: "Primary Button",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  color: "primary",
};

export const Large = Template.bind({});
Large.args = {
  text: "Large Button",
  color: "primary",
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  text: "Small Button",
  color: "primary",
  small: true,
};
