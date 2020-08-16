import React from "react";
import "./Footer.scss";

export interface FooterProps {
  markup: string;
}

export const Footer: React.FC<FooterProps> = ({ markup }) => {
  return (
    <div id="tfooter" dangerouslySetInnerHTML={{ __html: markup || "" }}></div>
  );
};
