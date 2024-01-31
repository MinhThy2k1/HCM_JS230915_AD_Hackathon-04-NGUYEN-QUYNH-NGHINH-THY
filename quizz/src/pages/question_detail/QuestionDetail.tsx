
import { useState } from 'react';
import './questionDetail.scss';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
import Modal from '../modal_complete/modalComplete';

export default function QuestionDetail() {
  const questionStore = useSelector((store: Store) => store.questionStore);
  const questionData = questionStore.data;
  const [questionId, setQuestionId] = useState<number | null>((questionData !== null && questionData.length > 0) ? questionData[0].id : null);
  const [position, setPosition] = useState(1);
  const [sumOfCorrectAnswer, setSumOfCorrectAnswer] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleAnswer = (is_answer: boolean) => {
    if (is_answer) {
      setSumOfCorrectAnswer(sumOfCorrectAnswer + 1);
    }

    setPosition(position + 1);

    if (questionData !== null && position < questionData.length) {
      setQuestionId(questionData[position].id);
    } else {
      setQuestionId(null);
    }

    if (questionData !== null && position === questionData.length) {
      setDisplay(true);
    }
  };

  return (
    <div className='box-main'>
      <div className='box-container'>
        <div>
          {questionData !== null && questionData.map((item) => (
            <div className='box' key={item.id}>
              {questionId === item.id && (
                <>
                  <span className='box-correct'>{`Correct Answer: ${sumOfCorrectAnswer}/${questionData.length}`}</span>
                  <p className='box-text'>{item.content}</p>
                  {item.answers?.map((answer, index) => (
                    <div className='box-btn-answer' key={index}>
                      <button onClick={() => handleAnswer(answer.is_answer)}>{answer.content}</button>
                    </div>
                  ))}
                  <button className='box-btn-next' onClick={() => handleAnswer(false)}>Next question</button>
                </>
              )}
            </div>
          ))}
          <div className='box-toggle'>
            <Modal isOpen={display} onClose={() => setDisplay(false)}>
              <h1>Congrats</h1>
              <p>{`You answered: ${(sumOfCorrectAnswer * 100) / (questionData !== null ? questionData.length : 1)}%`}</p>
              <button className='box-btn-reload' onClick={() => { window.location.href = '/' }}>Play Again</button>
            </Modal>
          </div>

        </div>
      </div>
    </div>
  );
}
