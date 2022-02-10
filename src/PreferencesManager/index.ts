import { Options, PMInterface } from "./type";

/**
 * Custom preferences manager
 */
class PreferencesManager implements PMInterface {
  private undefined = undefined || null || "";
  private use: string;

  public constructor(options: Options) {
    this.use = options.use;
  }

  public setItem(key: string, value: string, defaultValue?: string): void {
    switch (this.use) {
      case "local with param":
        if (this.getUrlParam(value) === this.undefined) {
          // @ts-ignore
          localStorage.setItem(key, defaultValue);
        } else {
          localStorage.setItem(key, this.getUrlParam(value));
        }
        break;

      case "session with param":
        if (this.getUrlParam(value) === this.undefined) {
          // @ts-ignore
          sessionStorage.setItem(key, defaultValue);
        } else {
          sessionStorage.setItem(key, this.getUrlParam(value));
        }
        break;

      case "local":
        if (this.getItem(key) === this.undefined) {
          // @ts-ignore
          localStorage.setItem(key, defaultValue);
        } else {
          localStorage.setItem(key, value);
        }
        break;

      case "session":
        if (this.getItem(key) === this.undefined) {
          // @ts-ignore
          sessionStorage.setItem(key, defaultValue);
        } else {
          sessionStorage.setItem(key, value);
        }
        break;

      default:
        console.log("Please select an usage");
        break;
    }
  }

  public getItem(key: string): string | null {
    switch (this.use) {
      case "local with param":
        if (this.getUrlParam(value) === this.undefined) {
          // @ts-ignore
          localStorage.setItem(key, defaultValue);
        } else {
          localStorage.setItem(key, this.getUrlParam(value));
        }
        break;

      case "session with param":
        if (this.getUrlParam(value) === this.undefined) {
          // @ts-ignore
          sessionStorage.setItem(key, defaultValue);
        } else {
          sessionStorage.setItem(key, this.getUrlParam(value));
        }
        break;

      case "local":
        if (this.getItem(key) === this.undefined) {
          // @ts-ignore
          localStorage.setItem(key, defaultValue);
        } else {
          localStorage.setItem(key, value);
        }
        break;

      case "session":
        if (this.getItem(key) === this.undefined) {
          // @ts-ignore
          sessionStorage.setItem(key, defaultValue);
        } else {
          sessionStorage.setItem(key, value);
        }
        break;

      default:
        console.log("Please select an usage");
        break;
    }
  }

  private getUrlParam(param: string): string {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?&]" + param + "=([^&#]*)");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
  }
}

export default PreferencesManager;
