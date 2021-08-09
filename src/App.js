import "./styles.css";
import Facebook from "./components/Facebook.js";
export default function App() {
  return (
    <div className="App">
      <h1>Facebook Authorization</h1>
      <p>To get started, authenicate with Facebook.</p>
      <Facebook />
    </div>
  );
}
