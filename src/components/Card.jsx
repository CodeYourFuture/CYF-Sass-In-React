import React from "react";
import DivButton from './buttons/DivButton';
import Picture from './Picture';
import './Card.scss'

const Card = ({ id, heading, summary, picture, action, lazyLoading }) => (
        <a href={id} className="c-card">
            <h3 className="c-card__heading">{heading}</h3>
            <p className="c-card__summary">{summary}</p>
            <DivButton className="c-card__action" text={action + ' → '}></DivButton>
        <Picture picture={picture} block="c-card" lazyLoading={lazyLoading}></Picture>
        </a>
    );

export default Card;