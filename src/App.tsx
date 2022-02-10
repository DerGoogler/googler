import * as React from "react";
import jss from "jss";
import preset from "jss-preset-default";
import PreferencesManager from "./PreferencesManager";
import { PMInterface } from "./PreferencesManager/type";

class App extends React.Component {
  private undefined = undefined || null || "";
  private pm: PMInterface = new PreferencesManager({ use: "session with param" });

  public componentDidMount() {
    jss.setup(preset());

    this.pm.setItem("text", "text", "Googler");
    this.pm.setItem("color", "color", "257,257,257");
    this.pm.setItem("bg", "bg", "0,0,0");
    this.pm.setItem("text-transform", "text-transform", "uppercase");
    this.pm.setItem("font-size", "font-size", "140");

    const sheet = jss.createStyleSheet({
      "@global": {
        "@font-face": {
          fontFamily: '"ITC Blair"',
          src: 'url("https://cdn.dergoogler.com/others/googler/fonts/c50c451297e0ceb237437de8487237e8.eot?#iefix")\r\n            format("embedded-opentype"),\r\n          \r\n            url("https://cdn.dergoogler.com/others/googler/fonts/c50c451297e0ceb237437de8487237e8.woff2")\r\n            format("woff2"),\r\n          \r\n            url("https://cdn.dergoogler.com/others/googler/fonts/c50c451297e0ceb237437de8487237e8.woff")\r\n            format("woff"),\r\n          \r\n            url("https://cdn.dergoogler.com/others/googler/fonts/c50c451297e0ceb237437de8487237e8.ttf")\r\n            format("truetype"),\r\n          \r\n            url("https://cdn.dergoogler.com/others/googler/fonts/c50c451297e0ceb237437de8487237e8.svg#ITC Blair")\r\n            format("svg")',
        },
        "html, body": {
          background:
            this.pm.getItem("bg") === "transparent"
              ? "transparent"
              : `rgb(${this.pm.getItem("bg")?.replace(/,/gm, " ")} / 100%)`,
          width: "100vh",
          height: "100vh",
          overflow: "hidden",
        },
        svg: {
          fontFamily: '"ITC Blair"',
          position: "absolute",
          width: "100%",
          height: "100%",
        },
        "svg text": {
          textTransform: this.pm.getItem("text-transform"),
          animation: "stroke 5s infinite alternate",
          strokeWidth: "2",
          stroke: `rgb(${this.pm.getItem("color")?.replace(/,/gm, " ")} / 0%)`,
          fontSize: `${this.pm.getItem("font-size")}px`,
        },
        "@keyframes stroke": {
          "0%": {
            fill: `rgba(${this.pm.getItem("color")}, 0)`,
            stroke: `rgba(${this.pm.getItem("color")}, 1)`,
            strokeDashoffset: "25%",
            strokeDasharray: "0 50%",
            strokeWidth: "2",
          },
          "70%": {
            fill: `rgba(${this.pm.getItem("color")}, 0)`,
            stroke: `rgba(${this.pm.getItem("color")}, 1)`,
          },
          "80%": {
            fill: `rgba(${this.pm.getItem("color")}, 0)`,
            stroke: `rgba(${this.pm.getItem("color")}, 1)`,
            strokeWidth: "3",
          },
          "100%": {
            fill: `rgba(${this.pm.getItem("color")}, 1)`,
            stroke: `rgba(${this.pm.getItem("color")}, 0)`,
            strokeDashoffset: "-25%",
            strokeDasharray: "50% 0",
            strokeWidth: "0",
          },
        },
      },
    });

    sheet.attach();
  }

  public render() {
    return (
      <div>
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            {this.pm.getItem("text")}
          </text>
        </svg>
      </div>
    );
  }
}

export default App;
