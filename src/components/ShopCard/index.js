import styles from './index.module.css';

function ShopCard({ card }) {
    return (
        <div className={styles['products-item']}>
            <div className={styles['products-item-content']}>
                <img src={card.img} alt={card.name + ' ' + card.color} />
                <div className={styles['products-item-text']}>
                    <div className={styles['products-item-text-title']}>
                        {card.name}
                    </div>
                    <div className={styles['products-item-text-color']}>
                        {card.color}
                    </div>
                    <div className={styles['products-item-text-bottom']}>
                        <div
                            className={
                                styles['products-item-text-bottom-price']
                            }
                        >
                            ${card.price}
                        </div>
                        <div
                            className={
                                styles['products-item-text-bottom-add-cart']
                            }
                        >
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCard;
