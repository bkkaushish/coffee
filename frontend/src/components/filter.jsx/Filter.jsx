import { useContext, useEffect, useState } from "react"
import { Sidebar,MenuItem ,Menu, sidebarClasses} from "react-pro-sidebar"
import {  Box,FormControl,IconButton,InputLabel,Select,Typography,useTheme } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { shades } from "../../theme/theme";
import { UseContext } from "../../Global_Hook/UseContext";
import axios from "axios";


export default function Filter(){ 
    const theme= useTheme();
    const colors = shades(theme.palette.mode);
    const {isCollapsed,setIsCollapsed,filters,setFilters,data}=useContext(UseContext);
     const [options,setOption]=useState([]);
   
     // Update filter state
    const handleFilterChanges =(event,key) => {
    
      // setFilters({...filters , [key]:event.target.value})
      const value = event.target.value;
  console.log('Event:', event);
  console.log('Key:', key);
  console.log('Value:', value);
  setFilters(prevFilters => ({
    ...prevFilters,
    [key]: value !== false ? value : ''
  }));
    

    };
    useEffect(() => {
      console.log('Filters:', filters);
    }, [filters]);
    // const handleFilterChangess = (event) => {
    //   setFilters({sectors:event.target.value})
    // };
    // const handleFilterChange = (event) => {
    //   setFilters({endYears:event.target.value})
    // };
    // const handleFilter = (event) => {
    //   setFilters({regions:event.target.value})
    // };
    // const handleFilters = (event) => {
    //   setFilters({pests:event.target.value})
    // };
    // const handleFilterss = (event) => {
    //   setFilters({sources:event.target.value})
    // };
    // const handle = (event) => {
    //   setFilters({countries:event.target.value})
    // };

    const uniqueValue=(key)=>[...new Set(data.map(item=>item._id[key]).filter(Boolean))]; //unique values
    //because of set we get unique values of filters,
    // key used for each filter,
    // filter(Bollean ) used to ensures that the value should not be (undefined, null, false, 0, NaN, '', etc.)) 

    
    // useEffect(()=>{
    //   axios.get("/api/filters")
    //   .then(response=>{setOption(response.data)
        
    //   console.log(response.data)})
    //   .catch((e)=>console.log(e))
    // })
    
   // console.log(options)
return !isCollapsed?(
    <Box>
    <Sidebar collapsed={isCollapsed} width="270px"
     backgroundColor={colors.primary[400]}
    
     rootStyles={{
      
      [`.${sidebarClasses.container}`]: {
       display:"flex",
       position:'fixed',
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
        }}>
            {/**menu icon and logo */}
           
            
             {!isCollapsed && (
                    <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mr="50px"
                   
                    ml="15px"
                    mt="15px">
                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)} sx={{mr:"50px"}}>
                  
                  <CloseRoundedIcon />
                  
                </IconButton>
                     
                        <Typography variant="h6" color={colors.grey[100]} mr="60px" fontFamily="cursive" >
                  SORT :
                </Typography>
                
                    </Box>
                )}
            

            {/**menu items */}
            
            <Box paddingLeft={isCollapsed ? undefined: "10%"}>
                <Box>
                    
                       
          <Typography variant="h6" mt="10px" mb="10px">
            Topic :
          </Typography>

          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
 
value={filters.topic}
 label="Topic"
   onChange={(e)=> handleFilterChanges(e,"topic")}
 >
 <MenuItem value=""><em>none</em></MenuItem>
  {uniqueValue('topic').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>

           </Box>

           <Box>
           <Typography variant="h6" mt="10px" mb="10px">
          Sector :
          </Typography>

          
          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
value={filters.sector}
 label="sector"
   onChange={(e)=>handleFilterChanges(e,"sector")}
 >
 <MenuItem value="" ><em>none</em></MenuItem>
  {uniqueValue('sector').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>   
           </Box>


           <Box>
          <Typography variant="h6" mt="10px" mb="10px">
            Year :
          </Typography>
          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
value={filters.endYear}
 label="endYear"
   onChange={(e)=>handleFilterChanges(e,"endYear")}
 >
 <MenuItem value="" ><em>none</em></MenuItem>
  {uniqueValue('end_year').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>
           </Box>

           <Box>
          <Typography variant="h6" mt="10px" mb="10px">
            Region :
          </Typography>
          
          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
value={filters.region}
 label="region"
   onChange={(e)=>handleFilterChanges(e,"region")}
 >
 <MenuItem value="" ><em>none</em></MenuItem>
  {uniqueValue('region').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>
           </Box>
           <Box>
          <Typography variant="h6" mt="10px" mb="10px">
            Pest :
          </Typography>
          
          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
value={filters.pest}
 label="pest"
   onChange={(e)=>handleFilterChanges(e,"pest")}
 >
 <MenuItem value="" ><em>none</em></MenuItem>
  {uniqueValue('pestle').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>
           </Box>
           <Box>
          <Typography variant="h6" mt="10px" mb="10px">
            Source :
          </Typography>
          
          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
value={filters.source}
 label="topic"
   onChange={(e)=>handleFilterChanges(e,"source")}
 >
 <MenuItem value="" ><em>none</em></MenuItem>
  {uniqueValue('source').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>
           </Box>
           <Box>
          <Typography variant="h6" mt="10px" mb="10px">
            Country :
          </Typography>
          
          <FormControl fullWidth variant="outlined">
 {/* <InputLabel id="demo-simple-select-label"> sector:</InputLabel> */}
 <Select
value={filters.country}
 label="country"
   onChange={(e)=>handleFilterChanges(e,"country")}
 >
 <MenuItem value="" ><em>none</em></MenuItem>
  {uniqueValue('country').map((items)=>(
   <MenuItem value={items} key={items}>{items}</MenuItem>
 
  ))}
 </Select>
</FormControl>
 
    
           </Box>
            </Box>
            
        </Menu>

    </Sidebar>
  </Box>
):(
  undefined
)
 }
