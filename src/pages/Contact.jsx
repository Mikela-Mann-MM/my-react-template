import { Form, redirect } from 'react-router';
import { z } from 'zod/v4';
import { useState } from 'react';


    const contactSchema = z.object({
        name: z.string().min(2, "Name is required"), //optional() metode, hvis optional
        email: z.email("Invalid email address"),
        message: z.string().min(1, "Message is required")
    })

    export default function Contact(){
        const [errors, setErrors] = useStae({});
    
    const handleSubmit = (event) => {                   
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.target); // Get form data
        const data = Object.fromEntries(formData.entries()); // Convert to object
        console.log("Form submitted:", data); // Log the data to console (or handle it as needed)

        const result = contactSchema.safeParse(data); // Validate the data using zod schema
        
        if (!result.success) {
            const errors = z.threeifyErrors(result.error); // Prettify errors for better readability
            console.log(errors); // Log the errors to console
            
        setErrors(errors.properties)
            console.log(errors.properties)// You can proceed with form submission or further processing here
        } else 

        setErrors({})
    }
        
        
        //fetch... method post

        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result.data)
        })

        redirect('/list'); // Redirect evt til takkeside
    }

    return (
        <>
        <h1>Contact</h1>
    
        <Form method="post" onSubmit={handleSubmit}> 
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