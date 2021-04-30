import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome, faFileAlt, faUsers, faDesktop, faStar
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [

    {
        icon: <FontAwesomeIcon icon={faHome}/>,
        label: "Главная",
        path: "/",
    },
    {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        label: "Научные мероприятия",
        path: "/events"
    },
    {
        icon: <FontAwesomeIcon icon={faUsers}/>,
        label: "Команды и участники",
        path: "/people"
    },
    {
        icon: <FontAwesomeIcon icon={faStar}/>,
        label: "Конкурсы",
        path: "/contests"
    },
    {
        icon: <FontAwesomeIcon icon={faDesktop}/>,
        label: "Мониторинг",
        path: "/monitoring"
    }
];

export default navButtons;