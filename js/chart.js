function chartLoad() {

  var danilo = parseInt($("#danilo_votos").text());
  var luis = parseInt($("#luis_votos").text());
  var guillermo = parseInt($("#guillermo_votos").text());
  var amable = parseInt($("#amable_votos").text());
  var pelegrin = parseInt($("#pelegrin_votos").text());
  var juan = parseInt($("#juan_votos").text());
  var saraya = parseInt($("#saraya_votos").text());
  var elias = parseInt($("#elias_votos").text());
  var total_votos = parseInt($("#total_votos").text());


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
          label: "Guillermo"
      },
      {
          value: amable,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Amable"
      },
      {
          value: pelegrin,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Pelegrin"
      },
      {
          value: juan,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Juan"
      },
      {
          value: saraya,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Saraya"
      },
      {
          value: elias,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Elias"
      }
  ]

  var myDoughnutChart = new Chart(ctx).Doughnut(data);

  console.log("ready")
};

var waypoint = new Waypoint({
  element: document.getElementById('feeds'),
  handler: function() {
    chartLoad();
  }
})
