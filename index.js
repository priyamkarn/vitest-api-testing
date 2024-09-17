const express=require('express')
const app=express();
app.get('/todos/1', (req, res) => {
    res.status(200).json({
      userId: 1,
      id: 1,
      title: 'Sample Todo',
      completed: false,
    });
  });
app.listen(3000,()=>
    {
        console.log("connected")
    })
    export default app