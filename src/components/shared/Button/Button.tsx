import React from "react";
import "./button.scss";

import { Button } from "@blueprintjs/core";

export interface ButtonProps {
  intent?: any;
  text?: string;
  color?: string;
  large?: boolean;
  small?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent: React.FC<ButtonProps> = ({ ...props }) => {
  console.log(props);
  return <Button {...props} />;
};
