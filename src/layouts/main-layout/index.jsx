import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import HomePage from '../../layouts/main-layout/index';

const MainLayout = (props) => {
    return (
        <div className='max-h-[100vh] text-black container max-w-[1360px] mx-auto flex flex-col'>
            <Header/>
            {/* <HomePage/> */}
            <div className="flex-grow">
                {props?.children}
            </div>

            <Footer/>
        </div>
    )
}

export default MainLayout;
