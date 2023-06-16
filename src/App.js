import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Navbar from "./components/navbar/Navbar";
import SearchFeed from "./components/navbar/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchInput" element={<SearchFeed />} />
      </Routes>
    </>
  );
}

export default App;
