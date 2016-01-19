$(document).ready(function() {
  var registrationButton = $(".registrate");

  // policy - arrow
    $(".privacy-link").click(function(){
      privacy();
    });

    $(".data_collected-link").click(function(){
      data();
    });

    $(".cookies-link").click(function(){
      cookies();
    });

  function privacy(){
    $(".data_collected").css("display", "none");
    $(".cookies").css("display", "none");
    $(".privacy").css("display", "flex");
  }

  function data(){
    $(".privacy").css("display", "none");
    $(".cookies").css("display", "none");
    $(".data_collected").css("display", "flex");
  }

  function cookies(){
    $(".privacy").css("display", "none");
    $(".data_collected").css("display", "none");
    $(".cookies").css("display", "flex");
  }

  function policyInClick(){
    $(".policy-outter").css("transform", "translateY(0px)");
    $(".auth").fadeIn(500);
  }

  function policyOutClick(){
    $(".policy-outter").css("transform", "translateY(5000px)");
    $(".auth").fadeOut(500);
  }

  function registrate(){
    if ($(".registrate").val() == "registrate") {
      showRegistrate();
    } else {
      //console.log("go to vote");
      $('html, body').animate({
      scrollTop: $(".candidatos-container").offset().top
      }, 1000);
    }
  }

  function registrateBtn(){
    if ($(".registrate").val() == "registrate") {
      showRegistrate();
    } else {
      showVoted();
    }
  }

  $(".votar-btn").click(function(){
      registrateBtn();
    });

  $(".voted-out").click(function(){
    hideVoted();
  })

  $(".policy-link").click(function(){
      policyInClick();
    });

  $(".close-policy-signin").click(function(){
      policyOutClick();
    });

  function showVoted(){
    $(".voted-out").css("transform", "translateY(0px)");
    $(".voted-back").fadeIn(500);
  }

  function showRegistrate(){
    $(".auth").fadeIn(500);
    $(".input-signin").css("transform", "translateY(0px)");
  }

  function hideRegistrate(){
    $(".auth").fadeOut(500);
    $(".input-signin").css("transform", "translateY(-5000px)");
  }

  function hideVoted(){
    $(".voted-out").css("transform", "translateY(-5000px)");
    $(".voted-back").fadeOut(500);
  }

  function voted_candidatos(){
    $(".votos-danilo_votos").val("voted");
    $(".votos-luis_votos").val("voted");
    $(".votos-guillermo_votos").val("voted");
    $(".votos-minerva_votos").val("voted");
    $(".votos-amable_votos").val("voted");
    $(".votos-pelegrin_votos").val("voted");
    $(".votos-juan_votos").val("voted");
    $(".votos-saraya_votos").val("voted");
    $(".votos-elias_votos").val("voted");
  }

  $(".close-head-signin").click(function(){
    hideRegistrate();
  });

  $(".close-voted-signin").click(function(){
    hideVoted();
  });

  $(".registrate").click(function(){
    registrate();
  });

  // firebase
  var myFirebaseRef = new Firebase("https://torrid-torch-2098.firebaseio.com");
  var ref = new Firebase("https://torrid-torch-2098.firebaseio.com/web/saving-data/votos");
  var newRef = new Firebase("https://torrid-torch-2098.firebaseio.com/web/saving-data");
  var usersRef = ref.child("user");

  $("#submit_email").click(function(){
    var email_name = $("#email_name").val();
    var email_pass = $("#email_name").val();

    myFirebaseRef.createUser({ email: email_name , password: email_pass }, function(error, userData)
      {
      if (error) {
        //console.log("Error creating user:", error);
        hideRegistrate();
        showVoted();
      } else {
        //console.log("Successfully created user account with uid:", userData.uid);
        ref.authWithPassword({
          email    : email_name,
          password : email_pass
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            hideRegistrate();
            $(".registrate").html("Vota!");
            $(".registrate").val("vota");
            // change value
            function totalVotos() {
              var hopperRef = usersRef.child("total_votos");
              hopperRef.transaction(function(votos){
                  return (votos + 1);
                });
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                $('#total_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.danilo);
              });
            };

            $('.votos-danilo_votos').click(function(){
              if ($('.votos-danilo_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("danilo");
                hopperRef.transaction(function(votos){
                    voted_candidatos();
                    return (votos + 1);
                  });
              } else {
                showVoted();
              }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                $('#danilo_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.danilo);
              });
              totalVotos();
            });

            $('.votos-luis_votos').click(function(){
              if ($('.votos-luis_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("luis");
                hopperRef.transaction(function(votos){
                  voted_candidatos();
                    return (votos + 1);
                  });
                } else {
                  showVoted();
                }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                    $('#luis_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.luis);
              });
              totalVotos();
            });

            $('.votos-minerva_votos').click(function(){
              if ($('.votos-danilo_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("danilo");
                hopperRef.transaction(function(votos){
                    voted_candidatos();
                    return (votos + 1);
                  });
              } else {
                showVoted();
              }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                $('#minerva_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.danilo);
              });
              totalVotos();
            });

            $('.votos-guillermo_votos').click(function(){
              if ($('.votos-guillermo_votos').val() == "no-voted"){
              var hopperRef = usersRef.child("guillermo");
              hopperRef.transaction(function(votos){
                voted_candidatos();
                  return (votos + 1);
                });
              } else {
                showVoted();
              }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                    $('#guillermo_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.guillermo);
              });
              totalVotos();
            });

            $('.votos-amable_votos').click(function(){
              if ($('.votos-amable_votos').val() == "no-voted"){
              var hopperRef = usersRef.child("amable");
              hopperRef.transaction(function(votos){
                voted_candidatos();
                  return (votos + 1);
                });
              } else {
                showVoted();
              }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                $('#amable_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.amable);
              });
              totalVotos();
            });

            $('.votos-pelegrin_votos').click(function(){
              if ($('.votos-pelegrin_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("pelegrin");
                hopperRef.transaction(function(votos){
                  voted_candidatos();
                    return (votos + 1);
                  });
                } else {
                  showVoted();
                }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                    $('#pelegrin_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.pelegrin);
              });
              totalVotos();
            });

            $('.votos-juan_votos').click(function(){
              if ($('.votos-juan_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("juan");
                hopperRef.transaction(function(votos){
                  voted_candidatos();
                    return (votos + 1);
                  });
                } else {
                  showVoted();
                }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                    $('#juan_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.juan);
              });
              totalVotos();
            });

            $('.votos-saraya_votos').click(function(){
              if ($('.votos-saraya_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("saraya");
                hopperRef.transaction(function(votos){
                  voted_candidatos();
                    return (votos + 1);
                  });
                } else {
                  showVoted();
                }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
              $('#saraya_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.saraya);
              });
              totalVotos();
            });

            $('.votos-elias_votos').click(function(){
              if ($('.votos-elias_votos').val() == "no-voted"){
                var hopperRef = usersRef.child("elias");
                hopperRef.transaction(function(votos){
                  voted_candidatos();
                    return (votos + 1);
                  });
                } else {
                  showVoted();
                }
              // Attach an asynchronous callback to read the data at our posts reference
              hopperRef.on("value", function(snapshot) {
                //console.log(snapshot.val());
                $('#elias_votos').html(snapshot.val());
              }, function (errorObject) {
                console.log("The read failed: " + votos.elias);
              });
              totalVotos();
            });
            //console.log("Auth Ready");
            //console.log("Authenticated successfully with payload:", authData);
          }
        });
      }
    });
  });

  // display votos
  var hopperRef = usersRef.child("danilo");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#danilo_votos').html(snapshot.val());
    danilo = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.danilo);
  });

  var hopperRef = usersRef.child("luis");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#luis_votos').html(snapshot.val());
    luis = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.luis);
  });

  var hopperRef = usersRef.child("minerva");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#minerva_votos').html(snapshot.val());
    danilo = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.danilo);
  });

  var hopperRef = usersRef.child("guillermo");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#guillermo_votos').html(snapshot.val());
    guillermo = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.guillermo);
  });

  var hopperRef = usersRef.child("amable");
  hopperRef.on("value", function(snapshot) {
    $('#amable_votos').html(snapshot.val());
    amable = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.amable);
  });

  var hopperRef = usersRef.child("pelegrin");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#pelegrin_votos').html(snapshot.val());
    pelegrin = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.pelegrin);
  });

  var hopperRef = usersRef.child("juan");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#juan_votos').html(snapshot.val());
    juan = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.juan);
  });

  var hopperRef = usersRef.child("saraya");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#saraya_votos').html(snapshot.val());
    saraya = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.saraya);
  });

  var hopperRef = usersRef.child("elias");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#elias_votos').html(snapshot.val());
    elias = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.elias);
  });

  var hopperRef = usersRef.child("total_votos");
  hopperRef.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $('#total_votos').html(snapshot.val());
    total_votos = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + votos.elias);
  });

  $(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".nav-container").css("transform", "translateY(0px)");
    } else {
      $(".nav-container").css("transform", "translateY(-200px)");
    }
    this.previousTop = currentTop;
  });

});
