# Speck - Contact Form and Blog pages

This is a Frontend project done for [Speck](https://speck.agency/) created with NextJS, Resend API, React and Tailwind CSS.

## Getting Started

To run development server follow the instructions:

```bash
npm run dev
# or
yarn dev
# or
npm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

(Email sending will not work due to the API key being private.)


## More about the project

The goal of the project was to create a functional Contact Form based on the design provided in Figma.<br>
To communicate with the API the project is using NextJS and for sending email it is using Resend API which allows it to effortlessly send emails with attachments (not functional without API key).<br>
In the frontend, the project is using React library for components which make up the design, as well as Tailwind CSS for styling.


## Navigate through the project

Main page of the project is the contact form page. To access it either press the Speck logo, "get in touch" button or go to [http://localhost:3000](http://localhost:3000) <br>
The blog page is available through the navigation links by pressing the "blog" button, or by going to [http://localhost:3000/blog](http://localhost:3000/blog)


## Add Email sending functionality

For this functionality to work you need to obtain an API key from [Resend](https://resend.com/) and create a .env.local file within the root of the project.
In the .env.local file you need to declare the resend API key like this:

```bash
RESEND_API_KEY=key
```

To use the functionality, restart the server.
