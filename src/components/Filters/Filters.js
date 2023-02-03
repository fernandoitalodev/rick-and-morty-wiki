import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setStatus,setPageNumber,setGender,setSpecie}) => {
  const Clear= () =>{
    setStatus('')
    setPageNumber('')
    setGender('')
    setSpecie('')
      window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5"> 
      <h2 className="text-center fw-bold fs-4 mb-3">Filter</h2>
      <h6
      onClick={Clear}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary mb-4"
      >
        Clear Filters
      </h6>

      <div class="accordion " id="accordionExample">
       <Status setStatus={setStatus} setPageNumber={setPageNumber} />
       <Species  setSpecie={setSpecie} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        
        
      </div>
    </div>
  );
};

export default Filters;
