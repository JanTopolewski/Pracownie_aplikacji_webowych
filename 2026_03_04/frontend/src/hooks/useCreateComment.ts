import {useMutation, useQueryClient} from "@tanstack/react-query";

const createComment = async (data: {content: string; postId: number}) => {
    const res = await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Nie udało się utworzyć komentarza");

    return res.json();
}

export const useCreateComment = (postId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["singlePost", postId]});
        }
    });
}