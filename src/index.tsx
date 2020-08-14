import ReactHabitat from "react-habitat";
import "./components/App/App.scss";

// Import container components
import { ExamplePage } from "./components/ExamplePage/ExamplePage";

// Define an array of containers with the HTML ID's to attach to
const containers = [
  {
    id: "ExampleContainer",
    component: ExamplePage,
  },
];

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register container components
    for (let container of containers) {
      builder.register(container.component).as(container.id);
    }

    // Finally, set the container:
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new App();
