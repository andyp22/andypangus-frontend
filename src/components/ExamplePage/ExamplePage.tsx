import * as React from "react";
import { ButtonComponent } from "../shared/Button/Button";

export const ExamplePage = (props: any) => (
  <div>
    <h1>{props.title}</h1>
    <ButtonComponent
      intent="success"
      text="Sample Button"
      color="primary"
    ></ButtonComponent>
  </div>
);
