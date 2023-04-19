import React, {useEffect, useState} from "react";
import Glasses from "./glassesCard";
import spectacleService from "./services/services";


function Specs() {
  const [specData, setSpecData] = useState({
    glassesData: [],
    glassesComponent: [],
  });
  console.log(specData,setSpecData);
  const mapSpecs = (aGlasses) => {
    console.log("mapping", aGlasses);
    return <Glasses glasses={aGlasses} key={"ListA-" + aGlasses.id} />;
  };
  useEffect(()=> {
    console.log("firing useEffect for SpecData")
    spectacleService
      .getSpecs()
      .then(onGetSpecsSuccess)
      .catch(onGetSpecsError)
  });

  const onGetSpecsSuccess =(data)=>{
    console.log("GetSpecsSuccess", data);

    let specDataLog = data.item.pagesItems;

    setSpecData((prevState)=> {
      const sd = {...prevState};
      sd.glassesData = specDataLog;
      sd.glassesComponent = specDataLog.map(mapSpecs);
      return sd;
    });
  };
  const onGetSpecsError =(err)=>{
    console.err("error", err);
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Specs</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Specs;
