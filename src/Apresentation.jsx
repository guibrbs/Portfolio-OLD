import React, {useState} from "react";
import './Apresentation.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    let test1 = document.getElementById("test 1");
    let test2 = document.getElementById("test 2");
    let test3 = document.getElementById("test 3");
    const [mouseOff1, setMouseOff1] = useState(true);
    const [mouseOff2, setMouseOff2] = useState(true);
    const [mouseOff3, setMouseOff3] = useState(true);

    if (test1) {
        test1.addEventListener("mouseover", function () {
            setMouseOff1(true);
        })
    }

    if (test2) {
        test2.addEventListener("mouseover", function () {
            setMouseOff2(true);
        })
    }
    if (test3) {
        test3.addEventListener("mouseover", function () {
            setMouseOff3(true);
        })
    }

    return (
        <div>
            <h1 className={mouseOff1 ? "squish" : "hvr-wobble-vertical"} id={"test 1"}
                onMouseLeave={() => setMouseOff1(false)}>O</h1>
            <h1 className={mouseOff2 ? "squish together" : "hvr-wobble-vertical together"} id={"test 2"}
                onMouseLeave={() => setMouseOff2(false)}>L</h1>
            <h1 className={mouseOff3 ? props.trueMoviment ? "squish together movement" : "squish together" : props.trueMoviment ?
                "hvr-wobble-vertical movement together" : "hvr-wobble-vertical together"}
                id={"test 3"} onMouseLeave={() => setMouseOff3(false)}>Á
            </h1>
        </div>
    );
}