"use client";
import React, { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function MyProfile() {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
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
      name="My"
      desc="Welcome to your personlized profile!"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default MyProfile;
