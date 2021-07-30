import Footer from '../handbook/Footer';
import { Space } from 'antd';
import '../../styles/home-page.css';

function HomePage() {
    return (
        <div>
            <div className="wrap-banner-img">
                <div className="banner-image">
                    <img src="https://uet.vnu.edu.vn/wp-content/uploads/2019/02/cover_N.png" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;