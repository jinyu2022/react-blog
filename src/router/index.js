import { Suspense, lazy } from "react";
// 关键代码
import { createBrowserRouter } from "react-router-dom";

// 引入组件
import Layout from "../components/Layout.js";
import Home from "../pages/Home.js";
import Blog from "../pages/Blog.js";
const About = lazy(() => import("../pages/About.js"));
const Friends = lazy(() => import("../pages/Friends.js"));
const BlogPost = lazy(() => import("../pages/BlogPost.js"));
const Projects = lazy(() => import("../pages/Projects.js"));
const Snippets = lazy(() => import("../pages/Snippets.js"));
const Gallery = lazy(() => import("../pages/Gallery.js"));
// 写法与 Vue.js 类似
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog/:id", // 添加这个动态路由
                element: <BlogPost />,
            },
            {
                path: "/gallery",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Gallery />
                    </Suspense>
                ),
            },
            {
                path: "/snippets",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Snippets />
                    </Suspense>
                ),
            },
            {
                path: "/projects",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/friends",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Friends />
                    </Suspense>
                ),
            },
        ],
    },
]);
export default router;
