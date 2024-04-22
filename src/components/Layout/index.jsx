import Sidebar from "../Sidebar"
import "./style.scss"
const Layout = (props) => {
    return(
        <div className="layout-container">
            <Sidebar />
            <div className="contant">
                {props.children}
            </div>
        </div>
    )
}
export default Layout