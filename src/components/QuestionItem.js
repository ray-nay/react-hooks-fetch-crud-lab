import React from "react";

function QuestionItem({ question, onDeleted, onUpdated }) {
  const { id, prompt, answers, correctIndex } = question;

  // delete question
  function deleteQuestion(){
    //console.log(id)
    onDeleted(question)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(()=>{
      onDeleted(id)
      console.log(id)
    })
  }
  

  function updateQuestionAnswer(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      })
    })
    .then(res=>res.json())
    .then(updatedQuestion=>{
      onUpdated(updatedQuestion)
    })
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onClick={updateQuestionAnswer}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;