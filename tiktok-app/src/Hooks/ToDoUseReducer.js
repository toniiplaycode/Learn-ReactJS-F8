import { useReducer, useRef } from "react";

// init state
const initState = {
    job: '',
    jobs: []
}

// actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job'

const setJob = payload => { // tham số payload là từ value của input nhập vào
    return{
        type: SET_JOB,
        payload: payload
    }
}

const addJob = payload => { // tham số payload là từ value của input nhập vào
    return{
        type: ADD_JOB,
        payload: payload
    }
}

const deleteJob = payload => { // tham số payload là từ value của input nhập vào
    return{
        type: DELETE_JOB,
        payload: payload
    }
}

// reducer
const reducer = (state, action) => {
    console.log('Action: ', action);
    console.log('Prev state: ', state);

    let newState;

    switch(action.type){
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:    
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:    
            const newJobs = [...state.jobs];

            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid action !');
    }

    console.log('New state: ', newState);
    return newState;
}

const ToDoUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    
    const {job, jobs} = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    return(
        <div>
            <h3>TODO</h3>
            <input 
                value={job}
                ref={inputRef}
                placeholder="Enter todo..."
                onChange={e => {dispatch(setJob(e.target.value))}}
            />
            <button onClick={handleSubmit}>Add</button>
            <br/>
            <ul>
                {jobs.map((job, index) => {
                    return(
                    <li key={index}>
                        {job} &nbsp;
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default  ToDoUseReducer;
// --> dùng UseReducer với Todo app để hiểu thêm về nó. nên dùng useState để đơn giản hơn