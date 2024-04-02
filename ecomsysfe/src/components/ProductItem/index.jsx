import style from './ProductItem.module.scss';

export default function ProductItem({ item }) {
    const handleAddToCart = () => {
        console.log(item.id);
    };

    return (
        <div className={style.product_container}>
            <img className={style.product_image} src={item.image} />
            <div className={style.product_infomation}>
                <span className={style.product_type}>{item.author || item.brand}</span>
                <span className={style.product_name}>{item.product.name}</span>
                <div className={style.product_price_container}>
                    <span className={style.product_price}>Price: ${item.product.price}</span>
                </div>
                <div className={style.button_container}>
                    <button className={style.button_add_to_cart} onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
