import Header from "../component/Header";
import Footer from "../component/Footer";
import AppBody from "../component/AppBody";
import { ErrorBoundary } from "react-error-boundary";
import MyErrorHandler from "./MyErrorHandler";

function Home() {
  const handleError = () => {
    console.log("AN ERROR OCCURED");
    console.log("SEND SMS TO INFRA TEAM");
    console.log("SEND AN EMAIL TO MANAGER");
    // MAKE AN API CALL, that will trigger SMS/EMAIL
  };

  return (
    <ErrorBoundary FallbackComponent={MyErrorHandler} onError={handleError}>
      <AppBody />
      <Footer />
    </ErrorBoundary>
  );
}

export default Home;
