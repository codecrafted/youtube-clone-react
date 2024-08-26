import youtube_premium_logo from '../../assets/images/YouTube_Premium_logo.png';
import image_profile from '../../assets/images/image-profile.png';

const FrameHeader = () => {

    return <>
        <nav className="bar-top">
            <div className="menu-bar-left">
                <i className="icon-menu-left-burger"></i>
                <img src={youtube_premium_logo} alt="" />
                <span>CO</span>
            </div>
            <div className="search-bar hidden">
                <svg className="iconBack" viewBox="0 0 20 20">
                    <path d="M6.18 7L10 10.82 13.82 7 15 8.17l-5 5-5-5z"></path>
                </svg>
                <input type="text" placeholder="Buscar" className="box-search" />
                <div className="search-button">
                    <i className="button-search icon-search"></i>
                </div>
            </div>
            <div className="menu-right">
                <nav className="menu-right-items">
                    <i className="icon-menu-righ icon-search"></i>
                    <i className="icon-menu-righ icon-video_call"></i>
                    <i className="icon-menu-righ icon-stack"></i>
                    <i className="icon-menu-righ icon-bell"></i>
                    <img src={image_profile} alt="" className="icon-menu-righ image-profile" />
                </nav>
            </div>
        </nav>
    </>
}
export default FrameHeader;