import apps from "./apps";
import {
  registerMicroApps,
  start,
} from "qiankun";

registerMicroApps(apps, {
  beforeLoad: (app: any) => {
    console.log("before load", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app: any) => {
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

start()