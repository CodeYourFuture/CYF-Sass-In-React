import React from "react";
import './Buttons.scss';

const LinkButton = ({ link, className, text }) => <a href={link} className={"o-button " + className}>{text}</a>;

export default LinkButton;