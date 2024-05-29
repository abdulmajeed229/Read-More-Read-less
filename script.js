
var para =`The landscape of web development is constantly evolving, driven by technological advancements, changing user expectations, and emerging trends. As we look ahead, several key themes are shaping the future of web development: 

Responsive and Adaptive Design: With the proliferation of devices with varying screen sizes and resolutions, responsive and adaptive design techniques will continue to be essential. Websites must seamlessly adapt to different devices and orientations to provide a consistent user experience.
<br><br>
Progressive Web Apps (PWAs): PWAs offer a hybrid experience, combining the best features of websites and mobile applications. They provide offline capabilities, push notifications, and faster load times, offering users a native app-like experience directly from their web browser.


<br> <br>

Voice Search and AI Integration: As voice-controlled devices become more prevalent, web developers will need to optimize their sites for voice search. Integrating AI-driven chatbots and virtual assistants can enhance user engagement and provide personalized experiences.`

var text = document.getElementById("text")
var conver = para.slice(0,226)
function foo(a){
  if(a){
    text.innerHTML=`${para} <br><br> <button id="btn1">See less</button>`
  }else{
    text.innerHTML=`${conver} <br><br> <button id="btn2">See more</button>`

  }
}

foo(false)

text.addEventListener("click",(e)=>{
  if(e.target.id==="btn2"){
foo(true)
}else if(e.target.id==="btn1"){

foo(false)

}
}
)