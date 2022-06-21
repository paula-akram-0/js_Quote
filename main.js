
var QouteAndWriter = [
    {
        quote:'“Be yourself; everyone else is already taken.”',
        Writer:'Oscar Wilde'
    },
    {
        quote:'“So many books, so little time.”',
        Writer:'Frank Zappa'
    },
    {
        quote:'“A room without books is like a body without a soul.”',
        Writer:' Marcus Tullius Cicero'
    },
    {
        quote:'“You only live once, but if you do it right, once is enough.”',
        Writer:'Mae West'
    },
    {
        quote:'“Be the change that you wish to see in the world.”',
        Writer:' Mahatma Gandhi'
    },
    {
        quote:'“If you tell the truth, you don,t have to remember anything.”',
        Writer:'Mark Twain'
    }
]



function addqoute(){
  
    
         const random = Number.parseInt(Math.random()*QouteAndWriter.length + 1);
       
    
            
          


            
            
         document.getElementById("text1").innerHTML = QouteAndWriter[random].quote
         document.getElementById("text2").innerHTML = QouteAndWriter[random].Writer
         

  

    
  
}