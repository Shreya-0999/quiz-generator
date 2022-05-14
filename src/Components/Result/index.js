import './Styles/index.css'
const Result = (props) => {
    return (
        <>
            {props.quizEnd
                ? <div className="result">
                    {console.log(props.res)}
                    {
                        props.res.map((ele, key) => (

                            <div className={`${ele.ans == ele.correctAns ?'greenBg resultBox':'resultBox redBg'  }`} key={key}>
                                <p className='textSpacing'>{ele.num1}</p>
                                <p className='textSpacing'>{ele.operator}</p>
                                <p className='textSpacing'>{ele.num2}</p>
                                <p className='textSpacing bold'>Your Answer: {ele.ans}</p>
                                <p className='textSpacing bold'>CorrectAns: {ele.correctAns}</p>
                            </div>
                        ))
                    }
                </div>
                : <></>
            }
        </>
    )
}
export default Result;