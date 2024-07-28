import { Typography, useTheme } from "@mui/material";
import { shades } from "../../theme/theme";

import BarChart from "./BarChart";


export default function MainB(){
    const theme=useTheme();
const colors=shades(theme.palette.mode);
    return(
        <>
        <div className="mb-8 mt-8 ml-4 mr-4 justify-between  ">
        <div className="hover:cursor-pointer mb-1 mt-1 ml-8 mr-8 justify-between">
            
        <Typography  variant="h2" fontWeight="bold"  >Bar Chart</Typography>
        <Typography  color={colors.grey[200]} fontWeight="bold" >WELCOME TO THE BAR CHARTS</Typography>
        
        </div>
        <div>
        <BarChart/>
        </div>
        </div>
         
         </>
    )
}