import React from 'react';
import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWork from '../components/home/works';
import AppFaq from '../components/home/faq';
import AppPrice from '../components/home/pricing';
import AppContact from '../components/home/contact';
import AppFooter from '../components/common/footer';


const AppHome = () => {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWork />
            <AppFaq />
            <AppPrice />
            <AppContact />
            <AppFooter />
        </div>
    )
}

export default AppHome;
