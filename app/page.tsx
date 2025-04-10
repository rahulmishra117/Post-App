"use client";

import { useState, useEffect } from 'react';
import { Post } from '../app/types/Post';
import Card from '../app/components/Card'; 

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState<string>("");


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache",
      });
      const posts: Post[] = await res.json();
      setPosts(posts);
      setFilteredPosts(posts);
    };
    fetchPosts();
  }, []);

 
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.body.toLowerCase().includes(searchTerm)
    );
    setFilteredPosts(filtered);
  };

  return (  
   <main className="min-h-screen p-4 pt-16">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md p-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={handleSearch}
          className="w-full border p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-24">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </main>
  );
}
