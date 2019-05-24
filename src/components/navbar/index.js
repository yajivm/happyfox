import React from "react";

//import images
import Logo from "../../assets/img/trello.png";
import User from "../../assets/img/user.svg";

const Dashboard = (props) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="nav-left nav-icons">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item home-ic">
                            <span>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="20" height="20" viewBox="0 0 495.398 495.398" xmlSpace="preserve" onClick={() => props.boardClick()}>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#fff" d="M16.822,284.968h39.667v158.667c0,9.35,7.65,17,17,17h116.167c9.35,0,17-7.65,17-17V327.468h70.833v116.167
                                                    c0,9.35,7.65,17,17,17h110.5c9.35,0,17-7.65,17-17V284.968h48.167c6.8,0,13.033-4.25,15.583-10.483
                                                    c2.55-6.233,1.133-13.6-3.683-18.417L260.489,31.385c-6.517-6.517-17.283-6.8-23.8-0.283L5.206,255.785
                                                    c-5.1,4.817-6.517,12.183-3.967,18.7C3.789,281.001,10.022,284.968,16.822,284.968z M248.022,67.368l181.333,183.6h-24.367
                                                    c-9.35,0-17,7.65-17,17v158.667h-76.5V310.468c0-9.35-7.65-17-17-17H189.656c-9.35,0-17,7.65-17,17v116.167H90.489V267.968
                                                    c0-9.35-7.65-17-17-17H58.756L248.022,67.368z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </li>
                        <li className="nav-item semi-bold-txt">
                            <span className="text-light text-bold">
                                <svg version="1.1" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
                                    <g>
                                        <g>
                                            <path fill="#fff" d="m10.5,118.1h107.9c2.3,0 4.1-1.8 4.1-4.1v-91.5c0-2.3-1.8-4.1-4.1-4.1h-20.3v-3.5c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v3.5h-50.2v-3.5c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v3.5h-21c-2.3,0-4.1,1.8-4.1,4.1v91.6c0,2.2 1.9,4 4.1,4zm4.1-91.5h16.9v2.2c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-2.2h50.2v2.2c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-2.2h16.3v10.6h-99.8v-10.6zm0,18.8h99.7v64.6h-99.7v-64.6z"/>
                                            <path fill="#fff" d="m94,64.2h-59c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h59c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1z"/>
                                            <path fill="#fff" d="m64.5,84h-29.5c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h29.5c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1z"/>
                                        </g>
                                    </g>
                                </svg> Boards
                            </span>
                        </li>
                        <li className="nav-item">
                            <div className="input-search">
                                <input type="text" className="search-int" />
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 451 451" xmlSpace="preserve" className="magnify-glass">
                                        <g>
                                            <path fill="#fff" d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
                                                s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
                                                C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
                                                s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
                                        </g>
                                    </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav-brand">
                    <img src={Logo} title="trello" alt="logo" className="img-fluid" />
                </div>
                <div className="nav-right nav-icons">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <span>
                                <svg version="1.1" width="18px" height="18px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 491.86 491.86" xmlSpace="preserve">
                                    <g>
                                        <g>
                                            <path fill="#fff" d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69
                                                C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69
                                                s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"/>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span>
                                <label className="text-light px-2"><i>i</i></label>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="blue-bg notify-ic">
                                <svg version="1.1" width="16px" height="16px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 229.238 229.238" xmlSpace="preserve">
                                    <path fill="#fff" d="M220.228,172.242c-20.606-17.82-39.675-42.962-39.675-105.734c0-36.353-29.576-65.928-65.93-65.928
                                        c-36.359,0-65.939,29.575-65.939,65.928c0,62.829-19.062,87.946-39.686,105.751C3.28,177.239,0,184.411,0,191.937
                                        c0,4.142,3.358,7.5,7.5,7.5h71.175c3.472,16.663,18.268,29.222,35.944,29.222s32.473-12.558,35.944-29.222h71.175
                                        c4.142,0,7.5-3.358,7.5-7.5C229.238,184.35,225.95,177.167,220.228,172.242z M114.619,213.659c-9.34,0-17.321-5.929-20.381-14.222
                                        H135C131.94,207.73,123.959,213.659,114.619,213.659z M17.954,184.437c0.273-0.296,0.564-0.578,0.871-0.845
                                        c31.443-27.146,44.858-62.162,44.858-117.084c0-28.082,22.852-50.928,50.939-50.928c28.083,0,50.93,22.846,50.93,50.928
                                        c0,54.872,13.417,89.887,44.876,117.091c0.307,0.265,0.598,0.544,0.872,0.838H17.954z"/>
                                </svg>
                            </span>
                        </li>
                        <li className="nav-item">
                            <img src={User} title="user" alt="profile" className="img-fluid img-round profile-ic" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );  
}

export default Dashboard;