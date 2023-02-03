import React from "react";
import styles from './Cards.module.scss'
import {Link} from 'react-router-dom';
import NotFound from "./NotFound";
const Cards = ({ results,page }) => {
  let display;
  

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location,status } = x;
      return (
        <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark" >
            <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
              <img src={image} alt="" className={ `${styles.img} img-fluid `} />
          <div className="content p-2">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>  
            </div>
          {
            (()=>{
              if(status==='Alive'){
                return (
                 <div className={ `${styles.badge} badge position-absolute ${styles.alive}` }>{status}</div>
              )
              } else if(status==='Dead'){
                return (
                  <div className={ `${styles.badge} badge position-absolute ${styles.dead}` }>{status}</div>
               )
              }else{
                return (
                  <div className={ `${styles.badge} badge position-absolute ${styles.unknown}` }>{status}</div>
               )
              }
              
            })()
          }
         
        </Link>
      );
    });
  } else {
    display = <NotFound/>
  }
  return <>{display}</>;
};

export default Cards;
