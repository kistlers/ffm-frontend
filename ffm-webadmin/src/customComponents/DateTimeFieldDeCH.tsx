import * as React from "react";
import { DateField, DateFieldProps } from "react-admin";
import { dateTimeOptionsDeCH } from "../resources/Common";

const DateTimeFieldDeCH: React.FC<Omit<DateFieldProps, "showTime" | "locales">> = props =>
    <DateField {...props} showTime locales="de-CH" options={dateTimeOptionsDeCH}/>;

export default DateTimeFieldDeCH;
