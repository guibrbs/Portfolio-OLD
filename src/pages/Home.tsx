import React, { useState } from "react";
import Header from "../components/Header";
import ShowArea from "../components/ShowArea";

export default function Home({ mode }: { mode:any }){
    const [theme, setTheme] = useState(false)
    function setModel(){
        return mode(theme)
    }
    return(
        <>
            {setModel()}
            <Header setProps={setTheme}/>
            <ShowArea props={theme}/>
        </>
    )
}