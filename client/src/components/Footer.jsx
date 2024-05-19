import Navigation from "./Navigation";
import { Saved } from "./Sidebar";

export default function Footer(){
    return(
        <div className=" text-white  text-center">
        <Navigation />
        <Saved />
      </div>
    )
}