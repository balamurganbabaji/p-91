function login()
{
    player1_name = document.getElementById("player1_input").value; player2_name = document.getElementById("player2_input").value; 
    localStorage.setItem("player1_input", player1_name); 
    localStorage.setItem("player2_input", player2_name); 
    window.location = "game_page1.html";
}