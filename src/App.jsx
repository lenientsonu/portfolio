import { About, Footer, Header, Skills, Projects } from "./container";
import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

function App() {

    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
