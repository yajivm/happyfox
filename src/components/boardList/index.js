import React, { useState, useEffect, Fragment } from "react";
import { Row } from "react-bootstrap";

//import images
import Close from '../../assets/img/close.svg';

const BoardList = (props) => {
    const [enableBoard, setenableBoard] = useState(false);
    const [boardTitle, setboardTitle] = useState("");

    const addNewBoard = () => {
        setboardTitle("");
        setenableBoard(false);
        props.addNewBoard(boardTitle);
    }

    useEffect(() => { }, [boardTitle]);

    return (
        <Fragment>
            <div className="mx-0 boardList">
                <h4 className="w-100 mb-4">
                    <svg version="1.1" width="18px" height="18px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 563.43 563.43" xmlSpace="preserve" className="mr-2">
                        <path fill="#fff" d="M280.79,314.559c83.266,0,150.803-67.538,150.803-150.803S364.055,13.415,280.79,13.415S129.987,80.953,129.987,163.756
                            S197.524,314.559,280.79,314.559z M280.79,52.735c61.061,0,111.021,49.959,111.021,111.021S341.851,274.776,280.79,274.776
                            s-111.021-49.959-111.021-111.021S219.728,52.735,280.79,52.735z"/>
                        <path fill="#fff" d="M19.891,550.015h523.648c11.102,0,19.891-8.789,19.891-19.891c0-104.082-84.653-189.198-189.198-189.198H189.198
                            C85.116,340.926,0,425.579,0,530.124C0,541.226,8.789,550.015,19.891,550.015z M189.198,380.708h185.034
                            c75.864,0,138.313,56.436,148.028,129.524H41.17C50.884,437.607,113.334,380.708,189.198,380.708z"/>
                    </svg>
                    Personal Boards
                </h4>
                {props.list.length > 0 && props.list.map((list, key) =>
                        <div key={"list"+key} className="board-card" onClick={() => props.goBard(list, key)}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <h5>{list.board_name}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
            <Row className="mx-0 add-board-wrapper">
                {!enableBoard ?
                    <div className="dotted-line-wrapper form-line-wrapper d-flex justify-content-center align-items-center" onClick={() => setenableBoard(true)}>
                        <span>+</span> Add Board
                    </div>
                    :
                    <div className={"form-line-wrapper d-flex justify-content-center align-items-center" + (enableBoard && " border-1")}>
                        <form>
                            <input type="text" autoFocus="on" autoComplete="off" id="listName" name="listName" value={boardTitle} onChange={(e) => setboardTitle(e.target.value)} className="form-control" placeholder="Enter board title..." />
                            <div className="mt-2">
                                <span className="green-btn" onClick={() => addNewBoard()}>Add</span>
                                <img src={Close} alt="close" title="close" className="img-fluid mx-2" onClick={() => setenableBoard(false)} />
                            </div>
                        </form>
                    </div>
                }
            </Row>
        </Fragment>
    );  
}

export default BoardList;