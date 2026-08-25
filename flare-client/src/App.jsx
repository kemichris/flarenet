import AppRoutes from "./routes/App.routes";
import ScrollToTop from "./components/common/ScrollToTop";
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
       <ScrollToTop />
      {/* <Toaster />  */}
      <AppRoutes />
    </>
  );
}

export default App;
