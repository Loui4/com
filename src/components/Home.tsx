import { isPlatform } from "@ionic/react";
import MobileHome from "../android/Home";
import WebHome from "../web/pages/Home";
import { SampleForm } from "./SampleForm";

export const Home = () => {
  // return isPlatform("android") ? <MobileHome /> : <WebHome />;
  return <SampleForm />;
};
