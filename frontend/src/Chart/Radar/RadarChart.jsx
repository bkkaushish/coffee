import { useContext } from "react";
import Plot from "react-plotly.js";
import { UseContext } from "../../Global_Hook/UseContext";




export default function RadarChart(){
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
      (filters.country===''||item._id.country===filters.country)
    );
  });
 
};

const datas=filterData();

    const first=datas.map((items)=>  items._id.country);
    const second=datas.map((items)=> items._id.likelihood );

    const third=datas.map((items)=>  items._id.country);
    const fourh=datas.map((items)=> items._id.relevance);

    const fifth=datas.map ((items)=>  items._id.country);
    const sixth=datas.map((items)=> items._id.intensity);
    return (
        
        <Plot
        data={[
         {
            r:second,
            theta:first,
            type:'scatterpolar',
            fill:'toself',
            name:"Oil"
            
         },
         {
            theta:third,
            r:fourh,
            type:'scatterpolar',
            fill:'toself',
           name:"Gas"
            
         },
         {
            theta:fifth,
            r:sixth,
            type:'scatterpolar',
            fill:'toself',
           name:"Energy"
            
         },
        
         
            
        ]
    }
    layout={{
       polar:{
        radialaxis:{
            visible:true,
            range:[0,50],

        }
       },
       width:880,
       margin:{l:0,r:0,t:20,b:0},
           height:400,
       
        }
    
    }
    
    />
    )
}