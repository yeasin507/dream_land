


// document.getElementById("ton").addEventListener("click",run)

// function run(){

// var nextIndex = document.getElementById("press").value;
// var password= "i";// am yeasin arafat open it

// if(nextIndex == password){
//     result()
// }else{
//     // alert("You don't have permission to enter here")
//     s()
//     document.getElementById("sr").innerHTML= "You don't have permission to enter here";
// }
// }

// function result(){
//     document.querySelector(".font_input").style.display="none"
//     document.querySelector(".way_text").style.display="none"
//     document.querySelector(".next").style.display="block"
//     document.querySelector(".my_name").style.display="block"
//     document.querySelector("#ton").style.display="none"
//     document.querySelector("#tun").style.display="block"
// }
// function s(){
//     document.querySelector(".font_input").style.display="none"
//     document.querySelector(".s_rc").style.display="block"
// }


// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================




//    I finally finished the work at 2 o'clock at night 🥳🥳🥳


function mf(event) {
  var x = event.key;
  if (x == "Enter") { 
    var nextIndex = document.getElementById("press").value;
    var password= "i am yeasin arafat open it";
    
    if(nextIndex == password){
        result()
    }else{
        s()
        document.getElementById("sr").innerHTML= "You don't have permission to enter here";
    }
  }
}


function result(){
    document.querySelector(".font_input").style.display="none"
    document.querySelector(".way_text").style.display="none"
    document.querySelector(".next").style.display="block"
    document.querySelector(".my_name").style.display="block"
    document.querySelector(".open").style.display="block"

}
function s(){
    document.querySelector(".font_input").style.display="none"
    document.querySelector(".s_rc").style.display="block"
}































































