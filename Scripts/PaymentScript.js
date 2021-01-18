$(".cash_payment").click(function(){
    $(".paymentDetails").hide();
    $(".paymentDetailsH").hide();
  });
  
  $(".debitCredit_payment").click(function(){
    $(".paymentDetails").show();
    $(".paymentDetailsH").show();
  });

  



  var reduced_total;

  $("#addToBill").click(function(){
    var points = $("#use_points").val();


    var subtotal_payment = $("#subtotal_payment").html();
    var promos_payment = $("#promos_payment").html();
    var payment_total = $("#payment_total").html();
    var point_discount_payment = $("#point_discount_payment").html();

    var subtotal_payment_summery = $("#subtotal_payment_summery").html();
    var promos_payment_summery = $("#promos_payment_summery").html();
    var point_discount_payment_summery = $("#point_discount_payment_summery").html();
    var paymentSummary_total = $("#paymentSummary_total").html();

    
    if(points==null || points == ""){
      reduced_total = parseInt(subtotal_payment,10)-35-parseInt(promos_payment,10);
      $("#point_discount_payment").html('0');
      $("#point_discount_payment_summery").html('0');
      $("#payment_total").html(reduced_total.toString());
      $("#paymentSummary_total").html(reduced_total.toString());

      $("#promos_payment").html(promos_payment.toString());
      $("#promos_payment_summery").html(promos_payment.toString());
    }
    else{
      $("#promos_payment").html(promos_payment.toString());
      reduced_total = parseInt(subtotal_payment,10) - parseInt(points,10)-35-parseInt(promos_payment,10);
      $("#point_discount_payment").html(points.toString());
      $("#point_discount_payment_summery").html(points.toString());
      $("#payment_total").html(reduced_total.toString());
      $("#paymentSummary_total").html(reduced_total.toString());

      $("#promos_payment").html(promos_payment.toString());
      $("#promos_payment_summery").html(promos_payment.toString());
    }
     
  });

  $("#placeOrder").click(function(){
    $('#subtotal_payment_summary').html(reduced_total.toString());
    $("<a href='#paymentSummury'></a>").click();
  });

  




  


    