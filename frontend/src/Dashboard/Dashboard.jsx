
import {  IconButton, Typography, useTheme } from "@mui/material";
import { shades } from "../theme/theme";
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { useContext } from "react";
import { UseContext } from "../Global_Hook/UseContext";
import BarChart from "../Chart/Bar/BarChart";
import LineChart from "../Chart/Line/LineChart";
import PieChart from "../Chart/pie/PieChart";
import RadarChart from "../Chart/Radar/RadarChart";
export default function Dashboard(){
const theme=useTheme();
const colors=shades(theme.palette.mode);
const{setIsCollapsed,data,filters}=useContext(UseContext);
const filteredData=()=>{
    return data.filter(item=>{
      return(
        // (filters.topic=''||item._id.topic===filters.topic)&&
        (filters.sector===''||item._id.sector===filters.sector)&&
        // (filters.region=''||item._id.region===filters.region)&&
        // (filters.source=''||item._id.source===filters.source)&&
        // (filters.pest=''||item._id.pest===filters.pest)&&
        // (filters.endYear=''||item._id.end_year===filters.endYear)&&
        (filters.country===''||item._id.country===filters.country)
      );
    });
   
  };
  const filtersdata=filteredData();
    return(
        <>

        <div className="mb-8 mt-8 ml-4 mr-4 justify-between flex">
            <div className="hover:cursor-pointer mb-1 mt-1 ml-8 mr-8">
                
            <Typography  variant="h2" fontWeight="bold"  >COFFEE</Typography>
            <Typography  color={colors.grey[200]} fontWeight="bold" >WELCOME TO THE DASHBOARD</Typography>
            
            </div>
            <div className="flex mt-5 mb-5 items-center" >
               <Typography fontWeight="bold" fontSize="20px">
                Filter:
               </Typography>
               <IconButton sx={{m:"20px 5px 25px 0px"}} onClick={()=>setIsCollapsed(false)}>
                <SortOutlinedIcon/>
               </IconButton>
            </div>
            
        </div>
        <div className="justify-between ml-10 mr-10 space-x-1">
        <BarChart />
        <LineChart/>
        <PieChart/>
        <RadarChart/>
        </div>
        
        
        </>
    )
    
}