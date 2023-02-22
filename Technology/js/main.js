// smtp ja start
function newsletter() {
    const email = document.getElementById("email").value;

    mail.send({
        SecureToken: "7787f1a4-7042-4219-97b2-aba8e3535579",
        To: 'nafizmh20+test@gmail.com',
        From: "war114116926@gmail.com",
        Subject: "Subscribe User",
        Body: "Email-: " + email,
    }).then(
        message => alert(message)
    );
}
// smtp ja end


/* ------------------- Mobile Menu Js ------------------- */
const menu = document.querySelector(".mobile-menu-area"); ///click class
const header = document.querySelector("header") //where to ad

menu.addEventListener('click', function (event) {
    header.classList.toggle('active');
});
