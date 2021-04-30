import React from "react";
import FadeInSection from "../FadeIn/FadeIn";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Monitoring() {
    return (
        <FadeInSection key={1}>
            <div className={"monitoring-page"}>
                <div className={"event-page"}>
                    <FadeInSection key={2}>
                        <div className={"title blue"}>Мониторинг</div>

                        <div className={"blocks"}>
                            <Link href={"/team"}>
                            <div className={"block-row"}>
                                <div className={"img-place"}>
                                    <div className={"type"}>
                                        <div className={"type-text"}>Python</div>
                                    </div>
                                    <img src={"/images/relaxation/1.svg"} alt={""}/>
                                </div>

                                <div className={"text-place"}>
                                    <div className={"text-t blue"}>CyberFarsh</div>
                                    <div className={"text-prize-t"}>
                                        Участвует в: <span className={"blue"}>Цифровой прорыв 2020  </span>
                                    </div>
                                    <div className={"about-t"}>
                                        Размер гранта: <span className="blue"> 1 000 000 - 1 500 000 Р</span>
                                    </div>
                                </div>

                                <div className={"date-a"}>
                                    <img src={"/images/icon/calendar.svg"} width={"20px"}
                                         height={"17px"}/> 20.11.2020 - 28.11.2020
                                </div>

                            </div>
                            </Link>
                            <Link href={"/team"}>
                            <div className={"block-row"}>
                                <div className={"img-place"}>
                                    <div className={"type"}>
                                        <div className={"type-text"}>С++</div>
                                    </div>
                                    <img src={"/images/relaxation/2.svg"} alt={""}/>
                                </div>
                                <div className={"text-place"}>
                                    <div className={"text-t blue"}>SocialMayhem</div>
                                    <div className={"text-prize-t"}>
                                        Участвует в: <span className={"blue"}>Цифровой прорыв 2020  </span>
                                    </div>
                                    <div className={"about-t"}>
                                        Размер гранта: <span className="blue"> 1 000 000 - 1 500 000 Р</span>
                                    </div>
                                </div>


                                <div className={"date-a"}>
                                    <img src={"/images/icon/calendar.svg"} width={"20px"}
                                         height={"17px"}/> 20.11.2020 - 28.11.2020
                                </div>

                            </div>
                            </Link>
                            <Link href={"/team"}>
                            <div className={"block-row"}>
                                <div className={"img-place"}>
                                    <div className={"type"}>
                                        <div className={"type-text"}>Java</div>
                                    </div>
                                    <img src={"/images/relaxation/3.svg"} alt={""}/>
                                </div>
                                <div className={"text-place"}>
                                    <div className={"text-t blue"}>PrettyGirls</div>
                                    <div className={"text-prize-t"}>
                                        Участвует в: <span className={"blue"}>Цифровой прорыв 2020  </span>
                                    </div>
                                    <div className={"about-t"}>
                                        Размер гранта: <span className="blue"> 1 000 000 - 1 500 000 Р</span>
                                    </div>
                                </div>

                                <div className={"date-a"}>
                                    <img src={"/images/icon/calendar.svg"} width={"20px"}
                                         height={"17px"}/> 20.11.2020 - 28.11.2020
                                </div>

                            </div>
                            </Link>
                            <Link href={"/team"}>
                            <div className={"block-row"}>
                                <div className={"img-place"}>
                                    <div className={"type"}>
                                        <div className={"type-text"}>React</div>
                                    </div>
                                    <img src={"/images/relaxation/1.svg"} alt={""}/>
                                </div>
                                <div className={"text-place"}>
                                    <div className={"text-t blue"}>ReactPower</div>
                                    <div className={"text-prize-t"}>
                                        Участвует в: <span className={"blue"}>Цифровой прорыв 2020  </span>
                                    </div>
                                    <div className={"about-t"}>
                                        Размер гранта: <span className="blue"> 1 000 000 - 1 500 000 Р</span>
                                    </div>
                                </div>

                                <div className={"date-a"}>
                                    <img src={"/images/icon/calendar.svg"} width={"20px"}
                                         height={"17px"}/> 20.11.2020 - 28.11.2020
                                </div>

                            </div>
                            </Link>

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

            </div>
        </FadeInSection>
    )
}
