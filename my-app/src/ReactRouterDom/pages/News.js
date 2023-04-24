import { useParams } from "react-router-dom";

const News = () => {
    const {value} = useParams();
    console.log('Paramater route: ', value);

    return(
        <div>
            NEWS PAGE
            <h3>Value from paramaters route: {value ?? 'not paramater'}</h3>
        </div>
    )
}

export default News;