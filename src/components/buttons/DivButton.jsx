import React from "react";
import './Buttons.scss';

const DivButton = ({ className, text }) => <div className={"o-button " + className}>{text}</div>;

export default DivButton;