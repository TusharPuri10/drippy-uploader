'use client'
import { ChevronDown } from "lucide-react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from 'react';
import { Ownercard } from "@/components/ui/ownercard"
import { Qualitycard } from "@/components/ui/qualitycard"
import { Droparea } from "@/components/ui/droparea"

export default function Home() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const handleScrollDown = () => {
    if (isScrolledToBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsScrolledToBottom(false);
    }
    else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY + window.innerHeight, document.body.scrollHeight);
      const isBottom = window.scrollY + window.innerHeight + 10 >= document.body.scrollHeight;
      console.log(isBottom);
      setIsScrolledToBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div>
      <div className="flex flex-col items-center md:pt-32 pt-20 custom-shadow">
        <Droparea />
        <div className="hidden lg:block">
          <h2 className="mt-16 mb-2 text-2xl font-semibold text-gray-700"> Before you upload, Please make sure:</h2>
          <Button onClick={handleScrollDown} size="icon" className="mx-auto mt-16 mb-10 flex rounded-2xl hover:border-2 hover:border-stone-400 shadow shadow-stone-600">
            {(isScrolledToBottom)?(<ChevronUp className="h-4 w-4" />):(<ChevronDown className="h-4 w-4" />)}
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-gray-300 flex flex-row pb-10 px-16">
          <Ownercard/>
          <Qualitycard/>
        </div>
      </div>
      <div className="md:hidden">
          <img src="/snap.png" alt="" className="w-20 h-20"/>
          Developer was too lazy to  make this responsive. Please use a desktop.
      </div>
    </div>
  )
}
