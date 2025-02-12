import "./App.css";
// import LandingPage from './components/LandingPage'
// import Greeting from "./components/Greeting";
// import Profile from "./components/Profile";
// import Button from "./components/Button";
// import Counter from "./components/CounterApp/Counter";
import TodoComp from "./components/TodoTaskApp/TodoComp";
/*
JSX is a syntax extension for JavaScript that looks similar to HTML but is used within React to define the structure of UI components.
JSX makes it easier to write and visualize the UI components. It’s compiled to JavaScript under the hood.
Key Points:
Embedding Dynamic Content: You can insert JavaScript expressions inside JSX using curly braces {}.
One Parent Element Rule: JSX elements must have one parent wrapper (like a div, <>, or React.Fragment).
Attributes in JSX: Use camelCase for attributes like className, onClick, etc.
JSX is not HTML: Some HTML attributes (like class or for) have different names in JSX (className and htmlFor).
*/
function App() {
  return (
    <>
      {/* <Greeting name="Nishant" batch=" FWD-15" color="purple" />
      <Greeting name="React Learners" batch=" FWD-16" />
      <Profile name="Aveek" age={24} profession="Analyst" />
      <Profile name="Arka" age={25} profession="Developer" /> */}
      {/* <Counter /> */}
      <TodoComp />

      {/* <LandingPage />      */}
    </>
  );
}

export default App;
