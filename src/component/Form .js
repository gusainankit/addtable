import React,{useState}from "react";
import "./form.css";

function Form(props){
    const {showHideModal,dataManupulation,selectedIndex} = props;
    const[name ,setName]=useState('');
    const[clas,setClas]=useState('');
    const[score ,setScore]=useState();
    const[result,setResult]=useState();
    const[grade,setGrade]=useState();
    const [error,setError] = useState({
        nameError:false,
        classError:false,
        scoreError:false,
    });

    const scoreHandler = (e) =>{
        const score = e.target.value;
        let grade, result;
        if(!!score){
             result=  score <= 30 ? 'Failed':'Passed';
             grade=  score <= 30 ? "Poor" : score <= 75 ? "Average":"Exclent" ;
        }else{
            result = '';
            grade = '';
        }
        setGrade(grade);
        setResult(result);
        setScore(e.target.value)
    }
    
    const closeModal = ()=>{
        setName('');
        setClas('');
        setScore('')
        setGrade('');
        setResult('')
        showHideModal(false);
    }    

    const formValidate = () =>{
        let formValid = true;
        let errorResposne = {...error};
        if(!name){
            errorResposne.nameError = true;
            formValid = false;
        }

        if(!clas || clas > 12 ){
            errorResposne.classError = true;
            formValid = false;
        }
        
        if(!score || score > 100){
            errorResposne.scoreError=true;
            formValid = false;
        }
        if(!formValid){
            setError(errorResposne);
        }
        return formValid;
    }
    const getFormData=()=>{
        const isformValid = formValidate();
        if(isformValid){
            let newObject = {
                'name':name,
                'clas':clas,
                'score':score,
                'result':result,
                'grade':grade
            }
            dataManupulation(newObject,selectedIndex);
            closeModal();
        };
    }

    return(
        <div className="conatiner-form">
            <form className="form">
                <h1 className="header">Add student</h1>
                <div className="info">
                    <label htmlFor ="name">STUDENT NAME*</label><br/>
                    <input type="text" value={name} id="name"  onChange={(e)=>setName(e.target.value)}/>
                    {error.nameError && <p className="error">Error: Name field cannot be left bank</p>}
                </div>
                <div className="info">
                    <label htmlFor ="class">CLASS*</label><br/>
                    <input type="text" value={clas} id="class" onChange={(e)=>setClas(e.target.value)}/><br/>
                   {!error.classError && <p className="para">Please input the value of between 1&12</p>}
                   {error.classError && <p className="error">Error: Please input the value of between 1&12</p>}
                    
                </div>
                <div className="info">
                    <label htmlFor="score">SCORE*</label>
                    <input type="text " value={score} id="score" onChange={(e)=>scoreHandler(e)}/><br/>
                      {!error.scoreError && <p className="para">Please input the value of between 0&100</p>}
                      {error.scoreError && <p className="error">Error: Please input the value of between 0&100</p> }
                </div>
                <div>
                    <h3 className="report">RESULT</h3>
                    {!!result && <p className="passed">{result} </p>}
                </div>
                <div>
                    <h3 className="report">GRADE</h3>
                    <p className="grade">{grade}  </p>
                </div>
                <div className="button">
                <button className="cancel-btn"onClick={closeModal}>CANCEL</button>
                <button onClick={getFormData} type="button" className="confirm-btn">CONFIRM</button>
                </div>        
            </form>
    
        </div>
    )
}
export default Form;