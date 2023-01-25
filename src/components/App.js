import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  //console.log(questions)
  // handles add new question
  function handleUpdateAddedQuestion(newQuestionData){
    const newQuestions = [...questions, newQuestionData]
    setQuestions(newQuestions)
  }

  function handleDeleteQuestion(id){
    const undeleteQuestions = questions.filter((question) =>{
      return question.id !== id
    })
    //console.log(undeleteQuestions)
    setQuestions(undeleteQuestions)
    //console.log('This is what was delete', undeleteQuestions)
  }

  function handleQuestionUpdate(updateItem){
    const updatedAnswerQuestions = questions.map(question=>{
      if (question.id===updateItem.id){
          return updateItem
      } else{
        return question
      }
    } 
    )
    setQuestions(updatedAnswerQuestions);
    
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAdd={handleUpdateAddedQuestion}/> :
      <QuestionList questions={questions} 
      setItems={setQuestions} 
      onDelete={handleDeleteQuestion}
      onUpdate={handleQuestionUpdate}
      />}
      
    </main>
  );
}

export default App;