import ReactHabitat from "react-habitat";
import { Containers } from "../ReactHabitats/ReactHabitats";

import "./App.scss";

export class App extends ReactHabitat.Bootstrapper {
  _containers: Containers;

  constructor() {
    super();

    this._containers = new Containers();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register container components
    for (let container of this._containers.getHabitats()) {
      builder.register(container.component).as(container.id);
    }

    // Finally, set the container:
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new App();
