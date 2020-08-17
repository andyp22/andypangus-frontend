import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Footer, FooterProps } from "../../../components/shared/Footer/Footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  markup: `<p class="smaller center">This site powered by <a href="https://tngsitebuilding.com" class="footer" target="_blank" title="Learn more about TNG">The Next Generation of Genealogy Sitebuilding</a> v. 12.3,  written by Darrin Lythgoe  &copy; 2001-2020.</p>
  <p class="smaller center">Maintained by <a href="suggest.php?" class="footer" title="Contact Us">Andrew Page</a>.</p>
  `,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  markup: `<p class="smaller center">This site powered by <a href="https://tngsitebuilding.com" class="footer" target="_blank" title="Learn more about TNG">The Next Generation of Genealogy Sitebuilding</a> v. 12.3,  written by Darrin Lythgoe  &copy; 2001-2020.</p>
  <p class="smaller center">Maintained by <a href="suggest.php?" class="footer" title="Contact Us">Andrew Page</a>.</p>
  `,
};
