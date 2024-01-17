import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {  artworkItem, selectedArt } from '@/app/recoilContextProvider'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
const Editor: React.FC = () => {
    const id = useRecoilValue(selectedArt);
    const [artworkitem, setArtworkitem] = useRecoilState(artworkItem(id));
    return (
        <ScrollArea indicatorColor="bg-gray-300" className="h-3/4 card w-96 border border-2 border-blue-400 shadow-xl bg-gray-100 m-6 p-4">
            <h2 className='font-semibold text-lg'>Editing </h2>
            <span>{artworkitem?.file.name}</span>
            <div className="card-content p-4">
                <div className='space-y-8'>
                    <div id='title' className='space-y-2'>
                        <p className='font-semibold'>Title</p>
                        <p className='text-sm text-gray-700'>Proper title will boost your artworks discoverability</p>
                        <a href="#" className='text-blue-500 text-sm'>How to create a proper title?</a>
                        <input type="text" className="border-2 border-gray-300 w-full"/>
                        <p className='text-xs text-gray-600'>26 characters left</p>
                    </div>
                    <div id='tags' className='space-y-2'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Tags <span className='text-sm text-gray-600 font-normal'>(upto 15 tags)</span></p>
                            <a href="#" className='text-blue-500 text-sm'>See examples</a>
                        </div>
                        <p className='text-sm text-gray-700'>
                            Try to be literal and use associations. Tags should be
                            ordered by their relative importance
                            How to choose the best tags?
                        </p>
                        <textarea role="text-input" className="resize-none w-full border-2 border-gray-300"/>
                    </div>
                    <div id='description' className='space-y-2'>
                        <p className='font-semibold'>Description <span className='text-sm text-gray-600 font-normal'>(optional)</span></p>
                        <p className='text-sm text-gray-700'>
                            Describe your artwork as clearly as possible to help
                            cutomers understand it's context
                            How to waite a good descuption?
                        </p>
                        <textarea role="text-input" className="resize-none w-full border-2 border-gray-300"/>
                        <p className='text-xs text-gray-600'>140 characters left</p>
                    </div>
                    <div id='category' className='space-y-2'>
                    <p className='font-semibold'>Category <span className='text-sm text-gray-600 font-normal'>(pick one)</span></p>
                        <p className='text-sm text-gray-700'>choose a category best suited for your art piece</p>
                        <ScrollArea indicatorColor="bg-blue-400" className='h-20 border-2 border-gray-200'>
                            <div className='grid grid-cols-2 text-sm px-4 py-1'>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    Movies
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    Nature
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    Planes
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    Retro
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    sport
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    travel
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    united states
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    space
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    art
                                </div>
                                <div>
                                    <Checkbox id="terms" className='mt-1 mr-3'/>
                                    tvshows
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                    <div id='type' className='space-y-2'>
                        <p className='font-semibold'>Type</p>
                        <p className='text-sm text-gray-700'>choose whether your artwork is a photo or an illustration.</p>
                        <RadioGroup defaultValue="comfortable" className='flex flex-row justify-between pr-28'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Illustration" id="r1" />
                                <Label htmlFor="r1">Illustration</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r2" />
                                <Label htmlFor="r2">Photography</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div id='collection' className='space-y-2'>
                        <p className='font-semibold'>Collection</p>
                        <p className='text-sm text-gray-700'>Try to create collections with one leading theme. our customers love it!</p>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a collection" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Collections</SelectLabel>
                                <SelectItem value="motivation saying">Motivaiton saying</SelectItem>
                                <SelectItem value="focus coding">focus coding</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <p className='text-xl font-semibold text-blue-500'>+ <span className='text-sm font-normal'>Create new collection</span></p>
                    </div>
                    <div id='terms-of-use'>
                        <div className='flex flex-row'>
                        <Checkbox id="terms" className='mt-1 mr-3'/>
                        <p className='text-sm'>
                            I hereby accept <a href="#" className='text-blue-500 text-sm'>Terms of Use</a> and confirm that
                            uploaded artworks do not infringe upon the
                            copyrights, moral rights, publicity rights, private
                            rights or any other rights of any person or thi
                            party, or violate any law or judicial or
                            governmental order.
                        </p>
                        </div>
                    </div>
                    <div id='upload-button'>
                        <Button disabled className='w-full text-white font-semibold text-md bg-blue-500 rounded-xl hover:bg-blue-600'>Upload</Button>
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
};

export default Editor;
