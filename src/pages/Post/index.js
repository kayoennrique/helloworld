import './Post.css'
import { useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkDow from "react-markdown"

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <h1>Post não encontrad...</h1>
    }

    return (
        <PostModel
            photoCover={`/assets/posts/${post.id}/capa.png`}
            title={post .title}
        >
            <div className="post-markdown-container">
                <ReactMarkDow>
                    {post.text}
                </ReactMarkDow>   
            </div>
        </PostModel>
    )
}