import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YouPreferThisOrThat from "./YouPreferThisOrThat/YouPreferThisOrThat";

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tu-préfères-ça-ou-ça" />
        <Route path="*" element={<YouPreferThisOrThat />} />
      </Routes>
    </Router>
  );
};

export default CustomRouter;
