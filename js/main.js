$(".close-head-signin").click(function(){
  $(".auth").css("display", "none");
  $(".input-signin").css("display", "none");
})

$(".registrate").click(function(){
  $(".auth").css("display", "flex");
  $(".input-signin").css("display", "flex");
})

var danilo = parseInt($("#danilo_votos").parent().find('#danilo_votos').text());
var luis = parseInt($("#luis_votos").parent().find('#luis_votos').text());
var guillermo = parseInt($("#guillermo_votos").parent().find('#guillermo_votos').text());
var amable = parseInt($("#amable_votos").parent().find('#amable_votos').text());
var pelegrin = parseInt($("#pelegrin_votos").parent().find('#pelegrin_votos').text());
var juan = parseInt($("#juan_votos").parent().find('#juan_votos').text());
var saraya = parseInt($("#saraya_votos").parent().find('#saraya_votos').text());
var elias = parseInt($("#elias_votos").parent().find('#elias_votos').text());
var total_votos = parseInt($("#total_votos").parent().find('#total_votos').text());

// firebase

var myFirebaseRef = new Firebase("https://torrid-torch-2098.firebaseio.com");

$("#submit_email").click(function(){
  var email_name = $("#email_name").val();
  var email_pass = $("#email_name").val();

  myFirebaseRef.createUser({ email: email_name , password: email_pass }, function(error, userData)
    {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
});


//chart.js
var ctx = $("#myChart").get(0).getContext("2d");

var data = [
    {
        value: danilo,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Danilo"
    },
    {
        value: luis,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Luis"
    },
    {
        value: guillermo,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: amable,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Danilo"
    },
    {
        value: pelegrin,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Luis"
    },
    {
        value: juan,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: saraya,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Luis"
    },
    {
        value: elias,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

var myDoughnutChart = new Chart(ctx).Doughnut(data);

// new Chart(ctx).Doughnut(data, {
//     animateScale: true
// });

Chart.defaults.global.responsive = true;
