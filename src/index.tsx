import App from "./App";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

class Bootloader {
  private loadPage() {
    ReactDOM.render(<App />, document.querySelector("app"));
  }

  public init() {
    this.loadPage();
  }
}

new Bootloader().init();
