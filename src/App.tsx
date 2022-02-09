import * as React from "react";
import jss from "jss";
import preset from "jss-preset-default";

interface Param {
  param: ParamOptions;
}

interface ParamOptions {
  use: boolean;
  defaultValue: string;
}

class App extends React.Component {
  private undefined = undefined || null || "";

  private setItem(key: string, value: string, options?: Param): void {
    if (options?.param.use) {
      if (this.getUrlParam(value) === this.undefined) {
        // @ts-ignore
        sessionStorage.setItem(key, options.param.defaultValue);
      } else {
        sessionStorage.setItem(key, this.getUrlParam(value));
      }
    } else {
      // @ts-ignore
      sessionStorage.setItem(key, value);
    }
  }

  private getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  public componentDidMount() {
    jss.setup(preset());

    const text = {
      param: {
        use: true,
        defaultValue: "Googler",
      },
    };

    const color = {
      param: {
        use: true,
        defaultValue: "257,257,257",
      },
    };

    const bg = {
      param: {
        use: true,
        defaultValue: "0,0,0",
      },
    };

    const textTransform = {
      param: { use: true, defaultValue: "uppercase" },
    };

    const fontSize = {
      param: {
        use: true,
        defaultValue: "140",
      },
    };

    this.setItem("text", "text", text);
    this.setItem("color", "color", color);
    this.setItem("bg", "bg", bg);
    this.setItem("text-transform", "text-transform", textTransform);
    this.setItem("font-size", "font-size", fontSize);

    const sheet = jss.createStyleSheet({
      "@global": {
        "@font-face": {
          fontFamily: '"ITC Blair"',
          src: 'url("https://cdn.dergoogler.com/other/googler/fonts/c50c451297e0ceb237437de8487237e8.eot?#iefix")\r\n            format("embedded-opentype"),\r\n          \r\n            url("https://cdn.dergoogler.com/other/googler/fonts/c50c451297e0ceb237437de8487237e8.woff2")\r\n            format("woff2"),\r\n          \r\n            url("https://cdn.dergoogler.com/other/googler/fonts/c50c451297e0ceb237437de8487237e8.woff")\r\n            format("woff"),\r\n          \r\n            url("https://cdn.dergoogler.com/other/googler/fonts/c50c451297e0ceb237437de8487237e8.ttf")\r\n            format("truetype"),\r\n          \r\n            url("https://cdn.dergoogler.com/other/googler/fonts/c50c451297e0ceb237437de8487237e8.svg#ITC Blair")\r\n            format("svg")',
        },
        "html, body": {
          background:
            this.getItem("bg") === "transparent"
              ? "transparent"
              : `rgb(${this.getItem("bg")?.replace(/,/gm, " ")} / 100%)`,
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
          textTransform: this.getItem("text-transform"),
          animation: "stroke 5s infinite alternate",
          strokeWidth: "2",
          stroke: `rgb(${this.getItem("color")?.replace(/,/gm, " ")} / 0%)`,
          fontSize: `${this.getItem("font-size")}px`,
        },
        "@keyframes stroke": {
          "0%": {
            fill: `rgba(${this.getItem("color")}, 0)`,
            stroke: `rgba(${this.getItem("color")}, 1)`,
            strokeDashoffset: "25%",
            strokeDasharray: "0 50%",
            strokeWidth: "2",
          },
          "70%": {
            fill: `rgba(${this.getItem("color")}, 0)`,
            stroke: `rgba(${this.getItem("color")}, 1)`,
          },
          "80%": {
            fill: `rgba(${this.getItem("color")}, 0)`,
            stroke: `rgba(${this.getItem("color")}, 1)`,
            strokeWidth: "3",
          },
          "100%": {
            fill: `rgba(${this.getItem("color")}, 1)`,
            stroke: `rgba(${this.getItem("color")}, 0)`,
            strokeDashoffset: "-25%",
            strokeDasharray: "50% 0",
            strokeWidth: "0",
          },
        },
      },
    });

    sheet.attach();
  }

  private getUrlParam(param: string) {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?&]" + param + "=([^&#]*)");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
  }

  public render() {
    return (
      <>
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            {this.getItem("text")}
          </text>
        </svg>
      </>
    );
  }
}

export default App;
