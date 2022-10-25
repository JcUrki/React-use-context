import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";

export default function MainContext(){
    const {theme} = useContext(ThemeContext);
    const {text} = useContext(LanguageContext);
    const {auth} = useContext(AuthContext);

    return(
        <div className={theme}>
            <main>
                {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
        
                <p>{text.mainContent}</p>
            </main>
        </div>
    )
}