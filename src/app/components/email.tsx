import React from "react";

interface SpeckEmailProps {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    company: string,
    heardAbout: string,
    challenge: string,
    budget: string,
    scope: string,
    files: any[],
}

export const SpeckEmailTemplate: React.FC<SpeckEmailProps> = ({
    firstName, lastName, email, phoneNumber, company, heardAbout, challenge, budget, scope, files,
}) => (
    <div>
        <h1>Speck Contact Form</h1>
        <p>Hi {firstName},</p>
        <p>
            You have successfully submitted the contact form. We will get back to you as soon as possible!
        </p>
        <p>
            Here is the information you provided:<br/>
            firstName: {firstName}<br/>
            lastName: {lastName}<br/>
            email: {email}<br/>
            phone: {phoneNumber}<br/>
            company: {company}<br/>
            heardAbout: {heardAbout}<br/>
            challenge: {challenge}<br/>
            budget: {budget}<br/>
            scope: {scope}<br/>
        </p>
    </div>
);