import React from "react";
import './Buttons.scss';

const Button = ({ className, text, action }) => <button className={"o-button " + className} onClick={action}>{text}</button>;

export default Button;