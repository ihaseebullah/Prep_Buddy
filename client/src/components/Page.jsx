import Footer from "./Footer";

export default function Page(props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto "></div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
