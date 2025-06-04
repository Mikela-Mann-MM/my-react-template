import { redirect } from 'react-router';
import { z } from 'zod/v4';

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"), //optional() metode, hvis optional
    email: z.email("Invalid email address"),
    message: z.string().min(1, "Message is required")
})


export async function handleSubmit({ request }) {
    
    const formData = await request.fromData(); // Get form data from the request
    const data = Object.fromEntries(formData.entries()); // Convert to object
    console.log("Form submitted:", data); // Log the data to console (or handle it as needed)


    const result = contactSchema.safeParse(data); // Validate the data using zod schema
    
    
    if (!result.success) {
        const errors = z.treeifyError(result.error); // Prettify errors for better readability
        console.log(errors); // Log the errors to console
        return errors.properties
    } 

    const response = await fetch('http://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result.data)
     })

        if(!responese.ok) {
            throw new Error("Could not save data")
        }

        console.log("Data was sent successfully!");
        redirect('/'); // Redirect to home page or thank you page

}
