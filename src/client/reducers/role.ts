const initialState = {
    data:[]
  };
  
  const roleReducer = (state = initialState, action) => {
    console.log("sssss", action.payload)
    switch (action.type) {
      case "SETDATA":
        return {data: action.payload }
      
      default:
        return state;
    }
  };
  
  export default roleReducer;
  