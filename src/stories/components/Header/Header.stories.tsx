import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Header, HeaderProps } from "../../../components/shared/Header/Header";

export default {
  title: "Example/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  title: "The Rosedale Pages",
  dadLabel: "His Side",
  dadUrl: "pedigree.php?personID=I2&amp;tree=pageFamily",
  momlabel: "Her Side",
  momUrl: "pedigree.php?personID=I1&amp;tree=pageFamily",
  featureLinksMarkup: `<a href="http://tngsitebuilding.com" title="Third Link">Third Link</a>|<a href="http://tngsitebuilding.com/blog" title="Fourth Link">Fourth Link</a>`,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
