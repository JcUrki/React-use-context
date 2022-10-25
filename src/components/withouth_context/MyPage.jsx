import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
//Estados inicializados
const initialTheme = 'light';
const initialLanguage = 'es';
const initialAuth= null;

const translation = {
    es:{
        headerTitle: 'Mi aplicación SIN context API',
        headerSubtitle: 'Mi cabecera',
        headerLight: 'Claro',
        headerDark: 'Oscuro',
        buttonLogin: "Iniciar sesión",
        buttonLogout: "Cerrar sesión",
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

export default function MyPage(){
    //Estados
    const [theme, setTheme]= useState(initialTheme);
    const [language, setLanguage]= useState(initialLanguage);
    const [text, setText]= useState(translation[language]);
    const [auth, setAuth]= useState(initialAuth);

    //Iterar con eventos

    //Claro a oscuro
    const handleTheme = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'light'){
            setTheme('light')
        } else{
            setTheme('dark')
        }
    }

    //Cambiar lenguaje
    const handleLanguage = (e) => {
        if(e.target.value === 'es'){
            setLanguage('es')
            setText(translation.es)
        }else{
            setLanguage('en')
            setText(translation.en)
        }
    }

    //Simular inicio se sesiión
    const handleAuth = () => {
        if(auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
    }

    return(
        <div className='my-page'>
            <Header theme={theme} handleTheme={handleTheme}
            text={text} handleLanguage={handleLanguage} auth={handleAuth}  handleAuth={handleAuth}/>
            <Main theme={theme} text={text} auth={auth}/>
            <Footer theme={theme} text={text}/>
        </div>
    )
}