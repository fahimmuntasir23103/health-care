import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';



const Contact = () => {
    return (
        <div className="container m-5">

            <h2 className=" text-center p-5">Please Contact Us</h2>
            <p>Dental Care is an essential part of your health, and untreated oral issues can load to symptoms,such as pain, infections or loss of teeth. Even if you are someone who takes preventative measures and regularly gets you teeth checked you should make sure that your denstist is a good one.Many people dread a visit to the dentist, but when the find one the like, the often become committed to them for for life.</p>

            <InputGroup className="mb-3">

                <FormControl aria-label="First name" placeholder="Enter Your First Name" />
                <FormControl aria-label="Last name" placeholder="Enter Your Last Name" />
                <FormControl aria-label="Messege" placeholder="Enter Your Email" />
                <Button variant="outline-secondary" id="button-addon2">Submit</Button>
            </InputGroup>


        </div>
    );
};


export default Contact;