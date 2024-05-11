import { Resend } from "resend";
import { SpeckEmailTemplate } from "../components/email";
import { NextResponse } from "next/server";
import fs from "fs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    let formData: any;
    let attachments: any = [];

    if(req.method === 'POST') {
        const body = await req.text();
        formData = JSON.parse(body);
        
        attachments = formData.files.map((file64: any, index: any) => {
            console.log("file64: ", file64);
            let matches = file64.content.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let buffer = Buffer.from(matches[2], 'base64');
            let filename = `${file64.name}`;
            return {
                filename: filename,
                content: buffer
            };
        });
    }
    
    let res = await resend.emails.send({
        from: 'Speck <onboarding@resend.dev>',
        to: 'tivanovic21@student.foi.hr',
        subject: 'Speck Contact Form',
        react: SpeckEmailTemplate({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            company: formData.company,
            heardAbout: formData.howDidYouHearAboutUs,
            challenge: formData.challenge,
            budget: formData.budget,
            scope: formData.scope,
            files: []
        }),
        text: 'You have successfully submitted the contact form. We will get back to you as soon as possible!',
        attachments: attachments
    })

    if(res.error) {
        return NextResponse.json({
            error: res.error
        }, {
            status: 500
        })
    }
    
    return NextResponse.json({
        message: 'Ok'
    }, {
        status: 200
    })
}