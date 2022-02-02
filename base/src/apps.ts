import { RegistrableApp, ObjectType } from "qiankun";

const apps: RegistrableApp<ObjectType>[] = [
  {
    name: "VueMicroApp",
    entry: "//localhost:8080/",
    container: "#frame",
    activeRule: "/vue",
  },
  {
    name: "ReactMicroApp",
    entry: "//localhost:9000/",
    container: "#frame",
    activeRule: "/react"
  }
];

export default apps;
