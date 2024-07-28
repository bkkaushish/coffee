import express from "express"
import mongosh from "mongoose"
import fs from 'fs'



const app = express();
const PORT=process.env.PORT||9000;
const jsonFile='./jsondata.json';

//schema
const dataSchema=new mongosh.Schema({
   
    end_year:{
     type: Number,
     require:true,
     undefined:false
 
    },
         intensity:{
            type: Number,
            require:true,
            undefined:false
        
           },
         sector:{ type: String,
            require:true,
            null:false
         },
         topic: { type: String,
            require:true,
            null:false
         },
         insight: String,
         url: String,
         region: { type: String,
            require:true,
            
         },
         start_year: Number,
         impact: String,
         added: String,
         published: String,
         country: { type: String,
            require:true,
           
         },
         relevance: {
            type: Number,
            require:true,
           
        
           },
         pestle:{ type: String,
            require:true,
            null:false
         },
         source: { type: String,
            require:true,
            null:false
         },
         title: { type: String,
            require:true,
            null:false
         },
         likelihood: {
            type: Number,
            require:true,
            undefined:false
        
           },
 })
const jsonData=mongosh.model("assign",dataSchema)
//mongo db...............
mongosh.connect('mongodb://127.0.0.1:27017/coffee')
.then(()=>{
    console.log("MongoDB connected!");
    const data=JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
     
  
try{
     jsonData.insertMany(data)
     

    
    console.log("all documents inserted ");
   

}
catch(err){
    console.log("Error inserting documents:", err);
}

})
.catch((e)=>console.log("MongoDB error"));




//mongo db...end#......

app.get("/api",async(req,res)=>{
//const mydata= await jsonData.find({}).limit(25)

   
    const mydata = await jsonData.aggregate([
      {
            $match:{
                                       end_year:{$ne:null},
                                        start_year:{$ne:null},
                                        intensity:{$ne:null},
                                        country:{$ne:""},
                                        topic:{$ne:""},
                                        sector:{$ne:""},
                                        region:{$ne:""},
                                        pestle:{$ne:""},
                                        source:{$ne:""}
                   }
      },
      {
         $group:{
            _id: {
               end_year: "$end_year",
               intensity: "$intensity",
               sector: "$sector",
               topic: "$topic",
               insight: "$insight",
               url: "$url",
               region: "$region",
               start_year: "$start_year",
               impact: "$impact",
               added: "$added",
               published: "$published",
               country: "$country",
               relevance: "$relevance",
               pestle: "$pestle",
               source: "$source",
               title: "$title",
               likelihood: "$likelihood",
             },
              documentId: { $first: "$_id" }
            },

      },    ]).sort({documentId:1}); 

   
     return res.json({mydata })
     
});

app.get('/api/filters', async (req, res) => {
   try {
      const query = {
         end_year: { $ne: null },
         start_year: { $ne: null },
         intensity: { $ne: null },
         country: { $ne: "" },
         topic: { $ne: "" },
         sector: { $ne: "" },
         region: { $ne: "" },
         pestle: { $ne: "" },
         source: { $ne: "" }
       };
       const distinctFields = ['end_year', 'topic', 'sector', 'region', 'pestle', 'source', 'country'];
    const distinctQueries = distinctFields.map(field => jsonData.distinct(field,query));


    

   const [endYear, topic, sector, region, pest, source, country] = await Promise.all(distinctQueries);
 
     res.json({ endYear,topic,country,pest,source,region,sector });
   } catch (error) {
     res.status(500).send(error);
   }
 });


 

app.listen(PORT,()=>console.log("server started at PORT: "+ PORT));