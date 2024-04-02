import AddFormMovie from "../components/AddFormMovie/AddFormMovie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    
        return (
        <div>
            <Navbar />
            <Main>
                <Hero />
                <Movies />
                <AddFormMovie />
            </Main>
            <Footer />
            </div>

        );
    
}
export default Home;