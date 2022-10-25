import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";

export default function FooterContext(){
    const {theme} = useContext(ThemeContext);
    const {text} = useContext(LanguageContext);

    return(
        <div className={theme}>
            <footer>
                <h3>{text.footerTitle}</h3>
            </footer>
        </div>
    )
}