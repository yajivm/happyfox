const INITIAL_STATE = {
    data: []
}

let dataList = [];

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case 'board_data':
            dataList.push({
                board_name: action.cardName,
                list: []
            });
            return{
                ...state,
                data: dataList
            }
        case 'board_list':
            dataList.map((board, key) => {
                if(board.board_name === action.board) {
                    board.list.push({
                        id: board.list.length + 1,
                        title: action.listName,
                        task: []
                    })
                }
                return board;
            });
            return{
                ...state,
                data: dataList
            }
        case 'list_task':
        console.log(action.key, action.boardKey)
            let proList = dataList[action.boardKey].list.map((list, key) => {
                if(key === action.key) {
                    list.task.push({
                        id: list.task.length + 1,
                        title: action.task,
                        desc: "",
                        comment: []
                    });
                }
                return list;
            });
            return{
                ...state,
                data: proList
            }
        case 'update_list':
            console.log(dataList[action.key].list)
            dataList[action.key].list[action.listKey] = action.board;
            return{
                ...state,
                data: dataList
            }
        case 'remove_list':
            let remList = dataList[action.boardKey].list.map((list, key) => {
                if(list.title === action.task.title) {
                    list.task.splice(action.key, 1);
                }
                return list;
            });
            return{
                ...state,
                data: remList
            }
        default: 
            return state;
    }
}