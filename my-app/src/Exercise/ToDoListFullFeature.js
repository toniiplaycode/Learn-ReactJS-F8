import { useEffect, useRef, useState } from "react";

const ToDoListFullFeature = () => {
    const [listJob, setListjob] = useState(()=>{
        const getLocalStoge = JSON.parse(localStorage.getItem('listTodo'));
        return getLocalStoge ?? ['Homework'];
    });
    const [inputJob, setInputJob] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [indexJobEdit, setIndexJobEdit] = useState();
    const [inputEditJob, setInputEditJob] = useState('');

    const inputRef = useRef();

    // useEffect(()=>{
    //     console.log(listJob);
    // }, [listJob]);

    // useEffect(()=>{
    //     console.log(inputJob);
    // }, [inputJob]);

    const handleInput = (e) => {
        if(e.keyCode === 13){
            handleSubmit();
        }
    }
    
    const handleSubmit = () => {
        if(inputJob.trim() === ''){
            alert('Empty todo input !');
            return;
        }

        setListjob(()=>{
            const newListJob = [...listJob, inputJob];
            localStorage.setItem('listTodo', JSON.stringify(newListJob));
            return newListJob;
        });    
        setInputJob('');
        inputRef.current.focus();
    } 

    const handleDelete = (indexJob) => {
        const newListJob = listJob.filter((job, index) => index !== indexJob);
        localStorage.setItem('listTodo', JSON.stringify(newListJob));
        setListjob(newListJob);
    }

    const handleEdit = (index, job) =>{
        setIsEdit(true);
        setIndexJobEdit(index);
        setInputEditJob(job);
    }

    const handleEditSubmit = (indexEdit) => {
        console.log('input Edit:  ', inputEditJob);
        console.log('index Edit:  ', indexEdit);
        
        if(inputEditJob.trim() === ''){
            alert('Empty edit todo input !');
            return;
        }

        for(let i=0 ; i<listJob.length ; i++){
            if(i === indexEdit){
                listJob[i] = inputEditJob;
            }
        }
        
        console.log(listJob);
        localStorage.setItem('listTodo', JSON.stringify(listJob));
        setIsEdit(false);
    }

    return(
        <div>
            <h3>TODO LIST FULL FEATURE</h3>
            
            <input ref={inputRef} value={inputJob} 
                onKeyDown={(e)=>handleInput(e)} 
                onChange={(e)=>setInputJob(e.target.value)}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {listJob.map((job, index) => 
                    {
                        let checkEdit = isEdit && index === indexJobEdit;
                        return(
                            <li key={index}>
                                {
                                    checkEdit ? 
                                    <input value={inputEditJob} 
                                        onChange={(e)=>setInputEditJob(e.target.value)}
                                    /> 
                                    : job
                                } 
                                &nbsp;
                                <button onClick={()=>handleDelete(index)}>
                                    x
                                </button>
                                &nbsp;
                                <button
                                    onClick={ checkEdit ? 
                                        ()=>handleEditSubmit(index) : ()=>handleEdit(index, job)}   
                                >
                                    {checkEdit ? 'Update' : 'Edit'}
                                </button>
                            </li> 
                        )
                    }  
                )}
            </ul>
        </div>
    )
}

export default ToDoListFullFeature;