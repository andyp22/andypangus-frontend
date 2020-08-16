import React from "react";
import "./Headera.scss";

export interface HeaderProps {
  title: string;
  dadLabel?: string;
  dadUrl?: string;
  momlabel?: string;
  momUrl?: string;
  featureLinksMarkup?: string;
}

export interface ListItemProps {
  url: string;
  label: string;
}

const ListItem: React.FC<ListItemProps> = ({ url, label }) => (
  <li>
    <a href={url}>{label}</a>
  </li>
);

export const Header: React.FC<HeaderProps> = ({
  title,
  dadLabel,
  dadUrl,
  momlabel,
  momUrl,
  featureLinksMarkup,
}) => {
  let dadListItem, momListItem;
  if (dadLabel && dadUrl)
    dadListItem = <ListItem url={dadUrl} label={dadLabel} />;
  if (momlabel && momUrl)
    momListItem = <ListItem url={momUrl} label={momlabel} />;

  const bits = featureLinksMarkup?.split("|");
  const listItems = bits?.map((li) => (
    <li dangerouslySetInnerHTML={{ __html: li || "" }}></li>
  ));

  return (
    <div className="theader">
      <div id="tmast" className="mast">
        <h1>{title}</h1>
      </div>
      <div id="tmenu">
        <ul>
          {dadListItem}
          {momListItem}
          {listItems}
        </ul>
      </div>
    </div>
  );
};
