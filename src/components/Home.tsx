import { isPlatform } from "@ionic/react";
import MobileHome from "../android/Home";
import WebHome from "../web/pages/Home";
import { SampleForm } from "./SampleForm";
import SampleTable from "./SampleTable";

export const Home = () => {
  // return isPlatform("android") ? <MobileHome /> : <WebHome />;
  // return <SampleForm />;
  return <SampleTable />;
};
