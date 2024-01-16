'use client'
import { Droparea } from "@/app/component/Droparea"
import { OwnerCard } from "@/app/component/OwnerCard"
import { ChevronDown } from "lucide-react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from 'react';

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
      const isBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;
      setIsScrolledToBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (
    <div>
      <div className="flex flex-col items-center mt-28 custom-shadow">
        <Droparea />
      <h2 className="mt-8 mb-16 text-2xl font-semibold text-gray-700"> Before you upload, Make sure:</h2>
      <Button onClick={handleScrollDown} size="icon" className="mx-auto mt-10 flex bg-gray-200 rounded-2xl hover:border-2 hover:border-gray-300 hover:bg-gray-200 hover:shadow hover:shadow-gray-700">
        {(isScrolledToBottom)?(<ChevronUp className="h-4 w-4" />):(<ChevronDown className="h-4 w-4" />)}
      </Button>
      </div>
      <div className="bg-stone-200 flex flex-row pt-12 pb-28 justify-between px-24">
        <OwnerCard/>
        <OwnerCard/>
      </div>
    </div>
  )
}
