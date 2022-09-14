import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Layout/NavBar/NavBar";
import views from "./views";

function App() {
  const addedRoutes = views.map((view) => <Route key={view.name} path={view.path} element={<view.element {...view.props} />} />);
  return (
    <Router>
      <NavBar title="Project" views={views} />
      <div className="App">
        <Routes>{addedRoutes}</Routes>
      </div>
    </Router>
  );
}

export default App;
