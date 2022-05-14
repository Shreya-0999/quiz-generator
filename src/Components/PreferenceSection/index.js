import './Styles/index.css'
import {useState} from 'react'
const PreferenceSection = (props) => {
    const [ques, setQues] = useState('20');
    const [range, setRange] = useState('10');
    const [operator, setOperator] = useState();
    const handleButtonClick = (e) => {
        props.setQues(Number(ques));
        props.setRange(Number(range));
        if(operator)
            props.setOperator(operator);
    }
    const handleResetClick = (e) => {
        props.setQues(Number(ques));
        props.setRange(Number(range));
        if(operator)
            props.setOperator(operator);
    }
    return (
        <div>
            <div className="headerBox">
                <h2 className="header">Practice Airthmetic</h2>
            </div>

            <div className="input-data-container">
                <div className="subHeaderBox">
                    <h4 className="subHeading">Choose Preferences</h4>
                </div>

                <div className="inputBox">
                    <div className="dropdown-box">
                        <label className="inputLable" htmlFor="ques">Number of questions:</label>
                        <select
                            className="dropdown"
                            id="ques"
                            value={ques}
                            onChange={(e) => setQues(e.target.value)}
                        >
                            <option value="20">20</option>
                            <option value="15">15</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className="dropdown-box">
                        <label className="inputLable" htmlFor="range">Range of operands:</label>
                        <select
                            className="dropdown"
                            id="range"
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div className="selectOperator">
                        <label className="inputLable" htmlFor="operator">Select Operator:</label>
                        <div className="operatorBox" onChange={(e) => setOperator(e.target.value)}>
                            {
                                props.operatorArr.map((item, index) => (
                                    <div className="flex-center" key={index}>
                                        <input className="operator-btn" type="radio" name="operator" id={item} value={item} />
                                        <label htmlFor={item}>{item}</label>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                <div className="buttonBox">
                    <button className="setBtn" onClick={handleButtonClick}>Set</button>
                    <button className="setBtn" onClick={handleResetClick}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default PreferenceSection;