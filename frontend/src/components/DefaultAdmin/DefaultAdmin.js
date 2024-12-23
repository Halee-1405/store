import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

function DefaultAdmin({children}) {
    return ( 
        <div style={{backgroundColor: '#f1f1f1', display: 'flex'}}>
            <div><SideBar/></div>
            <div style={{flex: 1}}>
                <Header/>
                {children}
            </div>
            
        </div>
     );
}

export default DefaultAdmin;