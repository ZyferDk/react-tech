import React from 'react';
import { Layout, BackTop } from 'antd';

const { Footer } = Layout;



const AppFooter = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="google.com">TECH</a>
                </div>
                <ul className="socials">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <BackTop duration="1000">
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>

            Copyright © 2020 Tech
        </Footer>
    )
}

export default AppFooter;