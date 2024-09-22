import { ProjectLayout } from "./components/layout/layout.tsx";
import { CartProvider } from "./contexts/cart/index.tsx";
import { Home } from "./pages/home/home.tsx";

function App() {
  return (
    <CartProvider>
      <ProjectLayout>
        <Home />
      </ProjectLayout>
    </CartProvider>
  );
}

export default App;
