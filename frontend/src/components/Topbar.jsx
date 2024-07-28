

import { Box,IconButton,useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext,shades } from "../theme/theme";
import InputBase from "@mui/material/InputBase"

//icons import from mui
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar(){
    const theme = useTheme();
    const colors = shades(theme.palette.mode);
    const colorMode= useContext(ColorModeContext);

    return(
        <Box display={"flex"} justifyContent={"space-between"} p={2}>
     {/** search bar */}
     <Box  display="flex" backgroundColor={colors.primary[400]}
     borderRadius="7px">
        <InputBase sx={{ml:2, flex:1}} placeholder="search" />
           <IconButton>
                <SearchIcon/>
            </IconButton>
     </Box>

      <Box display="flex">
     {/**other icons */}
     <IconButton onClick={colorMode.ToggleColorMode}>
    {theme.palette.mode==='dark'?(
        <DarkModeOutlinedIcon/>
    ):(
        <LightModeOutlinedIcon/>
    )}
     </IconButton>
     <IconButton>
        <NotificationsOutlinedIcon/>
     </IconButton>
     <IconButton>
        <SettingsOutlinedIcon/>
     </IconButton>
     <IconButton>
        <PersonOutlinedIcon/>
     </IconButton>
     </Box>
        </Box>
    )
     }