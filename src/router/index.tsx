import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointments from '../page';

const RouterControl = () => {
  return(
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Appointments />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default RouterControl;