
$(document).ready(function(){
    var filled = [];
    $(function () {
        showText("#main-heading", "Здравей, Бонго... :)", 0, 150);
    });
    
    var showText = function (target, message, index, interval) {   
      if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
      } else if(filled.length == 0) {
          showText("#secondary-heading", "Днес тайно те снимах докато работиш. Според мен, се получи яка снимка... Ето я.", 0, 150);
          
          filled[0] = true;
      } else if(filled.length == 1) {
          setTimeout(function(){
                $("#cavewoman").show();
              
                setTimeout(function() {
                  filled[1] = true;
                  showText("#third-heading", "Прекрасна си, не мислиш ли? Ето заради такова Бонго, си заслужава да живееш и в пещера :) :) :)", 0, 250);
                })
          }, 250);   
      } else if (filled.length == 2) {
          $("#click-me-container").show();
      }
    }
    
    $("#click-me-container").click(function(){
        $("#click-me-container").hide();
        $("#hug").show();
        $("#hug-text").show();
    });
});
