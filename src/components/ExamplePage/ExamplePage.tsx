import * as React from "react";
import { Button } from "@blueprintjs/core";

export const ExamplePage = (props: any) => (
  <div>
    <h1>{props.title}</h1>
    <Button intent="success" text="Sample Button" color="primary"></Button>
  </div>
);
