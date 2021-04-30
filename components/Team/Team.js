import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FadeInSection from "../FadeIn/FadeIn";
import Link from "next/link";

export default function Team() {
    return (
        <FadeInSection key={1}>
            <div className={"team-page"}>
                <Link href={"/monitoring"}>
                <div className={"prev"}>
                    <FontAwesomeIcon icon={faChevronLeft}/> Назад
                </div>
                </Link>
                <div className={"team-name"}>
                    CyberFarsh
                </div>

                <div className={"blocks"}>
                    <div className={"block-work"}>
                        <div className={"number"}>4</div>
                        <div className={"text"}>Участий<br/> в конкурсах</div>
                    </div>
                    <div className={"block-work"}>
                        <div className={"number"}>3</div>
                        <div className={"text"}>Выигранных<br/> грантов</div>
                    </div>
                    <div className={"block-work"}>
                        <div className={"number"}>5/5</div>
                        <div className={"text"}>Количество<br/>
                            участнпиков
                        </div>
                    </div>
                </div>

                <div className={"mtitle"}>
                    Активность
                </div>
                <div className={"minititle"}>
                    Участвует сейчас
                </div>

                <div className={"blocks"}>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Хакатон</div>
                            </div>
                            <img src={"/images/events/1.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text-b"}>ЦИФРОВОЙ ПРОРЫВ 2020</div>
                            <div className={"date-b"}>
                                <img src={"/images/icon/calendar.svg"} width={"20px"}
                                     height={"20px"}/> Работа начата: 28.11.2020
                            </div>

                            <div className={"prize"}>
                                Призовые
                            </div>

                            <div className={"block-row b"}>
                                <div className={"blocks"}>
                                    <div className={"block-work b"}>
                                        <div className={"number"}>750 000</div>
                                        <div className={"text-t"}>1-е место</div>
                                    </div>
                                    <div className={"block-work b"}>
                                        <div className={"number"}>500 000</div>
                                        <div className={"text-t"}>2-е место</div>
                                    </div>
                                    <div className={"block-work b"}>
                                        <div className={"number"}>250 000</div>
                                        <div className={"text-t"}>3-е место</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"minititle"}>
                    Участвовала
                </div>

                <div className={"blocks"}>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text b"}>Docker</div>
                        </div>
                        <img src={"/images/events/1.svg"} alt={""}/>
                        <div className={"text"}>Docker, каким бы я хотел его видеть</div>
                        <div className={"results"}>
                            Победитель (1-е место)
                        </div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text b"}>Java</div>
                        </div>
                        <img src={"/images/events/2.svg"} alt={""}/>
                        <div className={"text"}>10 приложений для изучения Java на Android-устройствах</div>
                        <div className={"results"}>
                            Участник
                        </div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"block"}>
                        <div className={"type"}>
                            <div className={"type-text b"}>ML</div>
                        </div>
                        <img src={"/images/events/3.svg"} alt={""}/>
                        <div className={"text"}>Нейросети: как искусственный интеллект помогает в бизнесе и жизни</div>
                        <div className={"results"}>
                            Победитель (2-е место)
                        </div>
                        <div className={"date"}><img src={"/images/icon/calendar.svg"}/> 28.11.2020
                        </div>
                    </div>

                    <div className={"arrow-next"}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>

                </div>

                <div className={"mtitle b"}>
                    Состав
                </div>

                <div className={"blocks"}>

                    <div className={"block-row team leader"}>
                        <div className={"img-place team leader"}>
                            <img src={"/images/person/4.svg"} alt={""}/>

                        </div>
                        <div className={"who"}>
                            <div className={"name"}>
                                Артур Морган
                            </div>
                            <div className={"competence"}>
                                <div className={"text"}> Научный руководитель
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={"block-row team"}>
                        <div className={"img-place team"}>
                            <img src={"/images/person/2.svg"} alt={""}/>

                        </div>
                        <div className={"who"}>
                            <div className={"name"}>
                                Рындин Денис <span className={"post"}> Капитан
                            </span>
                            </div>
                            <div className={"competence"}>
                                <div className={"text"}> Компетенции:
                                </div>

                                <div className={"type-who python"}> Python</div>
                                <div className={"type-who django"}> Django</div>
                                <div className={"type-who c"}> C#</div>

                            </div>
                        </div>

                    </div>

                    <div className={"block-row team"}>
                        <div className={"img-place team"}>
                            <img src={"/images/person/5.svg"} alt={""}/>

                        </div>
                        <div className={"who"}>
                            <div className={"name"}>
                                Владимиров Александр <span className={"post"}> Участник
                            </span>
                            </div>
                            <div className={"competence"}>
                                <div className={"text"}> Компетенции:
                                </div>

                                <div className={"type-who python"}> Python</div>
                                <div className={"type-who js"}> JavaScript</div>
                                <div className={"type-who c"}> C#</div>

                            </div>
                        </div>

                    </div>

                    <div className={"block-row team"}>
                        <div className={"img-place team"}>
                            <img src={"/images/person/3.svg"} alt={""}/>

                        </div>
                        <div className={"who"}>
                            <div className={"name"}>
                                Юров Ярослав <span className={"post"}> Участник
                            </span>
                            </div>
                            <div className={"competence"}>
                                <div className={"text"}> Компетенции:
                                </div>

                                <div className={"type-who django"}> Django</div>
                                <div className={"type-who cc"}> C++</div>
                                <div className={"type-who python"}> Python</div>

                            </div>
                        </div>

                    </div>

                    <div className={"block-row team"}>
                        <div className={"img-place team"}>
                            <img src={"/images/person/1.svg"} alt={""}/>

                        </div>
                        <div className={"who"}>
                            <div className={"name"}>
                                Чудак Анна <span className={"post"}> Участник
                            </span>
                            </div>
                            <div className={"competence"}>
                                <div className={"text"}> Компетенции:
                                </div>

                                <div className={"type-who htmlcss"}> HTML/CSS</div>
                                <div className={"type-who react"}> React.js</div>
                                <div className={"type-who js"}> JavaScript</div>

                            </div>
                        </div>

                    </div>

                    <div className={"block-row team"}>
                        <div className={"img-place team"}>
                            <img src={"/images/person/6.svg"} alt={""}/>

                        </div>
                        <div className={"who"}>
                            <div className={"name"}>
                                Офицеров Влад <span className={"post"}> Участник
                            </span>
                            </div>
                            <div className={"competence"}>
                                <div className={"text"}> Компетенции:
                                </div>

                                <div className={"type-who adobe"}> HTML/CSS</div>
                                <div className={"type-who figma"}> React.js</div>
                                <div className={"type-who uiux"}> UI/UX</div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </FadeInSection>
    )
}
