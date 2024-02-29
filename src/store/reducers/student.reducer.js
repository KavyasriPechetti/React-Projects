const initialState={
    students:[
        {
            firstname:"kavya",
            lastname:"Pechetti",
            gender:"female"
        },
        {
            firstname:"sai",
            lastname:"Pechetti",
            gender:"male"
        },
        {
            firstname:"mani",
            lastname:"Pechetti",
            gender:"male"
        },
       
    ]
}

function studentReducer(state=initialState,action) {
    return state;
}

export default studentReducer;