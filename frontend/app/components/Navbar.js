"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
            <nav className='bg-gradient-to-r from-teal-600 to-teal-300 text-white h-[4.5rem] flex justify-between items-center px-10'>
                <Link href="/"><span className="logo text-4xl font-bold cursor-pointer tracking-widest">
                    Mitti
                </span></Link>
                {!session && <Link href="/login"><button className='flex justify-center items-center gap-1 border border-white px-4 py-3 rounded-full'>
                    <lord-icon
                        src="https://cdn.lordicon.com/bgebyztw.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{ "width": "30px", "height": "30px" }}>
                    </lord-icon>
                    Login/Sign Up
                </button></Link>}
                {session && <>
                <ul className='flex gap-4'>
                    <Link href="/"><li className='hover:scale-105 transition-all transform duration-200'>Home</li></Link>
                    <Link href="/"><li className='hover:scale-105 transition-all transform duration-200'>Services</li></Link>
                    <Link href="/"><li className='hover:scale-105 transition-all transform duration-200'>Features</li></Link>
                    <Link href="/"><li className='hover:scale-105 transition-all transform duration-200'>Contact us</li></Link>
                    <Link href="/"><li className='hover:scale-105 transition-all transform duration-200'>About us</li></Link>
                </ul>
                <div className="relative inline-block z-50">
                    {/* Avatar Button */}
                    <button
                        id="dropdownUserAvatarButton"
                        onBlur={() => setTimeout(() => setIsOpen(!setIsOpen), 200)}
                        data-dropdown-toggle="dropdownAvatar"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <span className="sr-only">Open user menu</span>
                        <Image
                            className="w-10 h-10 rounded-full"
                            src={session.user.image}
                            width={40}
                            height={40}
                            alt="user photo"
                        />
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div
                            id="dropdownAvatar"
                            className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>{session.user.name}</div>
                                <div className="font-medium truncate">{session.user.email}</div>
                            </div>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUserAvatarButton"
                            >
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                            <div className="py-2">
                                <span
                                    onClick={()=>signOut()}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                                >
                                    Sign out
                                </span>
                            </div>
                        </div>
                    )}
                </div></>}
            </nav>
        </>
    )
}

export default Navbar