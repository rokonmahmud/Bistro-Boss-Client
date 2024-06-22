import { Banner } from "./Banner";
import PageTitle from "../Shared/PageTitle";
import PopulerMenu from "./PopulerMenu";


const Home = () => {
    return (
        <div>
            <Banner/>
            <PageTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}/>
            <PopulerMenu/>
            
        </div>
    );
};

export default Home;