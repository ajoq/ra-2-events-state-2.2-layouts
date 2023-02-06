import styles from './index.module.css';

function ShopItem({ card }) {
    return (
        <div className={styles['products-item']}>
            <div className={styles['products-item-img']}>
                <img src={card.img} alt={card.name + ' ' + card.color} />
            </div>
            <div className={styles['products-item-title']}>{card.name}</div>
            <div className={styles['products-item-color']}>{card.color}</div>
            <div className={styles['products-item-price']}>${card.price}</div>
            <div className={styles['products-item-add-cart']}>Add to cart</div>
        </div>
    );
}

export default ShopItem;
