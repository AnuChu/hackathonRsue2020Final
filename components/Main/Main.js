import {faArrowRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import FadeInSection from "../FadeIn/FadeIn";
import {Bar} from 'react-chartjs-2';

export default function Main() {

    const state = {
        labels: ['Информационная безопасность', 'Анализ данных', 'Программирование'],
        type: 'horizontalBar',
        datasets: [
            {
                label: 'Count',

                backgroundColor: ['rgba(28,83,244,0.6)', 'rgba(124,43,227,0.6)', 'rgba(227,176,43,0.6)'],
                borderColor: ['rgba(28,83,244,1)', 'rgba(124,43,227,1)', 'rgba(227,176,43,1)'],
                borderWidth: 1,
                data: [500, 350, 400, 100],
                hoverBackgroundColor: ['rgba(28,83,244,1)', 'rgba(124,43,227,1)', 'rgba(227,176,43,1)'],
                maxBarThickness: 120,
            }

        ]
    }


    return (
        <div className={"main-page"}>
            <FadeInSection key={1}>
                <div className={"hello-text"}>Привет, Username!</div>

                <div className={"blocks"}>
                    <div className={"block-work"}>
                        <div className={"number"}>12</div>
                        <div className={"text"}>Статей написано</div>
                    </div>
                    <div className={"block-work"}>
                        <div className={"number"}>3</div>
                        <div className={"text"}>Статей прочитано</div>
                    </div>
                    <div className={"block-work"}>
                        <div className={"number"}>5</div>
                        <div className={"text"}>Готовых статей</div>
                    </div>
                </div>

                <div className={"subtitle-button"}>Мои работы <div className={"add"}>
                    <div className={"add-img"}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div></div>


                <div className={"blocks"}>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text"}>Python</div>
                        </div>
                        <img src={"/images/articles/1.svg"} alt={""}/>
                        <div className={"text"}>Python, каким бы я хотел его видеть</div>
                        <div className={"date"}>
                            <img src={"/images/icon/calendar.svg"} width={"20px"}
                                 height={"20px"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text"}>Нейросети</div>
                        </div>
                        <img src={"/images/articles/2.svg"} alt={""}/>
                        <div className={"text"}>10 приложений для изучения Python на Android-устройствах</div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"} width={"20px"}
                                                     height={"20px"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text"}>Исследование</div>
                        </div>
                        <img src={"/images/articles/3.svg"} alt={""}/>
                        <div className={"text"}>Нейросети: как искусственный интеллект помогает в бизнесе и жизни</div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"} width={"20px"}
                                                     height={"20px"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"arrow-next"}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>

                </div>

                <div className={"subtitle"}>Научные мероприятия</div>
                <div className={"blocks"}>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text b"}>Docker</div>
                        </div>
                        <img src={"/images/events/1.svg"} alt={""}/>
                        <div className={"text"}>Docker, каким бы я хотел его видеть</div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text b"}>Java</div>
                        </div>
                        <img src={"/images/events/2.svg"} alt={""}/>
                        <div className={"text"}>10 приложений для изучения Java на Android-устройствах</div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text b"}>ML</div>
                        </div>
                        <img src={"/images/events/3.svg"} alt={""}/>
                        <div className={"text"}>Нейросети: как искусственный интеллект помогает в бизнесе и жизни</div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"arrow-next"}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                <div className={"subtitle"}>Приоритетные направления</div>

                <div className={"graf"}>
                    <Bar
                        data={state}
                        options={{
                            legend: {
                                display: false,
                                position: 'right'
                            }
                        }}
                    />
                </div>

            </FadeInSection>
        </div>
    )
}