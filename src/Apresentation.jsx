import React, {useState} from "react";
import './Apresentation.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [mouseOff1, setMouseOff1] = useState(true);
    const [mouseOff2, setMouseOff2] = useState(true);
    const [mouseOff3, setMouseOff3] = useState(true);

    return (
        <div>
            <h1 className={mouseOff1 ? "squish" : "hvr-wobble-vertical"} id={"test 1"}
                onMouseLeave={() => setMouseOff1(false)} style={{cursor: "default"}} onMouseOver={() => setMouseOff1(true)}>O</h1>
            <h1 className={mouseOff2 ? "squish together" : "hvr-wobble-vertical together"} id={"test 2"}
                onMouseLeave={() => setMouseOff2(false)} style={{cursor: "default"}} onMouseOver={() => setMouseOff2(true)}>L</h1>
            <h1 className={mouseOff3 ? props.trueMoviment ? "squish together movement" : "squish together" : props.trueMoviment ?
                "hvr-wobble-vertical movement together" : "hvr-wobble-vertical together"}
                id={"test 3"} onMouseLeave={() => setMouseOff3(false)} style={{cursor: "default"}} onMouseOver={() => setMouseOff3(true)}>Á
            </h1>
        </div>
    );
}
