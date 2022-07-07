const accountReducer = (state = 0,action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
            break;
        case 'WITHDRAW':
            return state - action.payload;
            break;
        default: return state;
            break;
    }
}
export default accountReducer;