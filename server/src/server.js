const app = require('./app')

const port = process.env.PORT || 3000
const key = process.env.OPENAI_API_KEY 
app.listen(port, ()=>{
    
    console.log(`Server listening on port ${port}`)
    console.log(key)
}); 