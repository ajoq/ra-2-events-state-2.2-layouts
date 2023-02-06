import React, { useState } from 'react';
import IconSwitch from '../IconSwitch';
import CardsView from '../CardsView';
import ListView from '../ListView';
import products from '../../data/products';
import './index.css';

function Store() {
    const [icon, setIcon] = useState('view_list');
    const [view, setView] = useState(<CardsView cards={products} />);

    const handleSwitch = (e) => {
        if (e.target.textContent === 'view_list') {
            setIcon('view_module');
            setView(<ListView items={products} />);
        } else {
            setIcon('view_list');
            setView(<CardsView cards={products} />);
        }
    };

    return (
        <div className="container">
            <IconSwitch icon={icon} onSwitch={handleSwitch} />
            {view}
        </div>
    );
}

export default Store;
