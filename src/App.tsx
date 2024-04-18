import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro144 from "./pages/MacBookPro144";
import MacBookPro142 from "./pages/MacBookPro142";
import PersonTypingReview from "./pages/PersonTypingReview";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/person-typing-review":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro144 />} />
      <Route path="/log-in-page-1" element={<MacBookPro142 />} />
      <Route path="/person-typing-review" element={<PersonTypingReview />} />
    </Routes>
  );
}
export default App;
