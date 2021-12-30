import React from "react";
import Card from './Card';
import './CardList.scss';

const cards = require('../data/cards.json');

const CardList = () => <ol className="c-list">
    { cards.map((card, index) => {
            return <li className="c-list__item" key={index}>
                <Card
                    heading={card.heading}
                    summary={card.summary}
                    action={card.action}
                    picture={card.picture}
                    id={card.id}
                    lazyLoading={index > 2 ? "lazy": "eager"}
                />
            </li>
        })
    }
</ol>;

export default CardList;
