function sendToWhatsApp(event)
{
  
  var name=document.getElementById("name").value;
  var Email=document.getElementById("Email").value;
  
  var Message=document.getElementById("Message").value;
  
  var phonenumber="7989718198";
  
  var WhatsAppMessage=`My Name is ${name}\nEmail:${Email}\nMessage:${Message}`;
  
  var url =`https://wa.me/${phonenumber} ?text=${encodeURIComponent(WhatsAppMessage)}`;
  
  window.open(url,"_blank")
  
  
}

