import BlogHeader from '../components/BlogHeader';
import './Projects.css';

const projects = [
    {
        img: "https://www.mengke.me/static/images/projects/AVP.svg",
        title: "MICO AVP - Alpha Video Player",
        description: "An open-source Alpha video player within the company that can play Alpha videos on the web.",
        techStacks: ["WebGL", "Canvas"],
        link: "/blog/202309/AVP_Introduction"
    },
    {
        img: "https://www.mengke.me/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fmoonfox.jpg&w=1200&q=75",
        title: "MoonFox Data - Aurora's Big Data Brand",
        description: "The MoonFox Data brand portal includes iAPP, iBrand, iMarkting, Alternative Data and other parts, and users can obtain the Moon Fox big data service on the website.",
        techStacks: ["Next.js", "React", "ECharts", "AntDesign", "i18", "Gulp"],
        link: "https://moonfox.cn/en?ref=mengke.me"
    },
    {
        img: "https://www.mengke.me/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Faone.jpg&w=1200&q=75",
        title: "Aone - Open Platform for Geographic Business Data",
        description: "Edit the map fence online to generate a portrait of the crowd tag inside the fence.",
        techStacks: ["Nuxt.js", "Vue", "Amap", "Baidu Map", "Vuex"],
        link: "/"
    },
    {
        img: "https://www.mengke.me/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fiapp_lite.jpg&w=1200&q=75",
        title: "iAPP Lite - WeChat Mini-Program",
        description: "View iAPP data on your phone at any time.",
        techStacks: ["Mini-Program Vanilla", "Antv-F2", "JState-mini"],
        link: "/"
    },
    {
        img: "https://www.mengke.me/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fmoonfox-top.jpg&w=1200&q=75",
        title: "Aurora DMP - Data Management Platform",
        description: "Users can filter data by customizing IMEI, application, mobile phone number, OAID and other conditions, and generate user portrait charts online.",
        techStacks: ["Nuxt.js", "Vue", "Amap", "Baidu Map", "Vuex"],
        link: "/"
    }
];

function ProjectsItem({ project }) {
    return (
        <div className="project-item">
            <div className="project-card">
                <div className="project-image">
                    <img
                        src={project.img}
                        alt="Project Image"
                    />
                </div>
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <p>
                        {project.description}
                    </p>
                    <p>build with:
                        <span>
                            {project.techStacks.join(', ')}
                        </span>
                    </p>
                    <a href={project.link}>Learn more →</a>
                </div>
            </div>
        </div>
    )
}



function Projects() {
    return (
        <>
            <BlogHeader
                title="Projects"
                description="My open-source side projects and stuff that I built with my colleagues at work"
            />
            <div className="project-list">
                <h3>
                    work
                </h3>
                <div className="project-container">
                    {projects.map((project, index) => (ProjectsItem({ project, key: index })))}
                </div>

            </div>
        </>
    )
}

export default Projects;