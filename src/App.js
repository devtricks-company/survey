import React, { useState } from 'react';
import QuestionTitle from './component/Question/QuestionTitle';
import Question from './component/Question/Question';



function App() {
  const [questions,setQuestions] = useState([{
      questionTitle:'Customer Satisfaction',
      allQuestion:[{
        questionNumber:1,
        qustion:"How Likley is that you would recommand this company to friend or collague",
        questionType:"progress",
        answers:["0","1","2","3","4","5","6","7","8","9","10"],
        cutomerAnswer:[]
      },{
        questionNumber:2,
        qustion:"Overal, How Satisfied or dissatisfied are you with our company",
        questionType:"radio",
        answers:["Very Satisfied","SomeWhat Satisfied","neither satisfied nor dissatisfied","somewhat dissatisfied","very dissatisfied"],
        cutomerAnswer:[]
      },{
        questionNumber:3,
        qustion:"Wich off the following words would you use describe our products? select all that apply",
        questionType:"checkbox",
        answers:["Reliable","Highe Quality","Useful","Unique","Good Value for mony","OverPriced","Impractical","Ineffective","low Quality",'UnReliable'],
        cutomerAnswer:[]
      }]
  }])
  return (
    <div className="App">
          {questions.map(question =>
            <>
              <QuestionTitle title={question.questionTitle} />
              {question.allQuestion.map(sQuestion => 
                
                <Question questionNumber={sQuestion.questionNumber} question={sQuestion.qustion} questionType={sQuestion.questionType} answers={sQuestion.answers} />
                )}
            </>
            )}
    </div>
  );
}

export default App;
