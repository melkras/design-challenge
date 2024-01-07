import TopBar from "./components/top-bar";
import Content from "./components/content";
import SignUpIn from "./pages/sign-up-in";
function App() {

  return (
    <>
      <TopBar />
      <Content>
        <SignUpIn />
      </Content>
    </>
  );
}

export default App;
