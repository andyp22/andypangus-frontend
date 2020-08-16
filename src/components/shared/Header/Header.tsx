import React from "react";
import "./Header.scss";

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
  keyNum: number;
}

const ListItem: React.FC<ListItemProps> = ({ url, label, keyNum }) => (
  <li key={keyNum}>
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
    dadListItem = <ListItem url={dadUrl} label={dadLabel} keyNum={1} />;
  if (momlabel && momUrl)
    momListItem = <ListItem url={momUrl} label={momlabel} keyNum={2} />;

  const bits = featureLinksMarkup?.split("|");
  const listItems = bits?.map((li, ind) => (
    <li dangerouslySetInnerHTML={{ __html: li || "" }} key={ind + 3}></li>
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
