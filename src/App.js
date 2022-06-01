import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/loading/loading";
const Cart = lazy(() => import("./pages/cart"));
const Home = lazy(() => import("./pages/home"));
const Product = lazy(() => import("./pages/product"));
const Profile = lazy(() => import("./pages/profile"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myprofile" element={<Profile />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
