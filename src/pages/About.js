import { useRef, useEffect } from "react"
import "./About.css"
import BlogHeader from "../components/BlogHeader"
import Card from "../components/Card"
import { marked } from "marked"
function About() {
    const mdElement = useRef(null)
    useEffect(() => {
        fetch("/articles/about.md")
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
                if (mdElement.current) {
                    mdElement.current.innerHTML = htmlText;
                } else {
                    console.error('Element with ID "app" not found.');
                }
            }).catch((error) => {
                console.error("There has been a problem with your fetch operation:", error);
            });
    }, [])
    return (
        <>
            <BlogHeader
                title="About"
                description="More about me and this blog"
                style={{ borderBottom: "2px solid #f0f0f0" }}
            />
            <div className="about-me">
                <Card />
                <div id="md" ref={mdElement}>123123</div>
            </div>
        </>
    )
}

export default About