//storing
player_1_name=  localStorage.getItem("Player1");
player_2_name= localStorage.getItem("Player2");
console.log(player_1_name);
console.log(player_2_name);
Ques_turn="Player1";
Ans_turn="Player2"
player1_score= 0;
player2_score= 0;
//Names
document.getElementById("p1_name").innerHTML= player_1_name+":";
document.getElementById("p2_name").innerHTML= player_2_name+":";
//scores
document.getElementById("p1_score").innerHTML= player1_score;
document.getElementById("p2_score").innerHTML= player2_score;
//Turn
document.getElementById("player_ques").innerHTML= "Question turn- "+player_1_name;
document.getElementById("player_ans").innerHTML="Answer turn- "+player_2_name;
//Send function
function send(){
get_word=document.getElementById("word").value;
word= get_word.toLowerCase();
console.log("word in lowercase = "+word);

charAt1= word.charAt(1);
console.log(charAt1);

length_divide_2= Math.floor(word.length/2);
charAt2=word.charAt(length_divide_2);
console.log(charAt2);

length_minus_1= word.length-1;
charAt3= word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1= word.replace(charAt1,"_");
remove_charAt2= remove_charAt1.replace(charAt2,"_");
remove_charAt3= remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

question_word= "<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
input_box="<br>Answer: <input type='text' id='check_box'>";
check_btn="<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
row= question_word+input_box+check_btn;
document.getElementById("output").innerHTML= row;
document.getElementById("word").value="";    
}
function check(){
    get_answer= document.getElementById("check_box").value;
    answer= get_answer.toLowerCase();
    console.log(answer);
    if(answer==word){
        if(Ans_turn=="Player1"){
            player1_score= player1_score+1;
            document.getElementById("p1_score").innerHTML= player1_score;
        }
        else{
            player2_score= player2_score+1;
            document.getElementById("p2_score").innerHTML=player2_score;
        }
        if(Ans_turn=="Player1"){
            document.getElementById("player_ques").innerHTML="Question Turn- "+player_1_name;
            document.getElementById("player_ans").innerHTML="Answer Turn- "+player_2_name;
        }
        else{
            document.getElementById("player_ques").innerHTML="Question Turn- "+player_2_name;
            document.getElementById("player_ans").innerHTML="Answer Turn- "+player_1_name;
        }
        document.getElementById("check_box").value="";
    }
}