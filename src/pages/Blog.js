import React, { useState } from "react";
import "./Blog.css";
import BlogHeader from "../components/BlogHeader";
import ArticlePreview from "../components/ArticlePreview";

function Blog() {
    const articles = [
        {
            id: 1,
            date: "February 22, 2024",
            title: "打字机效果",
            tags: ["js", "effect"],
            description:
                "打字机效果，就是文字一个一个的显示出来，就像打字机一样，这种效果...",
            url: "/blog/1",
        },
        {
            id: 2,
            date: "February 23, 2024",
            title: "CSS基线问题",
            tags: ["CSS", "开发"],
            description:
                "前端开发经常会遇到一些奇怪的问题，比如CSS基线对齐问题...",
            url: "/blog/2",
        },
        {
            id: 3,
            date: "February 23, 2024",
            title: "协程安全性",
            tags: ["js", "协程", "并发"],
            description: "协程的安全性...",
            url: "/blog/3",
        },
        {
            id: 4,
            date: "February 23, 2024",
            title: "一个markdown编辑器",
            tags: ["js", "开发"],
            description: "一个markdown编辑器...",
            url: "/blog/4",
        },
        {
            id: 999,
            date: "February 23, 2024",
            title: "测试",
            tags: ["测试", "开发"],
            description: "这是测试文章",
            url: "blog/3",
        },
    ];
    // 反转列表，优先显示最新的文章
    articles.reverse();

    // 当前文章列表，只取前两个，分页
    const [currentArticles, setCurrentArticles] = useState(articles.slice(0, 2));

    const [searchQuery, setSearchQuery] = useState(true);// 也许useEffect更好？
    
    const handleSearch = (inputValue) => {
        // setSearchQuery(inputValue);
        console.log(inputValue);
        let filteredArticles = [];
        // 如果搜索框为空，则显示最新的两篇文章
        if (!inputValue.trim()) {
            console.log("no search");
            filteredArticles = articles.slice(0, 2);
            setSearchQuery(true);
        } else {
            setSearchQuery(false);
            filteredArticles = articles.filter((article) => {
                // 将搜索字符串转换为小写，实现大小写不敏感搜索
                const searchStr = inputValue.toLowerCase();
                return (
                    // 检查标签是否包含搜索字符串
                    article.tags.some((tag) =>
                        tag.toLowerCase().includes(searchStr)
                    ) || article.description.toLowerCase().includes(searchStr)
                )
            });

        }
        return setCurrentArticles(filteredArticles);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 2;
    const totalPages = Math.ceil(articles.length / perPage);
    const showCurrentPage = (num) => {
        const start = (currentPage+num - 1) * perPage;
        const end = start + perPage;
        setCurrentArticles(articles.slice(start, end));
        setCurrentPage(currentPage+num)
    };
    return (
        <>
            <BlogHeader
                title={"Blog"}
                description={
                    `I write mostly about web development, tech related, and sometime 
                    about my personal life. Use the search below to filter by title.`}
            />
            <div className="blog-search">
                <input
                    type="text"
                    placeholder="Search"
                    id="search"
                    onChange={(event) => handleSearch(event.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </div>
            <div className="blog-list">
                <ul id="articleList">
                    {currentArticles.length > 0 ? (
                        currentArticles.map((article) => (
                            <li key={article.id}>
                                <ArticlePreview article={article} />
                            </li>
                        ))
                    ) : (
                        <p>No posts found.</p>
                    )}
                </ul>
            </div>
            <div style={searchQuery? {display:"block"}:{display:"none"}}>
                <nav className="pager-nav">
                    <button
                        onClick={() => showCurrentPage(-1)}
                        disabled={currentPage === 1}
                        style={{ opacity: currentPage === 1 ? "0.5" : "1" }}
                    >上一页
                    </button>
                    <span>{currentPage} of {totalPages}</span>
                    <button
                        onClick={() => showCurrentPage(+1)}
                        disabled={currentPage === totalPages}
                        style={{ opacity: currentPage === totalPages ? "0.5" : "1" }}
                    >下一页
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Blog;