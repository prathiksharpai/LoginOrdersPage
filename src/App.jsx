import { useState } from "react";
import Login from "./components/Login";
import OrdersPage from "./components/OrdersPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? <OrdersPage /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;
