import Link from "next/link";
import React from 'react'
import BloggingLogo from "../assests/images/blog-svgrepo-com.svg"
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className='h-[72px] hidden w-full lg:flex justify-center relative px-6 lg:px-20'>
        <div className="h-full w-full max-w-7xl flex justify-between items-center">
        <div className="h-full flex gap-4 items-center">
        <Image className="h-10 w-fit" src={BloggingLogo} alt=""/>
        <h1 className=" flex items-center"><Link href="/">DebugDiaries</Link></h1>
        </div>
        <div className="flex gap-6">
        <Link href="/contact">Contact</Link>
        <Link href="/about">About Us</Link>
        <Link href="/sign">Sign Up</Link>
        <Link href="/login">Login</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar