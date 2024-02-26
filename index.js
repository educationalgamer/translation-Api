const express = require('express');
const translator = require('translator-for-you');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    // Check if request body contains 'text' key
    try{
        
        const { text } = req.body;
        if(!text){
            return res.status(400).json({ error: 'Invalid request body'});
        }
      
            // Translates the text into French
            
            const translation = await translator(text, 'fr');
            if(!translation){
                return res.status(400).json({error:'Something bad happened'})
            }
            res.status(200).json({ translation });
    }catch(e){
        return res.status(400).json({ error: 'Invalid request body. Please provide JSON' });
    }
    
   
});

app.get('/test',async(req,res)=>{
    req.send("Ok server is running")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
