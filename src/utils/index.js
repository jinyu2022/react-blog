/**动态打字机效果
 * @param {HTMLElement} element 要显示文字的元素
 * @param {String} txt 要显示的文字
 * @param {String} type 打字类型，write:打字，delete:删除，默认write
 * @param {Number} speed 打字速度，默认50ms，删除速度为打字速度的3倍
 */
function typewriter(element, txt, type = "write", speed = 50) {
    let i = 0;
    return new Promise((resolve) => {
        function write() {
            if (i < txt.length) {
                element.innerHTML += txt.charAt(i);
                i++;
                setTimeout(write, speed);
            } else {
                resolve();
            }
        }
        function deleteText() {
            let len = element.textContent.length;
            if (len > 0) {
                element.innerHTML = element.innerHTML.slice(0, -1);
                len--;
                setTimeout(deleteText, speed / 3);
            } else {
                resolve();
            }

        }
        if (type === "delete") {
            return deleteText();
        } else if (type === "write") {
            return write();
        } else {
            throw new Error("type参数错误");
        }
    }
    );
}

/**
 * 图片放大功能
 * @param {String} selector 元素，不包含img标签，默认为img
 * @example
 * zoomImage("#root") // 为所有#root下的img标签添加放大功能
 */
function zoomImage(selector = "") {// 创建一个图片放大样式并添加到页面中
    const style = document.createElement('style');
    style.textContent = `
        /* 遮罩层样式 */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: all 0.3s ease-in-out;
            opacity: 0;
        }
    
        /* 放大图片容器样式 */
        .zoom-container {
            position: relative;
            max-width: 100%;
            max-height: 100%;
        }
    
        /* 放大图片样式 */
        .zoom-image {
            width: 100%;
            height: 100%;
        }
    
        /* 关闭按钮样式 */
        /*.close-button {
            position: absolute;
            top: 0;
            right: 0;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
        }*/
    `;
    document.head.appendChild(style);

    // 监听所有图片的点击事件
    const elements = document.querySelectorAll(`${selector} img`)
    // 保存事件处理器的引用
    const handlers = new Map();
    elements.forEach((img) => {
        console.log(img);
        const handler = (event) => {

            /**遮罩层*/
            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            // 当点击放大的图片时，移除遮罩层
            overlay.onclick = () => document.body.removeChild(overlay);

            /** 放大图片容器 */
            const zoomContainer = document.createElement('div');
            zoomContainer.className = 'zoom-container';

            // 创建放大图片
            const zoomImage = document.createElement('img');
            zoomImage.src = event.target.src;
            zoomImage.className = 'zoom-image';

            // 创建关闭按钮
            // const closeButton = document.createElement('span');
            // closeButton.textContent = '×';
            // closeButton.className = 'close-button';

            // // 当点击关闭按钮时，移除遮罩层
            // closeButton.addEventListener('click', () => {
            //   document.body.removeChild(overlay);
            // });

            // 将放大图片和关闭按钮添加到放大图片容器中
            zoomContainer.appendChild(zoomImage);
            // zoomContainer.appendChild(closeButton);

            // 将放大图片容器添加到遮罩层中
            overlay.appendChild(zoomContainer);

            // 将遮罩层添加到页面中
            document.body.appendChild(overlay);

            // 添加一个延迟，以便过渡动画可以播放
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, 0);
        };

        img.addEventListener('click', handler);
        handlers.set(img, handler);
    });
        // 返回一个函数，这个函数会在调用它时移除所有添加的事件监听器
        return () => {
            console.log("移除监听器");
            elements.forEach((img) => {
                img.removeEventListener('click',handlers.get(img));
            });
        };
    }

/**
 * 防抖函数
 * @param {Function} func 
 * @param {Number} delay 
 * @returns 
 */
function debounce(func, delay) {
            let timer;
            return function () {
                const context = this;
                const args = arguments;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    func.apply(context, args);
                }, delay);
            };
        }
export { typewriter, zoomImage, debounce };