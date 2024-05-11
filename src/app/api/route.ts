import { Resend } from "resend";
import { SpeckEmailTemplate } from "../components/email";
import { NextResponse } from "next/server";
import fs from "fs";

const resend = new Resend('re_GwGS4pjT_4AeotbtQYFDbHEAUJLZR3KYv');

export async function POST(req: Request) {
    // TO DO: access request.body to get form data
    let formData: any;
    let attachments: any = [];

    if(req.method === 'POST') {
        const body = await req.text();
        formData = JSON.parse(body);
        formData.files.forEach((file64: any, index: any) => {
            let base64 = file64.split(';base64,').pop();
            fs.writeFileSync(`file${index}.png`, base64, {encoding: 'base64'})
        })

        attachments = formData.files.map((file64: any, index: any) => {
            let matches = file64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let buffer = Buffer.from(matches[2], 'base64');
            let imageType = matches[1].split('/')[1];
            let filename = `file${index}.${imageType}`;
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

    console.log(res)

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