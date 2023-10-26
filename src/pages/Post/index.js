import './Post.css'
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkDow from "react-markdown"
import NotFound from 'pages/NotFound';
import DefaulPage from 'components/DefaultPage';

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path="*" element={<DefaulPage />}>
                <Route index element={
                    <PostModel
                        photoCover={`/assets/posts/${post.id}/capa.png`}
                        title={post.title}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkDow>
                                {post.text}
                            </ReactMarkDow>
                        </div>
                    </PostModel>
                } />
            </Route>
        </Routes>

    )
}