import LogoImage from "../../assets/Logo (1).svg"
import { sidebar_data } from "./data"
import { useLocation } from "react-router-dom"
import "./style.scss"

const Sidebar = () => {
    const { pathname } = useLocation()

    return (
        <div className="sideabar-container">
            <img src={LogoImage} alt="logo" />
            <div className="nav_items">
                {sidebar_data.map((El) =>
                    <div className={pathname === El.route ? "active_items" :"items"} key={El.id}>
                        <El.Icon active={pathname === El.route}/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Sidebar