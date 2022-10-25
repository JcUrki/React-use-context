import React from "react";

export default function Main({ theme, text, auth }){
    return(
        <div className={theme}>
            <main>
                {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
        
                <p>{text.mainContent}</p>
            </main>
        </div>
    )
}