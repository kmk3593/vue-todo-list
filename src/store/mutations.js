 const addOneItem = (state, todoItem) => {
            const obj = {completed: false, item: todoItem};
            // 저장하는 로직
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {    
    // item 삭제 API 
    localStorage.removeItem(payload.todoItem.item);
    // JS 배열 삭제 API 
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {

    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;        
    // Update 기능이 없으므로 해당 Item을 remove 후 다시 set해줘야 한다
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));

}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems}