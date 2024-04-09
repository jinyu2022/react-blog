import { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { marked } from 'marked';
import { BsArrowUp } from "react-icons/bs";
import hljs from 'highlight.js';
import "highlight.js/styles/atom-one-dark.css"

import "./BlogPost.css";
import PostHeader from "../components/PostHeader";
import img from "../assets/85970602_p0_master1200.jpg";
import { zoomImage, debounce } from '../utils';

function BlogPost() {
    console.log('BlogPost render start');
    const { id } = useParams();
    const article = [
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
    ][id - 1];
    const mdRef = useRef(null)
    const backTopRef = useRef(null);
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://giscus.app/client.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.setAttribute('data-repo', "jinyu2022/simple-blog");
        script.setAttribute('data-repo-id', "R_kgDOLVt_uA");
        script.setAttribute('data-category', "评论");
        script.setAttribute('data-category-id', "DIC_kwDOLVt_uM4Cdhzb");
        script.setAttribute('data-mapping', "url");
        script.setAttribute('data-strict', "0");
        script.setAttribute('data-reactions-enabled', "1");
        script.setAttribute('data-emit-metadata', "0");
        script.setAttribute('data-input-position', "bottom");
        script.setAttribute('data-theme', "preferred_color_scheme");
        script.setAttribute('data-lang', "zh-CN");

        document.querySelector('.giscus').appendChild(script);

        const handleScroll = () => {
            debounce(() => {
                const mdRect = mdRef.current.getBoundingClientRect();
                if (mdRect.top < window.innerHeight) {
                    backTopRef.current.style.display = "block";
                } else {
                    backTopRef.current.style.display = "none";
                }
            }, 20)
        }

        if (
            document.body.offsetWidth >
            document.querySelector("main").offsetWidth + 50
        ) {
            window.addEventListener("scroll", handleScroll);
        } else {
            document.querySelector("#top").style.display = "none";
        }

        /**
         * 存储移除图片点击事件监听器的函数。
         * 这个函数将在组件卸载时被调用，以确保移除通过 `zoomImage` 函数添加的所有事件监听器。
         */
        let unzoomImage = () => { console.log("unzoomImage")};

        fetch(`/articles/${id}.md`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((mdText) => {
                // 使用 marked 解析 Markdown 文本
                const htmlText = marked.parse(mdText);
                // 如果找到了元素，将解析后的 HTML 内容设置为元素的innerHTML
                if (mdRef.current) {
                    mdRef.current.innerHTML = htmlText;
                    // 使用 highlight.js 高亮代码
                    hljs.highlightAll();
                    // 为图片添加放大功能
                    unzoomImage = zoomImage("main");
                    console.log("执行了");
                } else {
                    console.error('Element with ID "app" not found.');
                }
            }).catch((error) => {
                console.error("There has been a problem with your fetch operation:", error);
            });
        // 在组件卸载时移除滚动事件监听器
        return () => {
            window.removeEventListener("scroll", handleScroll);
            unzoomImage();
        };
    }, [])
    return (
        <>
            <PostHeader article={article} />
            <div className="article-cover">
                <img alt="server.jpg" loading="lazy" width="1160" height="750" decoding="async" data-nimg="1" style={{ color: "transparent" }} src={img} />
            </div>
            <article id="md" ref={mdRef}></article>
            <button
                type="button"
                id="top"
                ref={backTopRef}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <BsArrowUp style={{ width: "1.375rem", height: "1.375rem", verticalAlign: "top" }} />
            </button>
            <div className="giscus"></div>
        </>
    );
}

export default BlogPost;