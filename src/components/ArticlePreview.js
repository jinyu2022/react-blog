import React from "react";
import "./ArticlePreview.css";
/**
 * ArticlePreview 组件用于显示文章的预览信息。
 * 
 * @param {object} article - 包含文章信息的对象，包括日期、标题、标签、描述和URL。
 * @returns {JSX.Element} 一个包含文章预览信息的列表项元素。
 */
function ArticlePreview({ article }) {
    return (
        <article className="article-container">
            <div>
                <time className="date">{article.date}</time>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
                <h2 className="title">{article.title}</h2>
                <div className="tag">
                    {article.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                </div>
                <div className="description">
                    {article.description}
                </div>
                <div className="read-more">
                    <a href={article.url}>Read more</a>
                </div>
            </div>
        </article>
    );
}

export default ArticlePreview;