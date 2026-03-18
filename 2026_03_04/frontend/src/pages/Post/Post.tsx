import styles from "./Post.module.scss";
import { useState } from "react";
import { useParams } from "react-router";
import { useSinglePost } from "../../hooks/useSinglePost.ts";
import { useCreateComment} from "../../hooks/useCreateComment.ts";
import type { Comment } from "../../types/Comment/Comment.ts";

export default function SinglePost() {
    const postID = parseInt(useParams().id as string);

    const {data, isLoading, isError} = useSinglePost(postID);
    const createComment = useCreateComment(postID);
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createComment.mutate({
            content: text,
            postId: postID,
        });
        setText("");
    }

    return (
        <div className={styles.SinglePost}>
            {isLoading && (
                <div className={styles.SinglePostLoading}>
                    Wczytywanie danych ...
                </div>
            )}
            {isError && (
                <div className={styles.SinglePostError}>
                    Wystąpił błąd podczas wczytywania danych
                </div>
            )}
            {!isLoading && !isError && data && (
                <>
                    {!data.singlePost && (
                        <div className={styles.SinglePostError}>
                            Brak danych
                        </div>
                    )}
                    {data.singlePost && (
                        <div
                            className={styles.SinglePost}
                        >
                            <h1 className={styles.SinglePostInfo}>{data.singlePost.title} - {new Date(data.singlePost.createdAt).toLocaleDateString("pl-PL")}</h1>
                            <hr />
                            <p className={styles.SinglePostContent}>{data.singlePost.content}</p>
                            <div className={styles.Comments}>
                                <div className={styles.CommentsTitle}>Komentarze</div>
                                {data.comments.length === 0 && (
                                    <div className={styles.CommentsInfo}>
                                        Brak komentarzy
                                    </div>
                                )}
                                {data.comments.map((comment: Comment) => (
                                    <div className={styles.Comment} key={comment.id}>
                                        <hr />
                                        <p className={styles.CommentDate}>{new Date(comment.createdAt).toLocaleString("pl-PL")}</p>
                                        <p className={styles.CommentContent}>{comment.content}</p>
                                    </div>
                                ))}
                                <div className={styles.CommentCreator}>Dodaj komentarz:
                                    <form onSubmit={handleSubmit} className={styles.Form}>
                                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} required className={styles.FormInput}/>
                                        <button type="submit" className={styles.SubmitButton}>Dodaj</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}