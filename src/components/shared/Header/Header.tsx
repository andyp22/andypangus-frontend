import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";

import "./Header.scss";
import * as headerImage from "../../../assets/header-image.jpg";

import { Login, LoginProps } from "../Login/Login";

export interface HeaderProps {
  title: string;
  dadLabel?: string;
  dadUrl?: string;
  momlabel?: string;
  momUrl?: string;
  featureLinksMarkup?: string;
  loginProps: LoginProps;
}

export interface MenuItemProps {
  url: string;
  label: string;
  keyNum: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, label, keyNum }) => (
  <span
    className="site-header__navigation-menu-item bp3-button bp3-minimal"
    key={keyNum}
  >
    <a href={url}>{label}</a>
  </span>
);

export const Header: React.FC<HeaderProps> = ({
  title,
  dadLabel,
  dadUrl,
  momlabel,
  momUrl,
  featureLinksMarkup,
  loginProps,
}) => {
  let dadListItem, momListItem;
  if (dadLabel && dadUrl)
    dadListItem = <MenuItem url={dadUrl} label={dadLabel} keyNum={1} />;
  if (momlabel && momUrl)
    momListItem = <MenuItem url={momUrl} label={momlabel} keyNum={2} />;

  const bits = featureLinksMarkup?.split("|");
  const menuItems = bits?.map((li, ind) => (
    <span
      className="site-header__navigation-menu-item bp3-button bp3-minimal"
      dangerouslySetInnerHTML={{ __html: li || "" }}
      key={ind + 3}
    ></span>
  ));

  return (
    <div className="site-header">
      <div className="site-header__main">
        <div className="site-header__eyebrow">
          <Login {...loginProps}></Login>
        </div>
        <div className="site-header__branding">
          <div className="site-header__logo">
            <a href="./tng/index.php">{title}</a>
          </div>
        </div>
      </div>
      <div className="site-header__navigation">
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Explore</Navbar.Heading>
            <Navbar.Divider />
            {dadListItem}
            {momListItem}
            {menuItems}
          </Navbar.Group>
        </Navbar>
      </div>
    </div>
  );
};
