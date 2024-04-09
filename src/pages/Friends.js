import BlogHeader from '../components/BlogHeader';
import "./Friends.css";

function FriendsItem({ title, description, imageUrl }) {
    return (
        <div className="friends-item">
            <div className="friends-card">
                <div className="friends-image">
                    <img src={imageUrl} alt="Project Image" />
                </div>
                <div className="friends-details">
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <a href="#">Visit →</a>
                </div>
            </div>
        </div>
    );
}

function Friend() {
    return (
        <>
            <BlogHeader title="Friends" description="My friends and the tech bloggers I recommend" />
            <div className="friend-list">
                <h3>My Friends</h3>
                <div className="friends-container">
                    <FriendsItem
                        title="23123"
                        description="我的朋友"
                        imageUrl="https://tc.mwm.moe/i/1/2023/10/28/653c76d30a5f7.webp"
                    />
                    <FriendsItem
                        title="1247"
                        description="我的朋友我的朋友我的朋友我的朋友我的朋友我的朋友我的朋友我的朋友我的朋友"
                        imageUrl="https://tc.mwm.moe/i/1/2023/10/28/653c76d30a5f7.webp"
                    />
                    {/* 更多的 FriendsItem 组件 */}
                </div>
            </div>
        </>
    )

}

export default Friend;