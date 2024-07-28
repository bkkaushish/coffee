import { ColorModeContext,useMode } from "./theme/theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebars from "./components/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css"
import { ContextProvider } from "./Global_Hook/ContextProvider";
import Filter from "./components/filter.jsx/Filter";


import MainR from "./Chart/Radar/mainR";
import MainP from "./Chart/pie/MainP";
import MainL from "./Chart/Line/MainL";
import MainB from "./Chart/Bar/MainB";


;

function App() {
  const [theme,colorMode]=useMode();
  
  return (
    <ContextProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="flex relative">
          <div style={{height:"100vh"}}>
        <Sidebars/>
        </div>
        <main className="h-full w-full font-sans">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/bar" element={<MainB/>}/>
        <Route path="/pie" element={<MainP/>}/>
        <Route path="/line" element={<MainL/>}/>
        <Route path="/radar" element={<MainR/>}/>
        
        
      </Routes>
    <Outlet/>
    </main>
    <Filter/>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </ContextProvider>
  );
}

export default App;