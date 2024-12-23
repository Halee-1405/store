import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

function Admin({children}) {
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

export default Admin;