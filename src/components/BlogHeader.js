import './BlogHeader.css';

/**
 * 显示页面标题和描述
 * @param {string} title 页面标题
 * @param {string} description 页面描述
 */
function BlogHeader({title, description}) {
    return (
        <div className="blog-header">
            <div className="blog-title">
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        </div>
            );
}

export default BlogHeader;