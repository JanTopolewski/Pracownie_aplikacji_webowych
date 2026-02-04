import { useEffect, useState } from "react";
import type { Post } from "../../types/Post/Post.ts";
import styles from "./Posts.module.scss";
import { Link } from "react-router";

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (() => {
            setIsLoading(true);
        })()

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((json: Array<Post>) => setPosts(json))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }, []);

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
            {!isLoading && !isError && (
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
