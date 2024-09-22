import { ProjectLayout } from "./components/layout/layout.tsx";
import { CartProvider } from "./contexts/cart/index.tsx";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/home/home.tsx";

function App() {
  return (
    <CartProvider>
      <ProjectLayout>
        <Home />
        <ToastContainer
          autoClose={3000}
          theme="dark"
          position="top-center"
          draggable
        />
      </ProjectLayout>
    </CartProvider>
  );
}

export default App;
