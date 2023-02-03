import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./components/Pages/Episodes";
import Location from "./components/Pages/Location";
import Navbar from "./components/Navbar/Navbar";
import CardDetails from "./components/Cards/CardDetails";
import NotFoundPage from "./components/Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${specie}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <Filters
            setSpecie={setSpecie}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/"  results={results}  />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
