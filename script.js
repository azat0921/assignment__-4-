let arr = [1,1,0,0,1];
let res;
var start = 100;


function calcEdu() {

    
    var select = document.getElementById('education');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;

    if(text == "Undergraduate degree"){
        arr[0] = value; //  1.5 
    }
    
    if(text == "College degree"){
        arr[0] = value; //  1.2 
    }
    
    if(text == "High school degree"){
        arr[0] = value; //  1.05
    }

    if(value == 0.9){
        arr[0] = value; //  0.9
    }
    
    
    
    
     console.log("education = " + arr[0]); 


}

function calcNet(){

    
    var select = document.getElementById('familyNet');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;

    if(text == "More than 10,000$"){
        arr[1] = value; //  2 
    }
    
    if(text == "Between 5,000$ and 10,000$"){
        arr[1] = value; //  1.5 
    }
    
    if(text == "Less than 5,000$"){
        arr[1] = value; //  1.2
    }

     console.log("net worth = " + arr[1]);
    
    
    
}


function calcCaste(){

    var select = document.getElementById('caste');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;

    

     if(text == "Brahmin"){
        arr[2] = parseFloat(value); //  100 
    }
    
    if(text == "Kshatriya"){
        arr[2] = parseFloat(value); //  50 
    }
    
    if(text == "Vaishya"){
        arr[2] = parseFloat(value); //  20
    }

    if(text == "Shudra"){
        arr[2] = parseFloat(value); //  10
    }

    if(text == "Varna"){
        arr[2] = parseFloat(value); //  -50
    }

     console.log("caste = " + arr[2]);

}


var total = [];

function test(item){
       if(filteration(item) == true){
            total.push(parseFloat(item.value));
        }
        else{
            var i = 0;
            while (i < total.length) {
                if (total[i] == item.value) {
                total.splice(i, 1);
                } else {
                ++i;
                }
            }
         }
         
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
         
        
        arr[3] = total.reduce(reducer);


          console.log( "skills = " + arr[3]);
}

const filteration = (item) => {
    return item.checked;
}

const items = ['1', '2', '3']
function calcul(){  // Function to calculate age
    items.forEach(function(item){
        if(document.getElementById(item).checked == true)
        arr[4] = document.getElementById(item).value;
      })
        console.log("age = " + arr[4]);

    // var t;

    // t = (start * arr[0] * arr[1] + arr[2] + arr[3]) * arr[4];

    // console.log(t);
}

var tRep = [];
const r = [0.85, 0.9, -20];

function reputCalc(rep){
    

    if(filteration(rep) == true){
        
        tRep.push(parseFloat(rep.value));
                
    }
    
    else{
            for(var i = 0; i < tRep.length; ++i){
            if(tRep[i] == rep.value){
                tRep.splice(i, 1);
            }
        }
    }
    
    
    // arr[5] = tRep 
    //  console.log("reputation = " + arr[5]);

}

 

const calculate = () => {

    let name = document.getElementById('name').value;
    let price = Number(bid.value);
    let love_letter = document.getElementById('love').value;
   
    let human = {
        bride_name : name,
        bride_price : price,
        bride_love_letter : love_letter
        
      };

    console.log(human);
    
    
    if(document.getElementById('name').value == "" || !document.getElementById('bid').value){
        window.alert("Name and Bid fields can't be empty!");
        form1.name.focus();
        return false;
    }
    else{
        // price = document.getElementById('bid').value
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 0 && arr[3] == 0 && arr[4] == 1){
            document.getElementById("demo").innerHTML = `Your price for ${name} ${price} $ ${human.bride_love_letter}`;
        }
        else{
    
        
        var t;
    
        t = (price * arr[0] * arr[1] + arr[2] + arr[3]) * arr[4];
    
            
    
        for(var i =0;i<tRep.length;i++){
            console.log(tRep[i]);
            if(tRep[i] > 0){
                
                t*= tRep[i];
            }
            else{
                
                t+= tRep[i];
            }
        }
        var number = Math.floor(t);
       
    
        console.log("total = " + number);
    
        // DOM manipulation HTML

        
        document.getElementById("demo").innerHTML = `Your price for ${human.bride_name} ${number} $ ${human.bride_love_letter}`;
        }       
        // return true;
        
    }
                    
    
    

    
}

    document.getElementById("btn2").addEventListener("click", calculate);
    

document.getElementById("h1").innerHTML = "<h1>Dowry Calculator</h1>";

// DOM manipulation CSS

document.getElementById("cr").style.fontFamily = "Arial";
document.getElementById("cr").style.textAlign = "center"

// document.getElementById("container").style.background = "#fff