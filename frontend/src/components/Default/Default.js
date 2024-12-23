import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function Default({children}) {
    return ( 
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
     );
}

export default Default;