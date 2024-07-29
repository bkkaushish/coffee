import { useContext } from "react";
import Plot from "react-plotly.js";
import { UseContext } from "../../Global_Hook/UseContext";




export default function LineChart(){
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

    const first=datas.map((items)=>items._id.country);
    const second=datas.map((items)=>items._id.topic==="oil" ? items._id.intensity: undefined);

    const third =datas.map((items)=>items._id.topic==="gas" ? items._id.intensity: undefined);
    const fourth=datas.map((items)=>items._id.topic==="energy" ? items._id.intensity: undefined);
    const fifth=datas.map((items)=>items._id.topic==="production" ? items._id.intensity: undefined);
    const sixth=datas.map((items)=>items._id.topic==="finance" ? items._id.intensity: undefined);
    const seventh=datas.map((items)=>items._id.topic==="economic growth" ? items._id.intensity: undefined);
    return (
        <Plot
        data={[
         {
            x:first,
            y:second,
            type:'scatter',
            marker:{
                color: 'rgb(142, 124, 195)',
                size: 12
            },
            mode:'markers',
            name:"oil"
            
         },
         {
            x:first,
            y:third,
            type:'scatter',
            marker:{
                color: '#7CB342',
                size: 12
            },
            mode:'markers',
            name:"gas"
            
         },
         {
            x:first,
            y:fourth,
            type:'scatter',
            marker:{
                color: '#69F0AE',
                size: 12
            },
            mode:'markers',
            name:"energy"
            
         },
         {
            x:first,
            y:fifth,
            type:'scatter',
            marker:{
                color: '#FFC107',
                size: 12
            },
            mode:'markers',
            name:"production"
            
         },
         {
            x:first,
            y:sixth,
            type:'scatter',
            marker:{
                color: '#795548',
                size: 12
            },
            mode:'markers',
            name:"finance"
         },
         {
            x:first,
            y:seventh,
            type:'scatter',
            marker:{
                color: '#546E7A',
                size: 12
            },
            mode:'markers',
            name:"economic growth"
            
         },
         
            
        ]
    }
    layout={{
        xaxis: {
            title: 'GDP per Capita',
            showgrid: false,
            zeroline: false,
            scaleratio:1,
          },
          yaxis: {
            title: 'Percent',
            showline: false,
            scaleratio:1

          },
          
          
        }
    
    }
    />
    )
}