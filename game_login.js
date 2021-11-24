function add_users(){
    p1=document.getElementById("player1").value;
    p2=document.getElementById("player2").value;
    localStorage.setItem("Player1",p1);
    localStorage.setItem("Player2",p2);
    window.location="game_page.html";
}
function clear(){
    document.getElementById("player1").innerHTML="";
    document.getElementById("player2").innerHTML="";
}