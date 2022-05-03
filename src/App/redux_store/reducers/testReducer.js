const TestReducer = (state, { type, payload }) => {

    console.error('ok');

    return {
        ...state,
        test: "testReducer"
    }
};

export default TestReducer;