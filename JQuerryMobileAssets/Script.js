$(".cash_payment").click(function(){
    $(".paymentDetails").hide();
    $(".paymentDetailsH").hide();
  });
  
  $(".debitCredit_payment").click(function(){
    $(".paymentDetails").show();
    $(".paymentDetailsH").show();
  });

  $("#placeOrder").click(function(){
    var points = $("#use_points").html();
    var payment_total = $("#payment_total").html();

    var reduced_total = parseInt(payment_total,10) - parseInt(points,10);
    $('#subtotal_payment_summary').html(reduced_total.toString());
    $("#summaryLink").click();
  });

  $(".homepageNav").on('click', function(){
    window.location.href = "HomePage.html";
  });
  