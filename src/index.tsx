import App from "./App";
import ReactDOM from "react-dom";

class Bootloader {
  private loadPage() {
    ReactDOM.render(<App />, document.querySelector("app"));
  }

  public init() {
    this.loadPage();
  }
}

new Bootloader().init();
