
let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let close = document.getElementById('close');
nav.style.right="-100%";

menu.onclick = function (){

    if (nav.style.right=="-100%") {
      nav.style.right="0px";
      menu.style.display="none";
      close.style.display="block";
    }
    else{
      nav.style.right="-100%";
      menu.style.display="block";
    }

    }

    close.onclick = function (){

      if (nav.style.right=="0px") {
        nav.style.right="-100%";
        menu.style.display="block";
        close.style.display="none";
      }
      else{
        nav.style.right="0px";
   
      }
  
      }
    //typed js configur


    var typed = new Typed('.typed',{
      strings:[
         'Content',
         'Developer',
         'Coder'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
      });
      
//mail send

function sendmail() {

  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();

  // var body = $('#body').val();

  var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;
  //console.log(name, phone, email, message);

  Email.send({
    SecureToken: "881c2fd5-a4d0-41a8-885e-345a5f825fbe",
    To: 'abutalhabd06@gmail.com',
    From: "Mail@abutalhabd.xyz",
    Subject: "contact from new " + name,
    Body: Body
  }).then(
    message => {
      //console.log (message);
      if (message == 'OK') {
        innerHTML = Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Form Submission Successful',
          showConfirmButton: false,
          timer: 1500
        })      }
      else {
        console.error(message);
      innerHTML =  Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Your Form Submission Fail',
        showConfirmButton: false,
        timer: 1500
      })

      }

    }
  );



}
//footer year

var date = new Date();
var year = date.getFullYear();
document.getElementById('Yr').innerHTML = year;

var loader = document.getElementById("loader");
window.addEventListener("load", function() {
  loader.style.display=('none');
});
