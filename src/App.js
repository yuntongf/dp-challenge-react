import logo from './logo.svg';
import './App.css';
import { getData } from './DataService';
import QuestionCard from './components/QuestionCard';
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  state = { 
    data:getData(),
    ans:[]
  } 

  handleChoose(ans) {
    console.log("answers are", ans);
  }

  render() { 
    return (
      <div className='col-12 d-flex justify-content-center'>
        <div className='col-5'>
          {this.state.data.questions.map(question => (
            <div className=''>
              <div className='m-4'>
                <h4>{question.prompt}</h4>
                <QuestionCard question={question} handleChoose={(ans) => this.handleChoose(ans)}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
 
export default App;