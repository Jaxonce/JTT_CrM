import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import NavigationDashboard from '../components/NavigationDashboard';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });
  
  const events = [
    
  ];

    


const Calendrier = () => {

    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }
    const [newEvent, setNewEvent] = useState({title: "", start: "", end:""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_calendrier">
                {/*Create a calendar page*/}
                <div className="haut_de_page">
                    <h2 className="titre">Calendrier</h2>
                    <link href='fullcalendar/main.css' rel='stylesheet' />
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
                    <div className="Calendrier">
                        <h2 className="Titre">Ajouter un ??v??nement
                            <div className="mini_formulaire_evenement">
                                <input className="ajout_input" type="text" placeholder="Ajoutez un titre" style={{height: "20px", width: "100%", marginRight: "10px"}} 
                                    value={newEvent.Titre} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
                                <DatePicker className="ajout_input" placeholderText="Date de d??but" style={{height: "20px", width: "100%", marginRight: "10px"}}
                                selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
                                <DatePicker className="ajout_input" placeholderText="Date de fin" style={{height: "20px", width: "100%"}}
                                selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
                            </div>
                            <button className="bouton_ajout" onClick={handleAddEvent}>
                                <p>Ajouter l'??v??nement</p>
                            </button>
                        </h2>
                        <Calendar localizer={localizer} events={allEvents} 
                        startAccessor="start" endAccessor="end" style={{height: "100%", width:"99%"}}/>
                    </div>
                </div>
            </div>
        </body>
    );
};


export default Calendrier;