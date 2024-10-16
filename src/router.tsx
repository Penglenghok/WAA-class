import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import EditDetail from "./pages/EditPost";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id/detail" element={<PostDetail />} />
        <Route path="/:id/edit" element={<EditDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
