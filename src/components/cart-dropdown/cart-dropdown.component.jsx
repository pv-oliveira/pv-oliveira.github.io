import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

export default function CartDropdown() {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-itens'/>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}