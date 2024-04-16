import cart from "../assets/images/cart-shopping-solid.svg";

const CartWidget = ({cantidad}) => {
    return (
        <>
            <button type="button" className="btn btn-light position-relative">
                <img src={cart} alt="Carrito" width={16} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black">{cantidad}</span>
            </button>
        </>
    )
}

export default CartWidget;