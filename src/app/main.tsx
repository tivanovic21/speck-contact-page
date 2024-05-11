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
                reader.onload = () => res(reader.result);
                reader.onerror = err => rej(err);
                reader.readAsDataURL(file);
            })
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

        console.log("data: ", data);

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
        <main>
            <div>
                <div style={{ color: "black", fontSize: "180px", fontFamily:"Heywow", position: "absolute", top: "100px", left: "75px", opacity: 0.03, pointerEvents: 'none' }}>
                    Let's Collaborate
                </div>
                <h1 style={{ color: "black", fontFamily: 'HeyWow', fontSize: '66px' }}>
                    Let's Collaborate<span style={{ color: "red", fontFamily: "Heywow", fontSize: '66px' }}>.</span>
                </h1>
            </div>
            <div className="form-container flex justify-center" style={{fontWeight: 'normal', fontSize: '18px'}}>
                <form className="grid grid-cols-2 gap-10" ref={formRef} onSubmit={handleSubmit}>
                    <input ref={firstNameRef} type="text" className="mt-5" placeholder="First Name *" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent'}} required />
                    <input ref={lastNameRef} type="text" className="mt-5" placeholder="Last Name *" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent'}} required />
                    <input ref={emailRef} type="email" className="mt-5" placeholder="Email Address *" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent'}} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <input ref={phoneNumberRef} type="text" className="mt-5" placeholder="Phone Number *" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent'}} required />
                    <input ref={companyRef} type="text" className="mt-5" placeholder="Company *" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent'}} required />

                    <select ref={howDidYouHearAboutUsRef} className="mt-5" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent'}} required>
                        <option value="">How did you hear about us?</option>
                        <option value="option1">Social media (Facebook, Instagram, LinkedIn)</option>
                        <option value="option2">Word of mouth</option>
                        <option value="option3">Google</option>
                        <option value="option4">Other</option>
                    </select>

                    <select ref={challengeRef} className="mt-5 col-span-2 w-100" style={{border: 'none', borderBottom: '1px dotted black', background: 'transparent' }} required>
                        <option value="">What challenge are you trying to solve?</option>
                        <option value="challenge1">Creating a new digital product</option>
                        <option value="challenge2">Scaling my business</option>
                        <option value="challenge3">Stepping into digital transformation</option>
                        <option value="challenge4">Auditing and optimizing my infrastructure process</option>
                        <option value="challenge5">Building a team of experts</option>
                        <option value="challenge6">Other</option>
                    </select>

                    <div className="mt-5 col-span-2">
                        <span>What is your budget?</span><br />
                        <div className="flex justify-between">
                            <button type="button" style={{border: '1px solid gray', borderRadius: '50px', backgroundColor: selectedBudget ==='upto50k' ? 'red' : "transparent", color: selectedBudget === 'upto50k' ? 'white' : 'black', width: '50%', padding: '5px', marginRight: '10px'}} onClick={() => setSelectedBudget('upto50k')}>Up to 50.000 eur</button>
                            <button type="button" style={{border: '1px solid gray', borderRadius: '50px', backgroundColor: selectedBudget ==='50k-100k' ? 'red' : "transparent",  color: selectedBudget === '50k-100k' ? 'white' : 'black', width: '50%', padding: '5px', marginRight: '10px'}} onClick={() => setSelectedBudget('50k-100k')}>50.000 eur - 100.000 eur</button>
                            <button type="button" style={{border: '1px solid gray', borderRadius: '50px', backgroundColor: selectedBudget ==='100k-250k' ? 'red' : "transparent",  color: selectedBudget === '100k-250k' ? 'white' : 'black', width: '50%', padding: '5px', marginRight: '10px'}} onClick={() => setSelectedBudget('100k-250k')}>100.000 eur - 250.000 eur</button>
                            <button type="button" style={{border: '1px solid gray', borderRadius: '50px', backgroundColor: selectedBudget ==='over250k' ? 'red' : "transparent", color: selectedBudget === 'over250k' ? 'white' : 'black', width: '50%', padding: '5px', marginRight: '10px'}} onClick={() => setSelectedBudget('over250k')}>Over 250.000 eur</button>
                            <button type="button" style={{border: '1px solid gray', borderRadius: '50px', backgroundColor: selectedBudget ==='notsure' ? 'red' : "transparent", color: selectedBudget === 'notsure' ? 'white' : 'black', width: '50%', padding: '5px', marginRight: '10px'}} onClick={() => setSelectedBudget('notsure')}>Not sure yet</button>
                        </div>
                    </div>

                    <textarea ref={scopeRef} placeholder="Tell us more about your scope*" className="col-span-2 w-100 mt-10 h-30" style={{borderBottom: '1px dotted black', background: 'transparent', resize: 'none'}} required />


                    <div id="fileInput" className="mt-5 flex justify-center col-span-2 p-10 text-center" style={{border: '1px dotted gray', borderRadius: '20px'}} onClick={handleFileInputClick}>
                        <label htmlFor="fileInput" className="flex align-center">
                            <img alt="attachment icon" src="attachment icon.svg" width="23" height="25" className="mr-5" />
                            <span style={{ color: '#CBD3D6' }}>Feel free to attach any additional documents!</span>
                        </label>
                        <input type="file" id="fileInput" ref={fileInput} style={{ display: 'none' }} onChange={handleFileChange} multiple/>
                    </div>

                    <div id="files" style={{gridColumn: 1}}>
                        {files.length > 0 && <p className="text-lg text-black font-bold">Selected Files:</p>}   
                        {files.map((file, index) => (
                            <div key={index} className="ml-5">
                                <span style={{ color: 'red', marginRight: '10px' }}>•</span>
                                <p className="text-xs text-black font-semibold" style={{ display: 'inline' }}>
                                    {file.name} - {Math.round(file.size / 1024)} KB
                                </p>
                                <button className="text-xs font-semibold" style={{marginLeft: 5, color: 'red'}} onClick={() => {
                                    event?.preventDefault();
                                    setFiles(prevFiles => prevFiles.filter((_, fileIndex) => fileIndex !== index));
                                }}>x</button>
                            </div>
                        ))}
                    </div>

                    <div style={{gridColumn: '1 / span 2'}}>
                        <div>
                            <input ref={tos1Ref} type="checkbox" id="tos1" style={{borderRadius: '4px'}} required />
                            <label htmlFor="tos1" className="ml-5" style={{fontSize: '12px'}}>Stay up to date with the latest software development and design trends brought to you by Speck experts</label>
                        </div>
                        <div>
                            <input ref={tos2Ref} type="checkbox" id="tos2" style={{borderRadius: '4px'}} required />
                            <label htmlFor="tos2" className="ml-5" style={{fontSize: '12px'}}>I agree to the Privacy Policy</label>
                        </div>
                    </div>
                    <br />
                    <button style={{gridColumn: 1}} className="bg-red-500 text-white px-4 py-2 rounded-full w-2/5" type="submit">Send &rarr;</button>
                </form>
            </div>
        </main>
    );
};

export default MainContent;