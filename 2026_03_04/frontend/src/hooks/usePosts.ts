import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/Post/Post.ts";

const getPosts = async () => {
    return await fetch('http://localhost:3000/posts').then(res => res.json());
}

export const usePosts = () => {
    return useQuery<Array<Post>>({
        queryKey: ['posts'],
        queryFn: getPosts,
    });
}