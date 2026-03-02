import { useState, useEffect } from "react";

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setPost(data);
                setError('');
            })
            .catch((err) => {
                setLoading(false);
                setPost({});
             setError(`There was a problem ${err}`);
            });
    }, []);

    return (
        <div>
            <p>{loading? 'loading...': post.title}</p>
            <p>{error || null}</p>
        </div>
    )
}