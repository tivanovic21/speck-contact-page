"use client";
import React, {useState, useRef} from "react";
import "./globals.css";

const MainContent = () => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

    const handleFileInputClick = () => {
        if(fileInput.current){
            fileInput.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0){
            const newFiles = Array.from(event.target.files);
            setFiles(prevFiles => [...prevFiles, ...newFiles]);
        }
    };

    const formRef = useRef<HTMLFormElement>(null);
    const tos1Ref = useRef<HTMLInputElement>(null);
    const tos2Ref = useRef<HTMLInputElement>(null);

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const howDidYouHearAboutUsRef = useRef<HTMLSelectElement>(null);
    const challengeRef = useRef<HTMLSelectElement>(null);
    const budgetRef = useRef<HTMLSelectElement>(null);
    const scopeRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!tos1Ref.current?.checked || !tos2Ref.current?.checked){
            alert("Please agree to the terms of service!");
            return;
        };

        let filesBase64 = await Promise.all(files.map(async file => {
            return new Promise((res, rej) => {
                const reader = new FileReader();
                reader.onload = () => res({content: reader.result, name: file.name});
                reader.onerror = err => rej(err);
                reader.readAsDataURL(file);
            });
        }))

        let data = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            phoneNumber: phoneNumberRef.current?.value,
            company: companyRef.current?.value,
            howDidYouHearAboutUs: howDidYouHearAboutUsRef.current?.value,
            challenge: challengeRef.current?.value,
            budget: selectedBudget,
            scope: scopeRef.current?.value,
            files: filesBase64
        };

        await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(res.status === 200){
                alert("Your form has been submitted successfully!");
                formRef.current?.reset();
                setFiles([]);
            } else {
                alert("An error occurred while submitting the form. Please try again later.");
            }
        
        });
    };

    return (
        <main className="p-24 min-h-screen">
            <div className="flex flex-row flex-wrap">
                <div style={{fontSize: '180px', top: 100, left: 75, overflowWrap: 'anywhere', opacity: '0.03'}} className=" text-black font-heywow font-bold absolute pointer-events-none">
                    <p>Let's Collaborate</p>
                </div>
                <h1 className="text black font-heywow font-bold md:text-7xl text-5xl break-words">
                    Let's Collaborate<span className="text-speck-red font-heywow font-bold md:text-7xl text-5xl">.</span>
                </h1> 
            </div>
            <div className="flex justify-center items-center md:h-screen md:pt-44 md:pb-16 py-8">
                <div className="font-poppins text-base font-normal">
                    <form className="grid gap-y-10 grid-cols-2 gap-x-10 w-full" ref={formRef} onSubmit={handleSubmit}>
                        <input ref={firstNameRef} type="text" className="mt-5 placeholder-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent" placeholder="First Name *" required />
                        <input ref={lastNameRef} type="text" className="mt-5 placeholder-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent" placeholder="Last Name *" required />
                        <input ref={emailRef} type="email" className="mt-5 placeholder-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent" placeholder="Email Address *" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        <input ref={phoneNumberRef} type="text" className="mt-5 placeholder-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent" placeholder="Phone Number *" required />
                        <input ref={companyRef} type="text" className="mt-5 placeholder-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent" placeholder="Company *" required />

                        <select ref={howDidYouHearAboutUsRef} defaultValue="" className="mt-5 text-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent" required>
                            <option value="" disabled className="text-speck-ligt-siva">How did you hear about us?</option>
                            <option value="option1" className="hover:text-speck-red">Social media (Facebook, Instagram, LinkedIn)</option>
                            <option value="option2" className="hover:text-speck-red">Word of mouth</option>
                            <option value="option3" className="hover:text-speck-red">Google</option>
                            <option value="option4" className="hover:text-speck-red">Other</option>
                        </select>

                        <select ref={challengeRef} defaultValue="" className="mt-5 text-speck-ligt-siva border-b-2 border-dotted border-speck-ligt-siva bg-transparent col-span-2" required>
                            <option value="" disabled className="text-speck-light-siva">What challenge are you trying to solve?</option>
                            <option value="challenge1" className="hover:text-speck-red">Creating a new digital product</option>
                            <option value="challenge2" className="hover:text-speck-red">Scaling my business</option>
                            <option value="challenge3" className="hover:text-speck-red">Stepping into digital transformation</option>
                            <option value="challenge4" className="hover:text-speck-red">Auditing and optimizing my infrastructure process</option>
                            <option value="challenge5" className="hover:text-speck-red">Building a team of experts</option>
                            <option value="challenge6" className="hover:text-speck-red">Other</option>
                        </select>

                        <div className="mt-5 md:col-span-2">
                            <span>What is your budget?*</span><br />
                            <div className="flex flex-wrap md:w-full lg:justify-between items-center min-w-fit mt-3">
                                <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full bg-${selectedBudget === 'upto50k' ? 'speck-red' : 'transparent'} text-${selectedBudget === 'upto50k' ? 'white' : 'black'} font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`} onClick={() => setSelectedBudget('upto50k')}>Up to 50.000 eur</button>
                                <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full bg-${selectedBudget === '50k-100k' ? 'speck-red' : 'transparent'} text-${selectedBudget === '50k-100k' ? 'white' : 'black'} font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`} onClick={() => setSelectedBudget('50k-100k')}>50.000 eur - 100.000 eur</button>
                                <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full bg-${selectedBudget === '100k-250k' ? 'speck-red' : 'transparent'} text-${selectedBudget === '100k-250k' ? 'white' : 'black'} font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`} onClick={() => setSelectedBudget('100k-250k')}>100.000 eur - 250.000 eur</button>
                                <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full bg-${selectedBudget === 'over250k' ? 'speck-red' : 'transparent'} text-${selectedBudget === 'over250k' ? 'white' : 'black'} font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`} onClick={() => setSelectedBudget('over250k')}>Over 250.000 eur</button>
                                <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full bg-${selectedBudget === 'notsure' ? 'speck-red' : 'transparent'} text-${selectedBudget === 'notsure' ? 'white' : 'black'} font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`} onClick={() => setSelectedBudget('notsure')}>Not sure yet</button>
                            </div>
                        </div>

                        <textarea ref={scopeRef} placeholder="Tell us more about your scope*" className="col-span-2 placeholder-speck-ligt-siva w-100 mt-10 h-8 border-b-2 border-dotted border-speck-ligt-siva bg-transparent resize-none" required />


                        <div id="fileInput" className="mt-5 flex justify-center col-span-2 p-10 text-center border-2 border-dotted border-speck-ligt-siva rounded-3xl" onClick={handleFileInputClick}>
                            <label htmlFor="fileInput" className="flex align-center">
                                <img alt="attachment icon" src="attachment icon.svg" width="23" height="25" className="mr-5" />
                                <span style={{ color: '#CBD3D6' }}>Feel free to attach any additional documents!</span>
                            </label>
                            <input type="file" id="fileInput" ref={fileInput} className="hidden" onChange={handleFileChange} multiple/>
                        </div>

                        <div id="files" className="col-start-1">
                            {files.length > 0 && <p className="text-lg text-black font-bold">Selected Files:</p>}   
                            {files.map((file, index) => (
                                <div key={index} className="ml-5 flex items-center">
                                    <span className="text-speck-red mr-3">•</span>
                                    <p className="text-xs text-black font-semibold inline">
                                        {file.name} - {Math.round(file.size / 1024)} KB
                                    </p>
                                    <button className="text-xs font-semibold ml-2 text-speck-red" onClick={() => {
                                        event?.preventDefault();
                                        setFiles(prevFiles => prevFiles.filter((_, fileIndex) => fileIndex !== index));
                                    }}>x</button>
                                </div>
                            ))}
                        </div>

                        <div className="col-start-1 col-span-2">
                            <div>
                                <input ref={tos1Ref} type="checkbox" id="tos1" className="rounded-md" required />
                                <label htmlFor="tos1" className="ml-5 text-sm">Stay up to date with the latest software development and design trends brought to you by Speck experts</label>
                            </div>
                            <div>
                                <input ref={tos2Ref} type="checkbox" id="tos2" className="rounded-md" required />
                                <label htmlFor="tos2" className="ml-5 text-sm">I agree to the <span className="text-speck-red">Privacy</span> Policy</label>
                            </div>
                        </div>
                        <br />
                        <button className="text-white bg-speck-red font-bold font-heywow rounded-full px-4 py-2 text-center items-center w-40 h-14 col-start-1" type="submit">Send &rarr;</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default MainContent;