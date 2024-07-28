import React from "react"
import { useContext } from "react"
import { UseContext } from "../../Global_Hook/UseContext"
import Plot from "react-plotly.js"

const BarChart=()=>{
const {data,filters}=useContext(UseContext);

// Filter data based on selected filters
 const filteredData=()=>{
  return data.filter(item=>{
    return(
      (filters.topic===''||item._id.topic===filters.topic)&&
      (filters.sector===''||item._id.sector===filters.sector)&&
      (filters.region===''||item._id.region===filters.region)&&
      (filters.source===''||item._id.source===filters.source)&&
      (filters.pest===''||item._id.pest===filters.pest)&&
      (filters.endYear===''||item._id.end_year===filters.endYear)&&
      (filters.country===''||item._id.country===filters.country)
    );
  });
 
};
const testing=filteredData();

//console.log(testing)
const datas={
  x:testing.map((item)=>item._id.title),
  y:testing.map((item)=>item._id.intensity),
  type:'bar',

};


// const ydata = data.map((item)=>item._id.sector==='Energy' ? item._id.intensity : undefined);
// const zdata = data.map((item)=>item._id.sector==='Financial services' ? item._id.intensity : undefined);
// const tdata = data.map((item)=>item._id.sector==='Manifacturing' ? item._id.intensity : undefined);
 
    return (
      <Plot
      
      data={
        [
        datas
        // {
        //   name:'Energy Sector',
        //   x:xdata,                                  
        //   y:ydata,
        //   type:"bar"
        // },
        // {
        //   name:'Financial Sector',
        //   type:"bar",
        //   x:xdata,
        //   y:zdata,

        // },
        // {
        //   name:'Manifacturing Sector',
        //   type:"bar",
        //   x:xdata,
        //   y:tdata,
         
        // }
        
      ]}
      layout={{title:"Power in 3 sectors" }}/>
    );   
}
export default BarChart