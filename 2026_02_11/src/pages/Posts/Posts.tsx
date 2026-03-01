import styles from "./Posts.module.scss";
import { Link } from "react-router";
import { usePosts } from "../../hooks/usePosts.ts";
import type { Post } from "../../types/Post/Post.ts";

export default function Posts() {
    const { data: posts, isLoading, isError } = usePosts();

    return (
        <div className={styles.Posts}>
            {isLoading && (
                <div className={styles.PostsLoading}>
                    Wczytywanie danych ...
                </div>
            )}
            {isError && (
                <div className={styles.PostsError}>
                    Wystąpił błąd podczas wczytywania danych
                </div>
            )}
            {!isLoading && !isError && posts && (
                <>
                    {posts.length === 0 && (
                        <div className={styles.PostsError}>
                            Brak wpisów do wyświetlenia
                        </div>
                    )}
                    {posts.map((post: Post) => (
                        <div
                            className={styles.Post}
                            key={post.id}
                        >
                            <h4 className={styles.PostTitle}>{post.title}</h4>
                            <Link
                                className={styles.PostLink}
                                to={`/post/${post.id}`}
                            >
                                Cały post
                            </Link>
                            <p className={styles.PostContent}>{post.body.substring(0, 70)}...</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
