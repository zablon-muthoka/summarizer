


$(document).ready(()=>{

  $("#formInput").on("submit",(e)=>{
    e.preventDefault()
    let text=$("#rawtext").val()

    if(text!=="" && text.length > 30){
        sendData(text)
    }

    else{
        console.log("Text is short")
    }
  })



  let texts=["Human","Authenticate","Summarize"]

    AnimateText()
  

})


const AnimateText=()=>{
    let text=["Human","Authenticate","Summarize"]
        var element=document.querySelector("#animate");
         let count=0;
         let count2=0;
        
             setInterval(() => {
              if(count==0)
              {
                 element.innerHTML+=text[count][count2];
                  count2++;
                  element.style.color="purple"
                  if(count2==text[count].length + 1)
                  {
                      count++;
                      count2=0;
                      element.innerHTML="";
                  }
              }  
                
             else if(count==1)
              {
                  element.innerHTML+=text[count][count2];
                  count2++;
                  element.style.color="black"
                  if(count2==text[count].length +1)
                  {
                      count++;
                      count2=0;
                      element.innerHTML="";
                  }
              }  
             else if(count==2)
              {
                   element.innerHTML+=text[count][count2];
                  count2++;
                
                  if(count2==text[count].length + 1)
                  {
                    
                    count2=0;
                    element.innerHTML="";
                    count=0;
                  }
              }  
         
             }, 500);
         
    }
       

function sendData(text) {
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/analyze",
        data: { rawtext: text },
        success: (data)=> {
            console.log(data);
            let content=JSON.parse(data)
            let summary=content['summary']

            $("#summary").html(summary)
            $("#summary").removeClass("d-none")
        },
        error: (error)=> {
            console.log(error);
            // Handle errors here
        }
    });
    // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function(event) { 
    // Add animation-done class after 1 second
    setTimeout(function() {
        document.getElementById("animationSection").classList.add("animation-done");
    }, 1000);
});
}


