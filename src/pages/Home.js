import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Home.css";
import ArticlePreview from "../components/ArticlePreview";
function Home() {
    const articles = [
        {
            id: 1,
            date: "February 22, 2024",
            title: "打字机效果",
            tags: ["js", "effect"],
            description:
                "打字机效果，就是文字一个一个的显示出来，就像打字机一样，这种效果...",
            url: "/blog.html?postID=1",
        },
        {
            id: 2,
            date: "February 23, 2024",
            title: "CSS基线问题",
            tags: ["CSS", "开发"],
            description:
                "前端开发经常会遇到一些奇怪的问题，比如CSS基线对齐问题...",
            url: "/blog.html?postID=2",
        },
        {
            id: 3,
            date: "February 23, 2024",
            title: "协程安全性",
            tags: ["js", "协程", "并发"],
            description: "协程的安全性...",
            url: "/blog.html?postID=3",
        },
        {
            id: 4,
            date: "February 23, 2024",
            title: "一个markdown编辑器",
            tags: ["js", "开发"],
            description: "一个markdown编辑器...",
            url: "/blog.html?postID=4",
        },
        {
            id: 999,
            date: "February 23, 2024",
            title: "测试",
            tags: ["测试", "开发"],
            description: "这是测试文章",
            url: "blog.html?postID=3",
        },
    ];
    // 反转列表，优先显示最新的文章
    articles.reverse();
    return (
        <>
            <div className="hello">
                <div>
                    <div className="howdy">
                        <span>Howdy, fellow!</span>
                        <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f44b.svg')` }}></i>
                    </div>

                    <div className="self-introduction">
                        <div>
                            I'm <span>Mengke</span> - a dedicated
                            <span>Software Engineer</span> in <span>Peiping</span>.
                        </div>
                        <span id="typewriter"></span><span>|</span>
                    </div>
                    <div className="self-about">
                        <p>
                            I started learning to code in 2015 and have been hooked ever
                            since.
                        </p>
                        <p>I landed my first job as a Web developer in 2020.</p>
                        <p>I have a passion for JS/TS, web dev.</p>
                        <p>
                            I started this blog to document and share my knowledge &
                            experience.
                        </p>
                    </div>
                    <div className="blog-about">
                        <a href="#">
                            <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f6e0.svg')` }}></i>
                            <span>What have I built?</span>
                        </a>
                        <a href="#">
                            <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4dd.svg')` }}></i>
                            <span>My writings</span>
                        </a>
                        <a href="#">
                            <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9ec.svg')` }}></i>
                            <span>My snippets collection</span>
                        </a>
                        <a href="#">
                            <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d0.svg')` }}></i>
                            <span>More about me and myself</span>
                        </a>
                        <a href="#">
                            <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4bc.svg')` }}></i>
                            <span>My career</span>
                        </a>
                        <a href="#">
                            <i className="emoji" style={{ backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4ca.svg')` }}></i>
                            <span>Traffic & engagement of this site</span>
                        </a>
                    </div>
                    <p style={{ margin: "2rem 0" }}>
                        <span style={{ fontSize: "1.125rem" }}>Happy reading</span>
                        <i className="emoji" style={{ display: "inline-block", width: "1.5rem", height: "1.5rem", marginLeft: "0.5rem", backgroundImage: `url('https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f37b.svg')` }}></i>
                    </p>
                </div>
                <Card />

            </div>
            <div className="blog-list">
                <ul id="articleList">
                    {articles.map((article) => (
                        <li key={article.id}>
                            <ArticlePreview article={article} />
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ textAlign: 'right', fontWeight: '500' }}>
                <Link to={"/blog"}>
                    <span style={{ color: 'var(--tag-text-color)', cursor: "pointer" }}>
                        All Posts →
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Home;