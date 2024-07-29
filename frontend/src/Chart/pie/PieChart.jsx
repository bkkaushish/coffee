import { useContext } from "react";
import Plot from "react-plotly.js";
import { UseContext } from "../../Global_Hook/UseContext";


export default function PieChart(){
    const {data,filters}=useContext(UseContext);

// Filter data based on selected filters
const filterData=()=>{
  return data.filter(item=>{
    return(
      (filters.topic===''||item._id.topic===filters.topic)&&
      (filters.sector===''||item._id.sector===filters.sector)&&
      (filters.region===''||item._id.region===filters.region)&&
      (filters.source===''||item._id.source===filters.source)&&
      (filters.pest===''||item._id.pest===filters.pest)&&
      (filters.endYear===''||item._id.end_year===filters.endYear)&&
      (filters.country===''||item._id.country===filters.country)&&
      (filters.insight===''||item._id.insight===filters.insight)
    );
  });
 
};

const datas=filterData();



    const xdata=datas.map((item)=>item._id.sector==="Energy" ? item._id.sector: undefined );
const ydata = datas.map((item)=>item._id.sector==="Energy" ? item._id.intensity: undefined );
const parent=datas.map((item)=> item._id.country )


    return(
        <Plot
          data={[
            {
                type:"sunburst",
                labels: parent,
                parents: xdata,
                values: ydata,
                marker:{
                    line:{
                        width:2
                    }
                },
                opacity:1,
                textfont:{
                    size:20,
                    color:"#000000",
                }

            },
            
          ]}
          layout={
            {
                margin:{l:0, r: 0, b: 0, t: 8},
                width: 500,
                height: 400,
            }
          }
        />
    )
}