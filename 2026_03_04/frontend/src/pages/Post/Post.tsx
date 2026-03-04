import styles from "./SinglePost.module.scss";
import { useParams } from "react-router";

export default function SinglePost() {
    const postID = parseInt(useParams().id as string);

    // const {data, isLoading, isError} = useSinglePost(postID);

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
                            <h1 className={styles.SinglePostTitle}>{data.singlePost.title}</h1>
                            <hr />
                            <p className={styles.SinglePostContent}>{data.singlePost.body}</p>
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