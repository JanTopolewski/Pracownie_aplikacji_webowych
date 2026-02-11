import { useEffect, useState } from "react";
import type { Post } from "../../types/Post/Post.ts";
import type { Comment } from "../../types/Comment/Comment.ts";
import type { User } from "../../types/User/User.ts";
import styles from "./SinglePost.module.scss";
import { useParams } from "react-router";

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState<Post>();
    const [user, setUser] = useState<User>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const postID = parseInt(useParams().id as string);

    useEffect(() => {
        (() => {
            setIsLoading(true);
        })()

        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(res => res.json())
            .then((json: Post) => {
                setSinglePost(json);

                return Promise.all([
                    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`).then(res => res.json()),
                    fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`).then(res => res.json())
                ]);
            })
            .then(([comments, user]) => {
                setComments(comments);
                setUser(user);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }, [postID]);

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
            {!isLoading && !isError && (
                <>
                    {!singlePost && (
                        <div className={styles.SinglePostError}>
                            Brak danych
                        </div>
                    )}
                    {singlePost && (
                        <div
                            className={styles.SinglePost}
                        >
                            <h1 className={styles.SinglePostTitle}>{singlePost.title}</h1>
                            <hr />
                            <h3
                                className={styles.User}
                            >
                                {!user && (
                                    <div className={styles.UserError}>Brak danych o użytkowniku</div>
                                )}
                                {user && (
                                    <p className={styles.UserData}>{user.username}({user.name}) | {user.email} | {user.phone} | {user.website} | {user.company.name}</p>
                                )}
                            </h3>
                            <p className={styles.SinglePostContent}>{singlePost.body}</p>
                            <div className={styles.Comments}>
                                <div className={styles.CommentsTitle}>Komentarze</div>
                                {comments.length === 0 && (
                                    <div className={styles.CommentsInfo}>
                                        Brak komentarzy
                                    </div>
                                )}
                                {comments.map((comment: Comment) => (
                                    <div className={styles.Comment} key={comment.id}>
                                        <hr />
                                        <p className={styles.CommentHeader}>{comment.email} - {comment.name}</p>
                                        <p className={styles.CommentContent}>{comment.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
