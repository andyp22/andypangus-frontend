// Import container components
import { ExamplePage } from "../ExamplePage/ExamplePage";
import { Header } from "../shared/Header/Header";
import { Footer } from "../shared/Footer/Footer";

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
      {
        id: "FooterContainer",
        component: Footer,
      },
    ];
  }

  public getHabitats(): IReactHabitatContainer[] {
    return this._containers;
  }
}
