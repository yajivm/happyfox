import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

//import components
import TaskCard from '../task';

//import images
import Close from '../../assets/img/close.svg';

const ListComponent = (props) => {
    const { listCard, listCardKey } = props;
    const [newTask, setnewTask] = useState("");
    const [newTaskData, setnewTaskData] = useState("");
    
    return (
        <div className="list-card-container" key={"boardList"+listCardKey}>
            <div className="list-body-wrapper">
                <div className="title">
                    <h6>{listCard.title}</h6>
                </div>
                <Droppable droppableId={listCard.id}  key={"bd"+listCardKey}>
                    {(provided) => (
                        <div 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {listCard.task.map((task, ind) => 
                                <TaskCard 
                                    key={"taskCard"+ind}
                                    task = {task}
                                    listCard = {listCard}
                                    ind = {ind}
                                    editCard = {props.editCard}
                                    deletCard = {props.deleteCard}
                                />
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <div className="add-list pt-2 pl-1">
                    {newTask !== listCard.title ?
                        <div onClick={() => {setnewTask(listCard.title); setnewTaskData("")} }><span>+</span> Add Another List</div>
                    :
                    <form>
                        <textarea autoFocus="on" className="pl-1" value={newTaskData} onChange={(e) => setnewTaskData(e.target.value)} placeholder="Enter list title..."></textarea>
                        <div className="mb-2">
                            <span className="green-btn" onClick={() => {props.addNewTask(listCardKey, newTaskData, props.boardKey); setnewTask("")}}>Add</span>
                            <img src={Close} alt="close" title="close" className="img-fluid mx-2"  onClick={() => setnewTask("")} />
                        </div>
                    </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListComponent;