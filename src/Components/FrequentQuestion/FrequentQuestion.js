import React from "react";
import "./FrequentQuestion.css";
const FrequentQuestion = () => {
  return (
    <div className="frequent-question">
      <h1>Our FrequentQuestion</h1>  
      <h4>Props Vs State?</h4>
      <p>Props is shortHand for Properties.props is sent components.Normally, the props value does not change. If it needs to be changed, it needs to be changed from where it was sent.Passing parent to child data it is primary Element.It's sent function,Boolean value.You can get initial value in parent components,changed parent components,set default value inside component,set initial value and change child component but don't change inside component.</p>
      
      <p>State is Data-structure that is mostly changed.It's store one default value.This is changed by user interaction.A component handel state internally.You can get initial value but don't changed parent component.You can be set default and changed value inside component.you can set initial value but don't changed child component.</p>

      <h4>How UseState works?</h4>
      <p>UseState is hooks function .It's use only Functional components.It's store two value one state value and another is state Function.It's store state default value like value is empty Array,empty Object,Boolean,null and zero.If state variable is changed and set state function.</p>
    </div>

  );
};

export default FrequentQuestion;
