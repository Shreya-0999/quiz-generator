import { useEffect, useState } from "react";
import './Styles/index.css'

const Quiz = (props) => {
    const [res, setRes] = useState([])
    const [startQuiz, setStartQuiz] = useState(false);
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [quesCount, setQuesCount] = useState(1);
    const [ans, setAns] = useState();
    const [score, setScore] = useState(0);
    const [timer, setTimmer] = useState();
    const [showScoreCard, setShowScoreCard] = useState(false);

    const handleNextQues = () => {
        calculateScore();
        setNum1(Math.floor((Math.random() * props.range) + 1));
        setNum2(Math.floor((Math.random() * props.range) + 1));
        setAns('');
        setQuesCount(quesCount + 1);
    }

    const handleSubmitBtn = () => {
        calculateScore();
        setAns('');
        setQuesCount(0);
        props.setQuizEnd(true);
        props.setRes(res);
        setShowScoreCard(true);
        console.log(showScoreCard);
    }

    const calculateScore = () => {
        let correctAns = 0;
        if (props.operator == '+')
            correctAns = num1 + num2;
        else if (props.operator == '-')
            correctAns = num1 - num2;
        else if (props.operator == '*')
            correctAns = num1 * num2;
        else
            correctAns = parseInt(num1 / num2);
        if (ans == correctAns) {
            setScore(score + 1);
        }
        let resObj = {
            num1: num1,
            num2: num2,
            operator: props.operator,
            ans: Number(ans),
            correctAns: correctAns,
        };
        setRes([...res, resObj]);
    }

    // const handleTimer = () => {
    //     var timeleft = 20;
    //     quesTimer = setInterval(function () {
    //         if (timeleft <= 0) {
    //             clearInterval(quesTimer);
    //         }
    //         setTimmer(timeleft);
    //         timeleft -= 1;
    //     }, 1000);
    // }

    useEffect(() => {
        setNum1(Math.floor((Math.random() * props.range) + 1));
        setNum2(Math.floor((Math.random() * props.range) + 1));
    }, [])

    return (
        <>
            {
                showScoreCard
                    ?
                    <>
                        <div>
                            <div className='quiz-scoreCard'>
                                <h4 className='headerMargin'>Your Score</h4>
                                <h1 className='headerMargin'>{score}</h1>
                                <h2 className='headerMargin'>/{props.ques}</h2>
                            </div>
                        </div>
                    </>
                    : <div className="quiz-area">
                        {
                            startQuiz
                                ? <>
                                    <div className="quiz-quesHeadBox">
                                        <h3 className="quiz-quesHeader">Question {quesCount} / {props.ques}</h3>
                                    </div>
                                    <div className="quiz-quesBox">
                                        <div className="quiz-num1Box">
                                            {num1}
                                        </div>
                                        <div className="quiz-operatorBox">
                                            {props.operator}
                                        </div>
                                        <div className="quiz-num2Box">
                                            {num2}
                                        </div>
                                    </div>
                                    <div className="quiz-inputBox">
                                        <input className="quiz-input" type="number" placeholder="Type Answer" value={ans} onChange={(e) => setAns(e.target.value)} />
                                    </div>
                                    {
                                        quesCount === props.ques
                                            ? <div className="buttonBox">
                                                <button className="setBtn" onClick={handleSubmitBtn}>Submit</button>
                                            </div>
                                            : <div className="buttonBox">
                                                <button className="setBtn" onClick={handleNextQues} >Next</button>
                                            </div>
                                    }
                                    <div className="quiz-quesHeadBox center">
                                        <h3 className="quiz-quesHeader">Score : {score}/{props.ques}</h3>
                                    </div>
                                    <div className="quiz-quesHeadBox center">
                                        <h3 className="quiz-quesHeader">Time Left :{timer}</h3>
                                    </div>
                                </>
                                : <>
                                    <div className="buttonBox">
                                        <button className="setBtn" onClick={() => setStartQuiz(true)} >Start Quiz</button>
                                    </div>
                                </>
                        }
                    </div>
            }

        </>
    )
}
export default Quiz;