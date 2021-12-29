import React from "react";
import DivButton from './buttons/DivButton';
import Picture from './Picture';
import './Card.scss'

const Card = ({ id, heading, summary, picture, action }) => (
        <a href={id} className="c-card">
            <h3 className="c-card__heading">{heading}</h3>
            <p className="c-card__summary">{summary}</p>
            <DivButton className="c-card__action" text={action}></DivButton>
            <Picture picture={picture} className="c-card__picture"></Picture>
        </a>
    );

export default Card;