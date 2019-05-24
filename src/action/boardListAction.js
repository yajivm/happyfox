//create board
export function getBoardData(value) {
    return(dispatch) => {
        dispatch({
            type: "board_data",
            cardName: value
        });
    }
}

//get board list
export function getBoardList(value, title) {
    return(dispatch) => {
        dispatch({
            type: "board_list",
            listName: value,
            board: title
        })
    }
}

//create task
export function getTask(key, task, boardKey) {
    return(dispatch) => {
        dispatch({
            type: "list_task",
            key: key,
            task: task,
            boardKey: boardKey
        })
    }
}

//update board
export function updateBoard(board, key, ind) {
    return(dispatch) => {
        dispatch({
            type: "update_list",
            key: key,
            board: board,
            listKey: ind
        })
    }
}

//remove task
export function removeTask(task, key, boardKey) {
    return(dispatch) => {
        dispatch({
            type: "remove_list",
            key: key,
            task: task,
            boardKey: boardKey
        })
    }
}