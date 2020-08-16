// Import container components
import { ExamplePage } from "../ExamplePage/ExamplePage";
import { Header } from "../shared/Header/Header";

export interface IReactHabitatContainer {
  id: string;
  component: any;
}

export class Containers {
  _containers: IReactHabitatContainer[];

  constructor() {
    this._containers = [
      {
        id: "ExampleContainer",
        component: ExamplePage,
      },
      {
        id: "HeaderContainer",
        component: Header,
      },
    ];
  }

  public getHabitats(): IReactHabitatContainer[] {
    return this._containers;
  }
}
