import WordCount from "./component/WordCount";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chucknorris from "./component/Chucknorris";
import "./style/WordCounter.scss";
import "./style/PageNotFound.scss";
import "./style/Chucknorris.scss";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WordCount />} />
          <Route
            path="/joke"
            element={
              <Chucknorris api={"https://api.chucknorris.io/jokes/random"} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
