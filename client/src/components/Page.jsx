import axios from "axios";
import Footer from "./Footer";
import Sidebar, { NotificationsDrawer } from "./Sidebar";

export default function Page(props) {
  
  return (
    <div
      style={{ backgroundColor: "#F1F2F3" }}
      className="min-h-screen flex flex-col p-4 pt-10"
    >
      <div className="flex-1">
        <div className="container mx-auto ">{props.children}</div>
        <Sidebar />
        <NotificationsDrawer />
      </div>
      <Footer />
    </div>
  );
}
