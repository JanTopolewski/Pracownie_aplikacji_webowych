import { useQuery } from "@tanstack/react-query"

const getSinglePost = async (postID: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
    if (!res.ok) throw new Error("Post nie istnieje");

    const singlePost = await res.json();

    const [user, comments] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${singlePost.userId}`).then(res => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`).then(res => res.json())
    ]);

    return {singlePost, comments, user};
}

export const useSinglePost = (postID: number) => {
    return useQuery({
        queryKey: ["singlePost", postID],
        queryFn: () => getSinglePost(postID),
    });
}