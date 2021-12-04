import React from "react";
import './InfoScroll.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// eslint-disable-next-line
export default props => {
    return (
        <div className={props.movement ? "scroll--disable" : "scroll"}>
            <p className={"letters--scroll"}>scroll</p>
            <ArrowDownwardIcon className={"link hang-on-hover"} style={{ fontSize: 15 }} />
        </div>
    )
}