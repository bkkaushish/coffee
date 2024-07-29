import { useEffect, useState } from "react";
import { UseContext } from "./UseContext";
import axios from "axios"

export const ContextProvider=({children})=>{
    const [data,setData]=useState([]);
    const [filters, setFilters] = useState({
        endYear:'',
        topic:'',
        sector:'',
        region:'',
        pest:'',
        source:'',
        country:'',
        insight:''
      });
 

   const [isCollapsed,setIsCollapsed]=useState(true);


     

    useEffect(()=>{
    axios.get("/api")
    .then((response)=>{
       
        setData(response.data.mydata)})
    .catch((e)=>console.log("error to fetch"))
      
    }) 


    return(
        <UseContext.Provider value={{data,setData,isCollapsed,setIsCollapsed,filters,setFilters,
        }}>
            {children}
            </UseContext.Provider>
    )

}