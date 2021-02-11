
<!DOCTYPE html>
<html>
<body>

<center>
<p>EBS Securty</p>
</center>
<hr>

<label>Mesaj Kutusu : </label><input type="text" class="EBS" onkeypress="myFunction()">

<script>
function myFunction() {
  if(event.keyCode === 13)
   {
     
     var inputveri = document.getElementsByClassName("EBS")[0].value

      if(inputveri!="")
      {
       alert("Post İşlemi Yapıldı...");
       alert("www.ebubekirbastama.com");
      }
      else 
      {
          alert("Lütfen veri giriniz.");
      }
   }
}
</script>

</body>
</html>
