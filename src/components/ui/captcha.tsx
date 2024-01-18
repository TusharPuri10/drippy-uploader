import React from 'react';
import { useEffect, useState } from 'react';
import { captchaState } from '@/app/recoilContextProvider';
import { useRecoilState } from 'recoil';

const CaptchaComponent: React.FC = () => {
    const [isCaptchaVerified, setCaptchaVerified] = useRecoilState(captchaState);

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
            console.log("loaded");
            window.grecaptcha.ready(() => {
                window.grecaptcha.render('recaptcha', {
                    sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                    callback: () => {
                        // This function will be called when the user successfully completes the reCAPTCHA
                        setCaptchaVerified(true);
                    }
                });
            });
        };
        document.body.appendChild(script);
      }, []);



    return (
        <div
            className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center backdrop-brightness-50 back"
        >
            <div
                className="w-96 h-32 bg-white rounded-xl shadow-md flex justify-center items-center shadow-2xl"
            >
                <div id="recaptcha"></div>
            </div>
        </div>
    );
};

export default CaptchaComponent;