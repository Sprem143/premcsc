const express= require('express')
const app = express();
const port=8050;
const cors= require('cors');
const bodyParser= require('body-parser')
const stripe = require('stripe')('sk_test_51PKx8gSGTUV9SS602VQw6oSRdLJjltyu34BSWhbEJKw8iCsxxMeBsGlv18eRebjfzpTtmiGIvajZRnrWEzC8v7ak00FFKW3zky')
const Razorpay= require('razorpay')
const crypto =require('crypto');
app.use(cors())
app.use(express.json())

// --------payment using strip-------
// app.post('/api/create-checkout-session', async(req,res)=>{
//     const {product}= req.body

//     // --------in case of array of products

//     const lineItems= product.map((p)=>({
//         price_data:{
//             currency:"inr",
//             product_data:{
//                 name:p.name
//             },
//             unit_amount:p.price*100
//         },
//         quantity:p.quantity
//     }))
// console.log(product)
//     const session= await stripe.checkout.sessions.create({
//         payment_method_types:['card'],
//         line_items:lineItems,
//         // line_items:product,
//         mode:'payment',
//         success_url:"http://localhost:8050/success",
//         cancel_url:'http://localhost:8050/cancel'
//     })
//     res.json({id:session.id})
// })


// --------payment using razorpay---------

var razorpayInstance = new Razorpay({
    key_id: 'rzp_test_hGuw7Ar8wHdLhs',
    key_secret: 'CyD0Hq5FDv7Xy05Ue85PZAer',
  });


app.post('/payment',(req,res)=>{
    const { amount } = req.body;
    try {
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        }
        
        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Something Went Wrong!" });
            }
            res.status(200).json({ data: order });
            console.log(order)
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }

});

app.post('/verifypayment',async(req,res)=>{

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    try{
        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        // Create ExpectedSign
        const expectedSign = crypto.createHmac("sha256", "CyD0Hq5FDv7Xy05Ue85PZAer")
            .update(sign.toString())
            .digest("hex");

        // console.log(razorpay_signature === expectedSign);

        // Create isAuthentic
        const isAuthentic = expectedSign === razorpay_signature;

        // Condition 
        if (isAuthentic) {
            // const payment = new Payment({
            //     razorpay_order_id,
            //     razorpay_payment_id,
            //     razorpay_signature
            // });

            // // Save Payment 
            // await payment.save();

            // Send Message 
            res.json({
                message: "Successful"
            });
        }
    }catch(err){
        res.status(500).json({ message: "fail" });
        console.log(err); 
    }

});

app.listen(port, (err)=>{
    if(err){console.log("error while starting server")}
    console.log(`server is live on port ${port}`)
})
