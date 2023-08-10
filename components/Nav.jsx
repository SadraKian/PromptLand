"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

function Nav() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="PromptLand"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptLand </p>
      </Link>
      {/* Dekstop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-3">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link
              href={`/profile/${session?.user.id}?name=${session?.user.name}`}>
              <Image
                src={session?.user.image}
                alt="UserName"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    type="button"
                    className="black_btn">
                    Sign in with {provider.name}
                  </button>
                );
              })}
          </>
        )}
      </div>
      {/* Mobile Navigation */}

      <div className="flex sm:hidden relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt="UserName"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href={`/profile/${session?.user.id}?name=${session?.user.name}`}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}>
                  Create prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-2 w-full black_btn">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    type="button"
                    className="black_btn">
                    Sign in with {provider.name}
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
