import Layout from "../Layout"
import SearchIcon from '@mui/icons-material/Search';
import { OrdersFilterButtons, data, filter_data } from "./data";
import { useEffect, useState } from "react";
import "./style.scss"
import OrdersCart from "../Orderscart";
import DrowerComponenet from "../Drawer";

const HomeComponent = () => {
    const [filter, setFilter] = useState(null)
    const [filtered_data, setFilteredData] = useState(data)
    const [inputValue, setInputValue] = useState('')
    const [activeOrderButton, setActiveorderButton] = useState(2)
    const [orders, setOrders] = useState([])
    const [open, setOpen] = useState(false)

    const handleActiveFilter = id => {
        setFilter(id)
        if (id !== null) {
            const filtered = data.filter((item) => item.filter === id)
            setFilteredData(filtered)
        } else {
            setFilteredData(data)
        }
    }

    const handleOrders = (clickedProduct) => {
        clickedProduct.price = parseFloat(clickedProduct.price);

        const existingOrderIndex = orders.findIndex(order => order.id === clickedProduct.id);

        if (existingOrderIndex !== -1) {
            const updatedOrders = [...orders];
            updatedOrders[existingOrderIndex].count += 1;
            updatedOrders[existingOrderIndex].price += clickedProduct.price;
            setOrders(updatedOrders);
        } else {
            const newOrder = { ...clickedProduct, count: 1 };
            setOrders([...orders, newOrder]);
        }
    }

    const handleDeleteOrders = (id) => {
        const deleted = orders.filter((item) => item.id !== id)
        setOrders(deleted)
    }

    useEffect(() => {
        const input = inputValue.toLowerCase()
        const search = data.filter((item) => item.name.toLowerCase().includes(input))
        setFilteredData(search)
    }, [inputValue])

    const total_price = orders.reduce((acc, item) => acc + Number(item.price), 0)
    console.log(total_price)

    return (
        <Layout>
            <div className="home_container">
                <div className="products_container">
                    <div className="products_nav">
                        <div className="products_text">
                            <h1>Jaegar Resto</h1>
                            <p>Tuesday, 2 Feb 2021</p>
                        </div>
                        <div className="products_input">
                            <SearchIcon sx={{ color: "#fff" }} />
                            <input
                                type="text"
                                className="search_input"
                                placeholder="Search for food, coffe, etc.."
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="products_filter">
                        {filter_data.map((item) =>
                            <p
                                onClick={() => handleActiveFilter(item.id)}
                                className={filter === item.id ? "active_filter_name" : "filter_name"}
                                key={item.id}
                            >
                                {item.name}
                            </p>
                        )}
                    </div>

                    <div className="products_content">
                        <h4 className="products_title">Choose Dishes</h4>
                        <div className="products">
                            {!filtered_data.length ?
                                (<h1>Nothing found</h1>) :
                                filtered_data.map((item) =>
                                    <div className="products_cart" key={item.id} onClick={() => handleOrders(item)}>
                                        <img src={item.image} className="products_image" />
                                        <h5 className="products_name">{item.name}</h5>
                                        <p className="products_price">$ {item.price}</p>
                                        <p className="products_bowl">{item.dish} Bowls available</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="cart_container">
                    <h1 className="order_id">Orders #34562</h1>
                    <div className="orders_filters">
                        {OrdersFilterButtons.map((item) =>
                            <button key={item.id}
                                className={activeOrderButton === item.id ?
                                    "active_order_filter_button" :
                                    "order_filter_button"
                                }
                                onClick={() => setActiveorderButton(item.id)}
                            >
                                {item.name}
                            </button>
                        )}
                    </div>
                    <div className="orders_header">
                        <p className="header_name">Item</p>
                        <div className="header_name_wrapper">
                            <p className="header_name">Qty</p>
                            <p className="header_name">Price</p>
                        </div>
                    </div>
                    <div className="orders">
                        {orders.length === 0 ?
                            <h1 style={{ color: "red", textAlign: "center", marginTop: "30%" }}>No data</h1> :
                            orders.map((item) =>
                                <OrdersCart
                                    title={item.name}
                                    id={item.id}
                                    price={item.price}
                                    handleDeleteOrders={handleDeleteOrders}
                                    count={item.count}
                                />
                            )}
                    </div>
                    <div className="buy_orders">
                        <div className="text_contet">
                            <p>Discount</p>
                            <p>$0</p>
                        </div>
                        <div className="text_contet">
                            <p>Sub total</p>
                            <p> $ {total_price}</p>
                        </div>
                        <button
                            className="payment"
                            onClick={() => setOpen(true)}
                            disabled={!orders.length}
                        >
                            Continue to Payment
                        </button>
                        <DrowerComponenet open={open} setOpen={setOpen}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default HomeComponent