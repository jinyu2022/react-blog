import { useRef, useEffect } from "react";
import "./Card.css";

/**
 * 旋转卡片
 */
function Card() {
    const cardRef = useRef(null);
    const innerCardRef = useRef(null);

    /**卡片随鼠标旋转
     * @param {HTMLElement} element 卡片元素
     */
    function rotateCard(element) {
        let lastMoveTime = 0;
        /**
         * @param {MouseEvent} event 
         */
        function move(event) {
            if (window.innerWidth < 768) return
            const currentTime = new Date().getTime();
            const deltaTime = currentTime - lastMoveTime;
            // 节流
            if (deltaTime < 50) return;
            lastMoveTime = currentTime;
            const { clientX, clientY } = event;
            const { width, height, left, top } = element.getBoundingClientRect();
            const mouseX = Math.abs(clientX - left);
            const mouseY = Math.abs(clientY - top);
            const rotateMin = -15;
            const rotateMax = 15;
            const rotateRange = rotateMax - rotateMin;

            const rotate = {
                x: rotateMax - (mouseY / height) * rotateRange,
                y: rotateMin + (mouseX / width) * rotateRange
            };
            element.style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`;
        }
        return move
    }

    useEffect(() => {
        if (window.innerWidth < 768) return
        const card = cardRef.current;
        const innerCard = innerCardRef.current;
        const rotate = rotateCard(innerCard);
        // 对有放大效果的父元素添加事件委托，这样旋转的时候保证不会抖动
        // 不然会出现旋转后鼠标不在元素上，然后元素还原，鼠标又在元素上循环旋转抖动的情况
        card.addEventListener("mousemove", rotate);
        const leave = () => {
            innerCard.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
        card.addEventListener("mouseleave", leave);
        // 在组件卸载时移除滚动事件监听器
        return () => {
            card.removeEventListener("mousemove", rotate);
            card.removeEventListener("mouseleave", leave);
        };
    }, []);

    return (
        <div id="card" ref={cardRef}>
            <div className="card" ref={innerCardRef}>
                <img
                    src={require("../assets/104491469_p0_master1200.jpg")}
                    alt="自拍照"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        aspectRatio: '17 / 11',
                    }}
                />
                <div className="card-container">
                    <i
                        style={{
                            backgroundImage: 'url(./assets/Spotify.svg)',
                            display: 'inline-block',
                            height: '1.5rem',
                            width: '1.5rem',
                        }}
                    ></i>
                    <span style={{ marginLeft: '0.5rem' }}>Not Playing – Spotify</span>
                </div>
                <div className="card-content">
                    <h3>Mengke</h3>
                    <h5>Learner | Builder</h5>
                    <div className="social-links">
                        <div><i></i><span>FE Engineer @ MICO WORLD</span></div>
                        <div><i></i><span>Peiping, China</span></div>
                        <div><i></i><span>me@mengke.me</span></div>
                        <div style={{ justifyContent: 'space-between' }}>
                            <a href="https://github.com/mk965"><span>gh/mk965</span></a>
                            <span>|</span>
                            <a href="https://github.com/mk965"><span>in/mengke</span></a>
                            <span>|</span>
                            <a href="https://github.com/mk965"><span>juejin/Mengke</span></a>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
                        height: '0.375rem',
                    }}
                >
                </div>
            </div>
        </div>
    );
}

export default Card;