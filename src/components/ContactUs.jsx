import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="my-8 text-center">
                <h2 className="text-xl font-semibold text-secondary mb-2">Contact Us</h2>
                <p>Email: <a href="mailto:support@artifactatlas.com" className="text-primary underline">support@artifactatlas.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="text-primary underline">+1 (234) 567-890</a></p>
                <p>Location: 123 History Lane, Antiquity City, Culture Country</p>
            </div>
        </div>
    );
};

export default ContactUs;