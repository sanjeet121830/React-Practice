import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/hello';
import Welcome from './component/welcome';
import Message from './component/message';
import Counter from './component/Counter'
import Greet from './component/Greet';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleComponent from './component/StyleComponent';
import ParenetCrude from './Crude/ParenetCrude';
import InLine from './component/InLine';
import Form from './component/Form';
import GetMethod from './component/GetMethod';
import PostMethod from './component/PostMethod';


function App() {

  
  
  return (
    <div className="App">
      <PostMethod/>
      {/* <GetMethod/> */}
      {/* <Form/> */}
      {/* <InLine/> */}
      {/* <ParenetCrude/> */}
    {/* <StyleComponent primary={true}/> */}
   
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <h1>Hello this is sanjeet</h1> */}
      {/* <Hello name="Sanjeet" lastName="Singh">This is Children Props</Hello>
      <Hello name="Ranjeet" lastName="Sahni"/>
      <Hello name="Sujeet" lastName="Yadav"/> */}
      {/* <Welcome name="Sanjeet" lastName="Singh"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Greet fname="Sanjeet" lname="Sahni"/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
    </div>
  );
}

export default App;
