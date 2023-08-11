"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function PromptCard({ post, handleTagClick, handleDelete, handleEdit }) {
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const pathName = usePathname();
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 5000);
  };

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
        <div onClick={handleCopy} className="copy_btn">
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/images/copy.png"}
            alt={copied ? "Copied" : "Copy"}
            title={copied ? "Copied" : "Copy"}
            width={17}
            height={17}
          />
        </div>
      </div>

      <p className="text-gray-700 font-satoshi text-sm my-4">{post.prompt}</p>

      <p
        className="font-inter blue_gradient text-sm cursor-pointer"
        onClick={() => {
          handleTagClick && handleTagClick(post.tag);
        }}>
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName.includes("/profile") && (
        <div className="flex-center gap-4 mt-5 border-t border-gray-200 pt-3">
          <button
            className="font-inter text-sm cursor-pointer green_gradient"
            onClick={handleEdit}>
            Edit
          </button>
          <button
            className="font-inter text-sm cursor-pointer orange_gradient"
            onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default PromptCard;
