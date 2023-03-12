const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                // Local Storage 특성 상, JSON.parse()를 이용해야 한다
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    }
    return arr;
} 
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }

};

const mutations = {
        addOneItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        // 저장하는 로직
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload){    
        // item 삭제 API 
        localStorage.removeItem(payload.todoItem.item);
        // JS 배열 삭제 API 
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload){

        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;        
        // Update 기능이 없으므로 해당 Item을 remove 후 다시 set해줘야 한다
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));

    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations
}
