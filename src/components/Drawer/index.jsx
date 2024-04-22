import Drawer from '@mui/material/Drawer';
import "./style.scss"
import { PaytmentMethodData } from './data';
import { useState } from 'react';

const DrowerComponenet = ({ open, setOpen }) => {

    const [active, setActive] = useState(0)
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
                sx: {
                    background: "#1F1D2B",
                    width: "570px"
                }
            }}
        >
            <div className="drawer_container">
                <h1>Payment</h1>
                <p className="text">3 payment method available</p>
                <p className="method_name">Payment Method</p>
                <div className="payment_methods">
                    {PaytmentMethodData.map((Item) => 
                      <div 
                        onClick={() => setActive(Item.id)}
                        className={active === Item.id ? "active_method" : "method"}
                      >
                        <Item.Image active={active === Item.id}/>
                        <p className="methods_name">{Item.name}</p>
                      </div>
                    )}

                </div>

                <div className="payment_inputs">
                    <div className="inputs">
                        <label>Cardholder Name</label>
                        <input type="text" className="input" placeholder='Levi Ackerman'/>
                    </div>
                    <div className="inputs">
                        <label>Card number</label>
                        <input type="number" className="input" placeholder='2564 1421 0897 1244' />
                    </div>
                    <div className="additional">
                        <div className="inputs">
                            <label>Expiration Date</label>
                            <input type="number" className="input" placeholder='02/2022' />
                        </div>
                        <div className="inputs">
                            <label>CVV</label>
                            <input type="number" className="input" placeholder='***' />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button  onClick={() => setOpen(false)}>Cancel</button>
                    <button>Confirm Payment</button>
                </div>
            </div>
        </Drawer>
    )
}
export default DrowerComponenet