"use client";
import React, { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { useRouter, useSearchParams } from "next/navigation";

function UseProfile({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (params.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id.toString()}`);
  };

  const handleDelete = (post) => {
    const hasConfirmed = confirm(
      "Are you sure that you want to delete the prompt?"
    );

    if (hasConfirmed) {
      try {
        fetch(`api/prompt/${post._id}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => {
          p._id !== post._id;
        });

        setPosts(filteredPosts);
      } catch (error) {}
    }
  };

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} personlized profile! Where you can see what imaginative prompts  ${userName} shared with PromptLand Comminuty`}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default UseProfile;
