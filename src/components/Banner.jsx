import YTBanner from '../images/YTBanner.jpeg'

const Banner = () => {
    return (
        <div className="banner">
            <img style={{ width: "100%", height: "300px" }} src={YTBanner} alt="" />
        </div>
    );
}

export default Banner;