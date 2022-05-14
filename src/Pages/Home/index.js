import './Styles/index.css';
import { useEffect, useState } from 'react';
import PreferenceSection from '../../Components/PreferenceSection';
import Quiz from '../../Components/Quiz';
import Result from '../../Components/Result';
const Home = () => {
    const operatorArr = ['+', '-', '*', '/'];
    const [ques, setQues] = useState(20);
    const [range, setRange] = useState(10);
    const [operator, setOperator] = useState();
    const [res1, setRes1] = useState([]);
    const [res2, setRes2] = useState([]);
    const [quizOneEnd, setQuizOneEnd] = useState(false);
    const [quizTwoEnd, setQuizTwoEnd] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        let random = Math.floor(Math.random() * operatorArr.length);
        setOperator(operatorArr[random]);
    }, [])

    return (
        <>
            <div className="main">
                <div className="preferenceSection">
                    <PreferenceSection
                        setQues={setQues}
                        setRange={setRange}
                        setOperator={setOperator}
                        operatorArr={operatorArr}
                        reset={setReset}
                    />
                </div>
                <div className="quizSection">
                    <div className="quizSection-box">
                        <Quiz
                            range={range}
                            ques={ques}
                            operator={operator}
                            setQuizEnd={setQuizOneEnd}
                            setRes={setRes1}
                            reset={reset}
                            setReset = {setReset}
                            
                            />
                    </div>
                    <div className="quizSection-box">
                        <Quiz
                            range={range}
                            ques={ques}
                            operator={operator}
                            setQuizEnd={setQuizTwoEnd}
                            setRes={setRes2}
                            reset={reset}
                            setReset = {setReset}
                        />
                    </div>
                </div>
                <div className="resultSection">
                    <div className="resultSection-box">
                        <Result quizEnd = {quizOneEnd} res={res1}/>
                    </div>
                    <div className="resultSection-box">
                        <Result quizEnd = {quizTwoEnd} res={res2}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;