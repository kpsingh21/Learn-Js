// https://www.pexels.com/@hiteshchoudhary

//events in js run sequencally, browser events will act on any action

// syntax

// 1. element.addEventListener(event, function(){}, useCapture)

// event	Required.
// The name of the event.
// Do not use the "on" prefix.
// Use "click" not "onclick".

// The Complete List of DOM Events.
// function	Required.
// The function to run when the event occurs.
// useCapture	Optional (default = false).
// false - The handler is executed in the bubbling phase.
// true - The handler is executed in the capturing phase.

//2.  attachEvent()  //used earlier  (internet explorer)
//3.  jQuery - on     // a framework simlar to react


//In event yoy will get two types of event brower event and environment event ex: mousehover 

//this are the properties we will get in event : Pointer event 
    // type : keyboard and mouse event,
    // timestamp,
    // defaultPrevented : default behaviour we can change example :    e.preventDefault() taht we use in forms to stop submit
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode: we have direct option for to check this special keys is press or not 

//Event Propogation: event bubbling , event capturing

// event bubbling: from down to up // inside to outside
// ex:   //example to understand event propogation
  
    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked"); // when we click owl first above code should trigger as owl is also a part of <ul> but first owl is printing  
    // }, false)