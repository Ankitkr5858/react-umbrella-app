import React from "react";

const TimesIcon = props => {
  return (
    <img onClick={props.removeCurrentFile} className={`remove-icon ${props.class}`} src="src/assets/close.png" />
  );
};

export default TimesIcon;
