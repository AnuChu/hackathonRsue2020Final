import React from "react";
import FadeInSection from "../FadeIn/FadeIn";
import {faChevronLeft, faChevronRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function People() {

    const animatedComponents = makeAnimated();
    const who = [
        {value: 'all', label: 'Все'},
        {value: 'person', label: 'Команды'},
        {value: 'teams', label: 'Участники'}
    ]

    const interests = [
        {value: '1', label: 'React.js'},
        {value: '2', label: 'Python'},
        {value: '3', label: 'Android'},
    ]

        const customStyles = {
            control: (styles) => ({
                ...styles,
                // none of react-select's styles are passed to <Control />
                width: "100%",
                paddingLeft: 5,
            }),
            noOptionsMessage: (styles) => ({...styles}),
            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';
                const padding = 0;
                return {...provided, opacity, transition, padding};
            }
        }


    return (
        <div className={"teams-page"}>
            <FadeInSection key={1}>

                <form action="" method="get" className={"form-panel-search"}>
                    <input name="s" placeholder="Поиск" type="search"/>
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>

                <div className={"selected-place"}>
                    <div className={"select-panel"}>
                        <Select
                            styles={customStyles}
                            closeMenuOnSelect={true}
                            components={animatedComponents}
                            defaultValue={[who[0]]}
                            placeholder={"Выберите команду или участники"}
                            options={who}
                            noOptionsMessage={() => "Нет результатов"}
                        />
                    </div>
                    <div className={"select-panel"}>
                        <Select
                            styles={customStyles}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            placeholder={"Выберите компетенции"}
                            options={interests}
                            noOptionsMessage={() => "Нет результатов"}
                        />
                    </div>
                </div>

                <div className={"title blue"}>Команды и участники</div>


                <div className={"blocks"}>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Python</div>
                            </div>
                            <img src={"/images/person/4.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Офицеров Владислав Эдуардович</div>
                            <div className={"text-subtitle"}>
                                <span className={"blue"}>Состоит в команде: </span> <b>CyberFarsh</b>
                            </div>

                            <div className={"blocks"}>
                                <div className={"block-work"}>
                                    <div className={"number"}>12</div>
                                    <div className={"text-t"}>Участий<br/> в конкурсах</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>3</div>
                                    <div className={"text-t"}>Завершенных<br/> статей</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>5</div>
                                    <div className={"text-t"}>Выигранных<br/> грантов</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Анализ данных</div>
                            </div>
                            <img src={"/images/person/3.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Николаенко Владимир Николаевич</div>
                            <div className={"text-subtitle"}>
                                <span className={"red"}>Не состоит в команде</span>
                            </div>

                            <div className={"blocks"}>
                                <div className={"block-work"}>
                                    <div className={"number"}>5</div>
                                    <div className={"text-t"}>Участий<br/> в конкурсах</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>6</div>
                                    <div className={"text-t"}>Завершенных<br/> статей</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>2</div>
                                    <div className={"text-t"}>Выигранных<br/> грантов</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Docker</div>
                            </div>
                            <img src={"/images/person/5.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Иванов Иван Иванович</div>
                            <div className={"text-subtitle"}>
                                <span className={"blue"}>Состоит в команде: </span> <b>SocialMayhem</b>
                            </div>

                            <div className={"blocks"}>
                                <div className={"block-work"}>
                                    <div className={"number"}>10</div>
                                    <div className={"text-t"}>Участий<br/> в конкурсах</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>17</div>
                                    <div className={"text-t"}>Завершенных<br/> статей</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>2</div>
                                    <div className={"text-t"}>Выигранных<br/> грантов</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"block-row"}>
                        <div className={"img-place"}>
                            <div className={"type"}>
                                <div className={"type-text"}>Figma</div>
                            </div>
                            <img src={"/images/person/1.svg"} alt={""}/>
                        </div>
                        <div className={"text-place"}>
                            <div className={"text"}>Чу Алиса Романовна</div>
                            <div className={"text-subtitle"}>
                                <span className={"blue"}>Состоит в команде: </span> <b>PrettyGirls</b>
                            </div>

                            <div className={"blocks"}>
                                <div className={"block-work"}>
                                    <div className={"number"}>20</div>
                                    <div className={"text-t"}>Участий<br/> в конкурсах</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>2</div>
                                    <div className={"text-t"}>Завершенных<br/> статей</div>
                                </div>
                                <div className={"block-work"}>
                                    <div className={"number"}>3</div>
                                    <div className={"text-t"}>Выигранных<br/> грантов</div>
                                </div>
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