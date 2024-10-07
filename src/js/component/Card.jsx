import React from "react";

function ElCard({ image, title, description }) {
    return (
      <div className="col-12 col-lg-3 my-3">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h4>{title}</h4>
            <p className="card-text">{description}</p>
          </div>
          <div>
            <div className="card-footer">
            <buttom href="#" className="btn btn-primary mx-3 mb-3 row align-items-center">
                <div className="text-center col">
              Find Out More!
              </div>
            </buttom>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
   

export default ElCard;
