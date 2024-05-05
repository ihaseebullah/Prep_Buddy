import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "../pages/Home";
import SelectedSubject from "../pages/SelectedSubject";

export default function Router(){
  const SelectedSubjectWrapper=()=>{
    const {subject}=useParams();
    return <SelectedSubject subject={subject}/>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectedSubject/:subject" element={<SelectedSubjectWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};
