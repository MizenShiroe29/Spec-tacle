import React from "react";

function Glasses(props)
{
    const aGlasses = props.glasses;
    console.log("Glasses", props.glasses);
 return(
    <React.Fragment>
    <div className="card mb-3" style={{width:"540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={aGlasses.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{aGlasses.Title}</h5>
        <p className="card-text">{aGlasses.desc}</p>
        <p className="card-text"><small className="text-body-secondary">{aGlasses.manufacture}</small></p>
      </div>
    </div>
  </div>
</div>
    </React.Fragment>
 )   
}
export default Glasses;