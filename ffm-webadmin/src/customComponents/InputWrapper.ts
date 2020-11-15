import React from "react";

const InputWrapper = ({children, wrapperType = "div", wrapperOptions = {}, addDiv = false, ...props}: any) => {
    const childrenWithProps = React.Children.map(children, child => {
        let new_child = React.cloneElement(child, {...props});
        if (addDiv) {
            new_child = React.createElement("div", {}, new_child);
        }
        return new_child;
    });

    return React.createElement(wrapperType, wrapperOptions, childrenWithProps);
};

export default InputWrapper;
