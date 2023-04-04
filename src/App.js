import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>
      <Link to="mypage">My page</Link>
      <Link to="MyWebsite"> My webSite </Link>
      <Link to="MySun">My Sun</Link>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/phones" element={<h2>Phones Page</h2>} />
        <Route path="/mypage" element={<h2>My page</h2>} />
        <Route path="/MyWebsite" element={<h2>My webSite</h2>} /> 
        <Route path="/MySun" element={<h1>My Sun</h1>} />
      </Routes>
    </div>
  );
}

export default App;
