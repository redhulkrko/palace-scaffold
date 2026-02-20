import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
// import AboutPage from "./pages/AboutPage";
// import TermsPage from "./pages/TermsPage";
// import PrivacyPage from "./pages/PrivacyPage";
// import FAQPage from "./pages/FAQPage";
// import { moviesData } from "./data/movieData";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/faq" element={<FAQPage />} /> */}
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
