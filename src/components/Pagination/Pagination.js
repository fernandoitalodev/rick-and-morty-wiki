import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
function Pagination({ info,pageNumber,setPageNumber}) {
   let [width, setWidth]=useState(window.innerWidth);

let updateDimension = ()=>{
  setWidth(window.innerWidth)
  
}

   useEffect(()=>{
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
   })
  //  resize é quando o tamanho da tela é alterado
  return (
    <>
    <style jsx>
      {
        `
        @media (max-width:768px){
      .next, .prev{
        display:none;
      }
      .pagination{
        font-size:14px;
      }
        }
        `
      }
    </style>
    
   <ReactPaginate
   className="pagination justify-content-center gap-4 my-4"
   nextLabel="Next"
   forcePage={pageNumber ===1? 0 : pageNumber -1}
   previousLabel="Prev"
   marginPagesDisplayed={width < 576 ? 1: 2}
   pageRangeDisplayed={width < 576 ? 1: 2}
   nextClassName="btn btn-primary next"
   nextLinkClassName='text-light'
   previousClassName="btn btn-primary prev "
   previousLinkClassName='text-light'
   pageClassName='page-item'
   pageLinkClassName='page-link'
   activeClassName='active'
   pageCount={info?.pages}
   onPageChange={(data)=>{
    setPageNumber( data.selected +1)
    window.scrollTo({top: 0, behavior: 'smooth'})
   }}
   

   />
   </>
  )
}

export default Pagination