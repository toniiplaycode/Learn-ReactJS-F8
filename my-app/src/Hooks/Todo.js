import { useState } from "react";

const Todo = () => {    
    
    const [listJob, setListJob] = useState(() => {
        const stogeListjob = JSON.parse(localStorage.getItem('listJob'));
        // console.log(stogeListjob);
        return stogeListjob ?? ['Do Homework']; // nếu stogeListjob là null thì trả về mặc định 'Do Homework'
    }); 

    const [job, setJob] = useState('');

    const handleSubmit = () => {
        setListJob(() => { // dùng callback mới có thể setItem lên stoge chính xác được 
            const newListJob = [...listJob, job]; // dùng spead để giải các listJob trong mảng có sẵn, rồi thêm job mới vào
            
            // console.log(newListJob);
            localStorage.setItem('listJob', JSON.stringify(newListJob));

            return newListJob;
        }); 
        setJob(''); // submit xong thì clear input
    }

    const handleDelete = (indexJob) => {
        setListJob(() => {
            const newListJob = listJob.filter((item, index) => index !== indexJob);
            localStorage.setItem('listJob', JSON.stringify(newListJob));
            return newListJob;
        });
    }

    return (
        <div>
            <input value={job} onChange = {e => setJob(e.target.value)}></input>
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {
                    listJob.map((item, index) => {
                        return(
                            <li key={index}>
                                {item} <button onClick={() => handleDelete(index)}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todo;