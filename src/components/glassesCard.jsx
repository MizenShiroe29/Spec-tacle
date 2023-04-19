import React from "react";

function Glasses(props)
{
    const aGlasses = props.glasses;
    console.log("Glasses", props.glasses);
 return(
    <React.Fragment>
    <div class="card mb-3" style={{width:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={aGlasses.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{aGlasses.Title}</h5>
        <p class="card-text">{aGlasses.desc}</p>
        <p class="card-text"><small class="text-body-secondary">{aGlasses.manufacture}</small></p>
      </div>
    </div>
  </div>
</div>
    </React.Fragment>
 )   
}
export default Glasses;