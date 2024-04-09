import BlogHeader from "../components/BlogHeader";
import "./Gallery.css";

function GalleryItem() {
    return (
        <div className="gallery-item-card">
            <div>
                <img src="https://www.mengke.me/_next/image?url=https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F407390886_1426562567957583_1158448105855888089_n.jpg%3F_nc_cat%3D108%26ccb%3D1-7%26_nc_sid%3D18de74%26_nc_ohc%3DBaKtNAUBySEAb7Capu3%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DANo9K5cEAAAA%26oh%3D00_AfA2bEOwPyjfi72EqrbL_2XbowNkNt7yQ1pLahQzON0GXw%26oe%3D66197133&w=1200&q=75"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    alt="" />
            </div>
            <div className="gallery-card-details">
                <div>
                    <p>2023/12/4 17:05:20</p>
                    <p>Photo by _mk965</p>
                </div>
                <a href="/123">View post →</a>
            </div>
        </div>
    )
}

function Gallery() {
    return (
        <div style={{marginTop: "3rem"}}>
            <GalleryItem />
        </div>
    );
}

export default Gallery;