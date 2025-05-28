import { Form, useActionData } from 'react-router';




    /* const contactSchema = z.object({
        name: z.string().min(2, "Name is required"), //optional() metode, hvis optional
        email: z.email("Invalid email address"),
        message: z.string().min(1, "Message is required")
    }) */

 export default function Contact(){
        const errors = useActionData(); // Get action data from the router
       

    return (
        <>
        <h1>Contact</h1>
    
        <Form method="post"> 
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" required />
                <p>{errors && errors?.name?.errors[0]}</p>
                </div> 
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />
                
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" placeholder="Message" ></textarea>  
                <p>{errors && errors?.message?.errors[0]}</p>
                </div>
                <button type="submit">Submit</button>
</Form>
        </>   
    )}