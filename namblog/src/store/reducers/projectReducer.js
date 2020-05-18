const initState = {
    projects: [
        {id: "1", title: "First Project", content: "Hello every one this is project 1"},
        {id: "2", title: "2nd  Project", content: "Hello every one this is project 2"},
        {id: "3", title: "3rd Project", content: "Hello every one this is project 3"},
    ]
}

const projectReducer = (state = initState, action ) =>{
    switch(action.type){
        case "CREATE_PROJECT":
            console.log("create project", action.project);
            return state;
        case "CREATE_PROJECT_ERR":
            console.log('create project err', action.err)
            return state;
        default:
            return state;            
    }
}

export default projectReducer;