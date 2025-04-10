import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller function to manage clerk user with database
export const clerkWebhooks = async(req, res) => {
    try {
        
        // create a svix instace with clerk webhoo secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // verify headers
        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamps": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        // gettign data from request body
        const { data, type } = req.body

        // switch case for different events
        switch (type) {
            case 'user.created':{
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume: ''
                }
                await User.create(userData)
                res.json({})
                break
            }

            case 'user.updated':{
                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break
            }

            case 'user.deleted':{
                await User.findByIdAndDelete(data.id)
                res.json({})
                break
            }
        
            default:
                break;
        }
    } catch (error) {
        console.log(error.message)
        res.json({sucess: false, message: "Webhooks error"})
    }
}

