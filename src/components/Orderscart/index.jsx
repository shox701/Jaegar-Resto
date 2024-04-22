import "./orders.scss"
import lagmoImage from '../../assets/lagmon.png'
import trash from '../../assets/Trash.png'

const OrdersCart = (props) => {
    return(
        <div className="orders_container">
            <div className="header">
                <div className="content">
                    <img src={lagmoImage} alt="lagmon" className="orders_image"/>
                    <div className="order_text">
                        <h5 className="order_name">{props.title}</h5>
                        <p className="order_price">$ {Math.floor(props.price)}</p>
                    </div>
                </div>
                <div className="prices">
                    <div className="qty">{props.count}</div>
                    <h5 className="prduct_price">$ {Math.floor(props.price)}</h5>
                </div>
            </div>
            <div className="footer">
                <div className="inputs">
                    <input type="text" className="note_input" placeholder="Order Note..."/>
                </div>
                <div className="del_button" onClick={() => props.handleDeleteOrders(props.id)}>
                    <img className="delete_image" src={trash} alt="trash"/>
                </div>
            </div>
        </div>
    )
}
export default OrdersCart