import React from "react";
import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Providers from "./provider";
import Wishlist from "./pages/wishlist";

const App: React.FC = () => {
  const currentPath = window.location.pathname;
  const stripWishlistPrefix = (path: string) => {
    if (path.startsWith("/wishlist")) {
      const stripped = path.replace("/wishlist", "");
      return stripped === "" ? "/" : stripped;
    }
    return path.startsWith("/") ? path : "/";
  };

  const initialPath = stripWishlistPrefix(currentPath);

  console.log("❤️ Wishlist App mounting with window path:", currentPath, "internal path:", initialPath);

  return (
    <Providers>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/" element={<Wishlist />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </MemoryRouter>
    </Providers>
  );
};

export default App;