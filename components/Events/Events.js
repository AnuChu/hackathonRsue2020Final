import React from "react";
import FadeInSection from "../FadeIn/FadeIn";
import {faChevronLeft, faChevronRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Events() {
    return (
        <div className={"event-page"}>
            <FadeInSection key={2}>
                <div className={"title blue"}>Научные мероприятия</div>

                <div className={"blocks"}>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Хакатон</div>
                            </div>
                            <img src={"/images/events/1.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Python, каким бы я хотел его видеть</div>
                            <div className={"about"}>Всем известно, что мне не нравится третья версия Python и то, в
                                каком
                                направлении развивается этот язык программирования. За последние несколько месяцев я
                                получил
                                много писем с вопросами о моём видении развития Python и решил поделиться своими мыслями
                                с
                                сообществом, чтобы, по возможности, дать пищу для размышлений будущим разработчикам
                                языка.
                            </div>
                            <div className={"date"}>
                                <img src={"/images/icon/calendar.svg"} width={"20px"}
                                     height={"20px"}/> 28.11.2020
                            </div>
                        </div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Разработка</div>
                            </div>
                            <img src={"/images/events/2.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>10 приложений для изучения Python на Android-устройствах</div>
                            <div className={"about"}>Всем известно, что мне не нравится третья версия Python и то, в
                                каком
                                направлении развивается этот язык программирования. За последние несколько месяцев я
                                получил
                                много писем с вопросами о моём видении развития Python и решил поделиться своими мыслями
                                с
                                сообществом, чтобы, по возможности, дать пищу для размышлений будущим разработчикам
                                языка.
                            </div>
                            <div className={"date"}>
                                <img src={"/images/icon/calendar.svg"} width={"20px"}
                                     height={"20px"}/> 28.11.2020
                            </div>
                        </div>
                    </div>


                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Конкурс</div>
                            </div>
                            <img src={"/images/events/3.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Нейросети: как искусственный интеллект помогает в бизнесе и жизни
                            </div>
                            <div className={"about"}>В работе Oxford Martin School 2013 года говорилось о том, что 47%
                                всех
                                рабочих мест может быть автоматизировано в течение следующих 20 лет. Основным драйвером
                                этого процесса является применение искусственного интеллекта, работающего с большими
                                данными, как более эффективной замены человеку.
                            </div>
                            <div className={"date"}>
                                <img src={"/images/icon/calendar.svg"} width={"20px"}
                                     height={"20px"}/> 28.11.2020
                            </div>
                        </div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Web конференция</div>
                            </div>
                            <img src={"/images/articles/1.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Создание дизайна мобильного приложения с Figma</div>
                            <div className={"about"}>
                                Вебинар "Создание дизайна мобильного приложения с Figma" состоится 28 октября 2020 года
                                в 19:00 (мск).<br/>
                                Мобильные устройства - телефоны, планшеты, другие гаджеты - стали неотъемлемой частью
                                нашей жизни. Разрешение их экранов могут варьироваться от 200 до 3000+ пикселей, что
                                добавляет пикантности процессу разработки дизайна.
                            </div>
                            <div className={"date"}>
                                <img src={"/images/icon/calendar.svg"} width={"20px"}
                                     height={"20px"}/> 28.11.2020
                            </div>
                        </div>
                    </div>


                    <div className={"pagination"}>
                        <div className={"arrow"}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                        <div className={"link active"}>
                            1
                        </div>
                        <div className={"link"}>
                            2
                        </div>
                        <div className={"link"}>
                            3
                        </div>
                        <div className={"link"}>
                            ...
                        </div>
                        <div className={"link"}>
                            50
                        </div>
                        <div className={"arrow active"}>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    )
}