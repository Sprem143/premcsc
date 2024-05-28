const express= require('express')
const app = express();
const port=8050;
const cors= require('cors');
const bodyParser= require('body-parser')
const stripe = require('stripe')('sk_test_51PKx8gSGTUV9SS602VQw6oSRdLJjltyu34BSWhbEJKw8iCsxxMeBsGlv18eRebjfzpTtmiGIvajZRnrWEzC8v7ak00FFKW3zky')

app.use(cors())
app.use(express.json())

app.post('/api/create-checkout-session', async(req,res)=>{
    const {product}= req.body

    // --------in case of array of products

    const lineItems= product.map((p)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:p.name
            },
            unit_amount:p.price*100
        },
        quantity:p.quantity
    }))
console.log(product)
    const session= await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:lineItems,
        // line_items:product,
        mode:'payment',
        success_url:"http://localhost:8050/success",
        cancel_url:'http://localhost:8050/cancel'
    })
    res.json({id:session.id})
})


app.listen(port, (err)=>{
    if(err){console.log("error while starting server")}
    console.log(`server is live on port ${port}`)
})
