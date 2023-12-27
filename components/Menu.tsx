"use client"
import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/drawer'
import { MenuIcon } from 'lucide-react'

export default function Menu() {
    return (
        <Drawer>
            <DrawerTrigger className="border-2 border-black border-r-4 border-b-4 active:border-2 rounded-xl p-1 bg-white">
                <MenuIcon className="w-8 h-8 " />
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-screen h-screen rounded-3xl">
                    <div className="justify-end flex m-5">
                        <DrawerClose className="rounded-lg text-white px-3 py-2 bg-gradient-pink duration-500 hover:text-black border-2 border-black border-r-4 border-b-4 active:border-2 ">
                            Close
                        </DrawerClose>
                    </div>
                    <p className="text-center text-3xl">
                        Drawer Contents
                    </p>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
