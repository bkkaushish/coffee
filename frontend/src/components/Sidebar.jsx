import { useState } from "react"
import { Sidebar,MenuItem ,Menu, sidebarClasses} from "react-pro-sidebar"
import { Box,IconButton,Tooltip,Typography,useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { shades } from "../theme/theme"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


//for showing that menu is clicked 
const Item =({title,to,icon,selected,setSelected})=>{
const theme= useTheme();
const colors = shades(theme.palette.mode);
return(
  <Link to={to}>
    <MenuItem active={selected===title} style={{color:colors.grey[400]}}
    onClick={()=>setSelected(title)}
    icon={icon}>
    <Typography >{title}</Typography>
    
    </MenuItem>
    </Link>
);
};

export default function Sidebars(){
    const theme= useTheme();
    const colors = shades(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected,setSelected]=useState("Dashboard");
    
return !isCollapsed?(
    <Box>
    <Sidebar collapsed={isCollapsed} width="270px"
     backgroundColor={colors.primary[400]}
    
     rootStyles={{
      
      [`.${sidebarClasses.container}`]: {
       display:"flex",
       position:'relative',
       height:"120vh",  
      },
      
      
    }} >
        <Menu IconShape="square" 
        menuItemStyles={{
          button:{
           '&:hover ': {
            backgroundColor:theme.palette.mode==='dark' ?"#1F2A40": undefined,
           }
          }
        }}>
            {/**menu icon and logo */}
            <MenuItem 
            
            onClick={()=>setIsCollapsed(!isCollapsed)}
            icon={isCollapsed? <MenuOutlinedIcon/> : undefined}
            style={{
                margin:"10px 0 20px 0",
                color:colors.grey[400],
               
            }}
            
            
            >
                {!isCollapsed && (
                    <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px">
                      
                      <img src="./c.jpg" width="50px" className="rounded-full"/>
                        <Typography variant="h6" color={colors.grey[100]} ml="4px" fontFamily="cursive" >
                  CAFFEE
                </Typography>
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  
                  <MenuOutlinedIcon />
                  
                </IconButton>
                    </Box>
                )}
            </MenuItem>

            {/**menu items */}
            
            <Box paddingLeft={isCollapsed ? undefined: "10%"}>
            
           <Item
           title="DashBoard"
           to="/"
           icon={<HomeOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           {/**data container */}
           <Typography
              variant="h7"
              color={colors.grey[300]}
              
              sx={{ m: "15px 0 5px 20px" }}
              
            >
              Data
            </Typography>

           <Item
           title="Team"
           to="/"
           icon={<PeopleOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           <Item
           title="Contacts Information"
           to="/"
           icon={<ContactsOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           <Item
           title="Saved"
           to="/"
           icon={<ReceiptOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />

               <Typography
              variant="h7"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

           <Item
           title="Profile Privacy"
           to="/"
           icon={<PersonOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           <Item
           title="Calendar"
           to="/"
           icon={<CalendarMonthOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />

           <Typography
              variant="h7"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

           <Item
           title="Pie Chart"
           to="/pie"
           icon={<PieChartOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           <Item
           title="Bar Chart"
           to='/bar'
           icon={<BarChartOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           <Item
           title="LIne Chart"
           to="/line"
           icon={<TimelineOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           <Item
           title="Radar Chart"
           to="/radar"
           icon={<MapOutlinedIcon/>}
           selected={selected}
           setSelected={setSelected} />
           
            </Box>
            
        </Menu>

    </Sidebar>
  </Box>
):(
  <Box>
  <Sidebar collapsed={isCollapsed} width="270px"
   backgroundColor={colors.primary[400]}
  
   rootStyles={{
    
    [`.${sidebarClasses.container}`]: {
     display:"flex",
     position:'relative',
     height:"100vh",  
    },
    
    
  }} >
      <Menu IconShape="square"
       menuItemStyles={{
        button:{
         '&:hover ': {
          backgroundColor:theme.palette.mode==='dark' ?"#1F2A40": undefined,
         }
        }
      }} >
          {/**menu icon and logo */}
          <MenuItem 
          onClick={()=>setIsCollapsed(!isCollapsed)}
          icon={isCollapsed? <MenuOutlinedIcon/> : undefined}
          style={{
              margin:"10px 0 20px 0",
              color:colors.grey[100],
          }}
          
          
          >
              {!isCollapsed && (
                  <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px">
                    
                    <img src="./c.jpg" width="50px" className="rounded-full"/>
                      <Typography variant="h6" color={colors.grey[100]} ml="4px" fontFamily="cursive" >
                CAFFEE
              </Typography>
              
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <Tooltip title="menu" placement="right">
                  <MenuOutlinedIcon />
                  </Tooltip>
              </IconButton>
                  </Box>
              )}
          </MenuItem>

          {/**menu items */}
          
          <Box paddingLeft={isCollapsed ? undefined: "10%"}>
          <Tooltip title="Home" placement="right">
         <Item
         to="/"
         icon={<HomeOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
         </Tooltip>
         {/**data container */}
        
         <Tooltip title="ManageTeam" placement="right">
         <Item
         
         to="/"
         icon={<PeopleOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
</Tooltip>
<Tooltip title="Contact" placement="right">
         <Item
         
         to="/"
         icon={<ContactsOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
</Tooltip>
<Tooltip title="Receipt" placement="right">
         <Item
         
         to="/"
         icon={<ReceiptOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />

            </Tooltip>
<Tooltip title="Profile" placement="right">
         <Item
        
         to="/"
         icon={<PersonOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
</Tooltip>

<Tooltip title="Calender" placement="right">
         <Item
        
         to="/"
         icon={<CalendarMonthOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />

</Tooltip>
<Tooltip title="PieChart" placement="right">

         <Item
         
         to="/"
         icon={<PieChartOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
         </Tooltip>

<Tooltip title="Barchart" placement="right">
         <Item
         to="/bar"
         icon={<BarChartOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
</Tooltip>
<Tooltip title="LineChart" placement="right">
         <Item
         
         to="/"
         icon={<TimelineOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
</Tooltip>
<Tooltip title="Map" placement="right">
         <Item
        
         to="/"
         icon={<MapOutlinedIcon/>}
         selected={selected}
         setSelected={setSelected} />
         </Tooltip>
          </Box>
          
      </Menu>

  </Sidebar>
</Box>
)
 }
