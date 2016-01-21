function chartLoad() {

  var danilo = parseInt($("#danilo_votos").text());
  var luis = parseInt($("#luis_votos").text());
  var guillermo = parseInt($("#guillermo_votos").text());
  var minerva = parseInt($("#minerva_votos").text());
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
          color:"#BF55EC",
          highlight: "#BE90D4",
          label: "Danilo"
      },
      {
          value: luis,
          color: "#446CB3",
          highlight: "#59ABE3",
          label: "Luis"
      },
      {
          value: minerva,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Minerva"
      },
      {
          value: guillermo,
          color: "#87D37C",
          highlight: "#90C695",
          label: "Guillermo"
      },
      {
          value: amable,
          color:"#DB0A5B",
          highlight: "#D2527F",
          label: "Amable"
      },
      {
          value: pelegrin,
          color: "#6BB9F0",
          highlight: "#C5EFF7",
          label: "Pelegrin"
      },
      {
          value: juan,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Juan"
      },
      {
          value: saraya,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Saraya"
      },
      {
          value: elias,
          color: "#BDC3C7",
          highlight: "#BDC3C7",
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
