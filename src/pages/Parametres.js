import React from 'react';
import NavigationDashboard from '../components/NavigationDashboard';


const Parametre = () => {
    return (
        <body>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            
            <div className="page_parametre">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Paramètre</h2>
                    <div className="rechLogo">
                        <div className="input_box">
                            <input type="search" placeholder="Rechercher..."/>
                            <span className="search">
                                <i class="uil uil-search search-icon"></i>
                            </span>
                        </div>
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>
                <div className="bas_de_page">
                    <NavigationDashboard />                      
                    <div className="Compte">
                        <div className="one">
                            <div className="one_haut">
                                sécurité
                            </div>
                            <div className="one_milieu">
                                <p className="text_one_milieu">Signaler un problème</p>
                                <div className='bouton_submit'>
                                    <button className="bouton_modifierMDP" type="submit">Modifier le nom</button>
                                </div>
                            </div>
                            <div className="one_bas">
                            <div className='bouton_submit'>
                                    <button className="bouton_modifierMDP" type="submit">Modifier le nom</button>
                                </div>
                            </div>
                        </div>
                        <div className="two">
                            coucou
                        </div>
                        <div className="three">
                            coucou
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Parametre;