'use client'
import { Droparea } from "@/app/component/Droparea"
import { OwnerCard } from "@/app/component/OwnerCard"
import { QualityCard } from "./component/QualityCard"
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
      <div className="flex flex-col items-center mt-32 custom-shadow">
        <Droparea />
      <h2 className="mt-16 mb-2 text-3xl font-semibold text-gray-700"> Before you upload, Please make sure:</h2>
      <Button onClick={handleScrollDown} size="icon" className="mx-auto mt-16 mb-10 flex rounded-2xl hover:border-2 hover:border-stone-400 shadow shadow-stone-600">
        {(isScrolledToBottom)?(<ChevronUp className="h-4 w-4" />):(<ChevronDown className="h-4 w-4" />)}
      </Button>
      </div>
      <div className="bg-gray-300 flex flex-row pb-10 justify-between px-10">
        <OwnerCard/>
        <QualityCard/>
      </div>
    </div>
  )
}
