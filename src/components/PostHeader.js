import "./PostHeader.css";

function PostHeader({ article }) {
    return (
        <header style={{ padding: "4rem 0" }}>
            <div className="tag">
                {article.tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                ))}
            </div>
            <h1 className="title">{article.title}</h1>
            <dl>
                <dd style={{ fontWeight: 500, display: "flex", color: "rgb(107 114 128)", margin: 0 }}>
                    <time>{article.date}</time>
                    <span style={{ margin: "0 0.5rem" }}> • </span>
                    <span>5 mins read</span>
                    <span style={{ margin: "0 0.5rem" }}> • </span>
                    <span>30 views</span>
                </dd>
            </dl>
        </header>
    );
}

export default PostHeader;