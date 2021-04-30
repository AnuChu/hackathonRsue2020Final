import React from "react";
import FadeInSection from "../FadeIn/FadeIn";
import {faChevronLeft, faChevronRight, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Contests() {
    return (
        <div className={"contests-page"}>
            <FadeInSection key={2}>

                <form action="" method="get">
                    <input name="s" placeholder="Поиск" type="search"/>
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>

                <div className={"title blue"}>Конкурсы и гранты</div>

                <div className={"blocks"}>

                    <div className={"blocks-description"}>
                        <div className={"b1"}>Наименование конкурса</div>
                        <div className={"b2"}>Прием заявок</div>
                        <div className={"b3"}>Статус конкурса</div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"description"}>

                            Конкурс на получение грантов РНФ по мероприятию «Проведение фундаментальных научных
                            исследований и поисковых научных исследований международными научными коллективами»
                            (совместно с Национальным исследовательским агентством Франции - ANR)
                        </div>

                        <div className={"reception"}>
                            <span className={"active"}> до 01.04.2021 17:00</span><br/>
                            <button>Подать заявку</button>
                        </div>

                        <div className={"status"}>
                            <div className={"status-s active"}>
                                Прием заявок
                            </div>
                            <div className={"status-s"}>
                                Экспертиза
                            </div>
                            <div className={"status-s"}>
                                Конкурс завершен
                            </div>
                        </div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"description"}>

                            Конкурс на получение грантов РНФ по мероприятию «Проведение фундаментальных научных
                            исследований и поисковых научных исследований международными научными коллективами»
                            (совместно с Национальным исследовательским агентством Франции - ANR)
                        </div>

                        <div className={"reception"}>
                            <span className={"active"}> до 01.04.2021 17:00</span><br/>
                            <button>Подать заявку</button>
                        </div>

                        <div className={"status"}>
                            <div className={"status-s"}>
                                Прием заявок
                            </div>
                            <div className={"status-s active-a"}>
                                Экспертиза
                            </div>
                            <div className={"status-s"}>
                                Конкурс завершен
                            </div>
                        </div>
                    </div>


                    <div className={"block-row"}>
                        <div className={"description"}>

                            Конкурс на получение грантов РНФ по мероприятию «Проведение фундаментальных научных
                            исследований и поисковых научных исследований международными научными коллективами»
                            (совместно с Национальным исследовательским агентством Франции - ANR)
                        </div>

                        <div className={"reception"}>
                            <span className={"active"}> до 01.04.2021 17:00</span><br/>
                            <button>Подать заявку</button>
                        </div>

                        <div className={"status"}>
                            <div className={"status-s "}>
                                Прием заявок
                            </div>
                            <div className={"status-s active-a"}>
                                Экспертиза
                            </div>
                            <div className={"status-s"}>
                                Конкурс завершен
                            </div>
                        </div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"description"}>

                            Конкурс на получение грантов РНФ по мероприятию «Проведение фундаментальных научных
                            исследований и поисковых научных исследований международными научными коллективами»
                            (совместно с Национальным исследовательским агентством Франции - ANR)
                        </div>

                        <div className={"reception"}>
                            <span className={"active"}> до 01.04.2021 17:00</span><br/>
                            <button>Подать заявку</button>
                        </div>

                        <div className={"status"}>
                            <div className={"status-s active"}>
                                Прием заявок
                            </div>
                            <div className={"status-s"}>
                                Экспертиза
                            </div>
                            <div className={"status-s"}>
                                Конкурс завершен
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