import { useQuery } from "@tanstack/react-query"

const getSinglePost = async (postID: number) => {
    const res = await fetch(`http://localhost:3000/posts/${postID}`);
    if (!res.ok) throw new Error("Post nie istnieje");

    const singlePost = await res.json();

    const comments = singlePost.comments;

    return {singlePost, comments};
}

export const useSinglePost = (postID: number) => {
    return useQuery({
        queryKey: ["singlePost", postID],
        queryFn: () => getSinglePost(postID),
    });
}