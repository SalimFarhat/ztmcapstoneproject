import Home from "./routes/home/home.component";
import Navigation from "./routes/home/navigation/navigation.component";
import "./categories.styles.scss";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component"
import Checkout from "./components/Checkout/checkout.component";

// import {BrowserRouter as Routes, useRoutes} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} /> 
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;

