"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

function PromptCard({ post, handleTagClick, handleDelete, handleEdit }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center cursor-pointer gap-3">
          <Image
            src={post.creator.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500 ">
              {post.creator.emaail}
            </p>
          </div>
        </div>
        <div className="copy_btn">
          <Image src="/assets/images/copy.png" width={17} height={17} />
        </div>
      </div>
    </div>
  );
}

export default PromptCard;
