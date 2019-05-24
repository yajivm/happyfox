import React, { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBoardData, getBoardList, getTask, updateBoard, removeTask }  from '../action/boardListAction.js';

//import components
import NavBar from '../components/navbar';
import EditCardModal from '../components/editCardModal';

//import board components
import BoardList from '../components/boardList';
import BoardComponent from '../components/board';

const Dashboard = (props) => {

    const [enableBoard, setenableBoard] = useState(false);
    const [newBoard, setnewBoard] = useState(false);
    const [modalShow, setmodalShow] = useState(false);
    const [editCardList, seteditCardList] = useState([]);
    const [boardData, setboardData] = useState({});
    const [editCardkey, seteditCardkey] = useState(0);
    const [boardTitle, setboardTitle] = useState("");
    const [boardKey, setboardKey] = useState(0);

    //add new board
    const addNewBoard = (value) => {
        setnewBoard(value);
        props.newBoardData(value);
    }

    //enable borard component
    const goBard = (list, key) => {
        setboardData(list);
        setboardTitle(list.board_name);
        setboardKey(key);
        setenableBoard(true);
    }

    useEffect(() => {
        console.log(props.list)
    });

    //disable boardlist
    const boardClick = () => {
        setenableBoard(false);
    }

    //add new list
    const addNewList = (list) => {
        props.newBoardList(list, boardTitle);
    }

    //add new task
    const addNewTask = (key, task, boardKey) => {
        props.newTask(key, task, boardKey);
        console.log(key, boardKey)
    }

    //edit/update card data
    const editCard = (listcard, ind) => {
        seteditCardList(listcard);
        seteditCardkey(ind);
        setmodalShow(true);
    }

    //add new comment
    const addNewComment = (key, comment, list) => {
        let listData = list;
        if(editCardList.title === listData.title) {
            listData.task[key].comment.push({
                value: comment
            });
        }
    }

    //update task list
    const updateTask = (key, name, description, list) => {
        let listData = list;
        if(editCardList.title === listData.title) {
            listData.task[key].title = name;
            listData.task[key].desc = description;
        }
        props.updateList(listData, boardKey, editCardkey);
        setmodalShow(false);
    }

    //Delete card
    const deleteCard = (task, key, boardKey) => {
        props.deleteTask(task, key, boardKey);
    }

    //close modal 
    const modalClose = () => {
        setmodalShow(false);
    }

    useEffect(() => {}, [newBoard, enableBoard, props.list]);

    return (
        <div className="page-content-innner-wrapper m-0">
            <NavBar boardClick = {boardClick} />
            <main>
                {!enableBoard ?                
                    <BoardList 
                        addNewBoard = {addNewBoard}
                        list = {props.list}
                        goBard = {goBard}
                    />
                :
                    <Fragment>
                        {boardData !== undefined &&
                            <BoardComponent 
                                title = {boardTitle}
                                boardKey = {boardKey}
                                addNewList = {addNewList}
                                addNewTask = {addNewTask}
                                boardList = {boardData}
                                deleteCard = {deleteCard}
                                editCard = {editCard}
                            />
                        }
                    </Fragment>
                }
            </main>

            {/* edit modal component - Start */}
                {editCardList !== undefined &&
                    <EditCardModal
                        cardList = {editCardList}
                        listKey = {editCardkey}
                        addNewComment = {addNewComment}
                        updateTask = {updateTask}
                        show = {modalShow}
                        onHide = {modalClose}
                    />
                }
            {/* edit modal component - End */}

        </div>
    );  
}

function mapStateToProps(state){
    console.log(state)
    return({
        list: state.trelloList.data,
        boardList: state.trelloList.list
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        newBoardData: getBoardData,
        newBoardList: getBoardList,
        newTask: getTask,
        updateList: updateBoard,
        deleteTask: removeTask
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);