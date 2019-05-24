import React, { useState, useEffect } from 'react';
import { Row } from "react-bootstrap";
import { DragDropContext } from 'react-beautiful-dnd';

//import components
import TitleBar from '../titleBar';
import ListComponent from '../listComponent';

//import images
import Close from '../../assets/img/close.svg';

const BoardComponent = (props) => {
    
    const [newList, setnewList] = useState(false);
    const [newListData, setnewListData] = useState("");

    const addNewList = () => {
        setnewList(false); 
        setnewListData("");
        props.addNewList(newListData); 
    }

    useEffect(() => {}, [props.boardList]);

    const onDragEnd = () => {

    }

    console.log(props.boardList)

    return(
        <div>
            <TitleBar title= {props.title} />
            <Row className="mx-0 card-list-container">
                {props.boardList.list.map((listCard, key) => 
                    <DragDropContext onDragEnd={() => onDragEnd()} key={"boardList"+key}>
                        <ListComponent
                            key={"board"+key}
                            listCardKey = {key}
                            listCard = {listCard}
                            addNewTask = {props.addNewTask}
                            boardKey = {props.boardKey}
                            editCard = {props.editCard}
                            deleteCard = {props.deleteCard}
                        />
                    </DragDropContext>
                )}
                {newList ?
                <div className="newform-container list-card-container">
                    <form>
                        <input autoFocus="on" value={newListData} onChange={(e) => setnewListData(e.target.value)} placeholder="Enter list title..." />
                        <div className="mt-2">
                            <span className="green-btn" onClick={() => (newListData !== undefined && newListData.length > 0 ) && addNewList()}>Add</span>
                            <img src={Close} alt="close" title="close" className="img-fluid mx-2" onClick={() => setnewList(false)} />
                        </div>
                    </form>
                </div>
                :
                <div className="newCard-box mx-3" onClick={() => setnewList(true)}>
                    <span>+</span> Add Another List
                </div>
                }
            </Row>
        </div>
    )
}

export default BoardComponent;