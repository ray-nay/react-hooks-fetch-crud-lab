import React from "react";
import { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setItems, onDelete, onUpdate}) {
  //const [questions, setItems] = useState([]);
  
  useEffect(
    ()=>{
      fetch('http://localhost:4000/questions')
      .then(res=>res.json())
      .then(questionsData=>{
        //console.log(questionsData)
        setItems(questionsData)
      })
    },[]
  )

  //console.log(items);
  const questionComponent = questions.map(question=>{
    return <QuestionItem 
    question={question} 
    key={question.id} 
    onDeleted={onDelete} 
    onUpdated={onUpdate}
    />
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionComponent}</ul>
    </section>
  );
}

export default QuestionList;
