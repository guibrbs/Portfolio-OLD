import React, { useState } from "react";
import Header from "../components/Header";

export default function Home({ mode }: { mode:any }){
    const [theme, setTheme] = useState(0)
    function setModel(){
        return mode(theme)
    }
    return(
        <div>
            {setModel()}
            <Header setProps={setTheme}/>
        </div>
    )
}