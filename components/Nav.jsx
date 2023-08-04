"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn, signOut,useSession,getProviders} from 'next-auth/react'
import { useState,useEffect } from 'react'

function Nav() {
  const isUserLoggedIn = true;

  const [providers,setProviders] = useState(null);
  useEffect(() => {
  const SetProviders = async () => {
    const response = await getProviders();
    setProviders(response);
  }  
  SetProviders();
  },[])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex flex-center gap-2'>
        <Image src="/assets/images/logo.svg" alt='PromptLand' width={30} height={30} className='object-contain' />
        <p className='logo_text'>PromptLand </p>
      </Link>
      {/* Dekstop navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
         <div className='flex gap-3 md:gap-3'>
          <Link href="/create-prompts" className='black_btn'>Create Post</Link>
          <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
          <Link href="/profile">
            <Image
             src="/assets/images/SadraKian.jpg"
             alt='UserName'
             width={37} 
             height={37} 
             className='rounded-full' />
            </Link>
         </div> 
        ): (
          <>
          {
            providers && Object.values(providers).map((provider) => {
              <button key={provider.name} onClick={() => signIn(provider.id)} type='button' className='black_btn'>Sign in</button>
            })
          }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
        {
          isUserLoggedIn? (
            <div className="flex sm:hidden">
              <Image
             src="/assets/images/SadraKian.jpg"
             alt='UserName'
             width={37} 
             height={37} 
             className='rounded-full' />
            </div>
          ) : (
            <>
          {
            providers && Object.values(providers).map((provider) => {
              <button key={provider.name} onClick={() => signIn(provider.id)} type='button' className='black_btn'>Sign in</button>
            })
          }
          </>
          )
        }
      
    </nav>
  )
}

export default Nav