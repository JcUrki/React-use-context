import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = 'es';

//Se tiene que importar porque es un objeto
const translation = {
    es:{
        headerTitle: 'Mi aplicación SIN context API',
        headerSubtitle: 'Mi cabecera',
        headerLight: 'Claro',
        headerDark: 'Oscuro',
        buttonLogin: 'Iniciar sesión',
        buttonLogout: 'Cerrar sesión',
        mainWelcome: 'Bienvenid@, invitad@',
        mainHello: 'Hola, usuari@',
        mainContent: 'Mi contenido principal',
        footerTitle: 'Mi pie de página',
    }, 
    en:{
        headerTitle: 'My app without context',
        headerSubtitle: 'My header',
        headerLight: 'Light',
        headerDark: 'Dark',
        buttonLogin: 'Login',
        buttonLogout: 'Logout',
        mainWelcome: 'Welcome, guest',
        mainHello: 'Hello, user',
        mainContent: 'My main content',
        footerTitle: 'My footer'
    }
}

const LanguageProvider = ({ children }) =>{
    const [language, setLanguage]= useState(initialLanguage);
    const [text, setText]= useState(translation[language]);

    const handleLanguage = (e) => {
        if(e.target.value === 'es'){
            setLanguage('es')
            setText(translation.es)
        }else{
            setLanguage('en')
            setText(translation.en)
        }
    }

    const data = {
        language,
        text,
        handleLanguage,
        translation
    }
    
    return(
        <LanguageContext.Provider value = {data}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageProvider}
export default LanguageContext