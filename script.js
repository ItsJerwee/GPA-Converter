$(document).ready(function () {
    $(".section").hide();
    $("#pGToScale").hide();
    $("#lGToScale").hide();
    $("#lGToPg").hide();
    $("#pGToLg").hide();
});

function enableMethod(answer) {
  if (answer.value == "Select") {
    $("#pGToScale").hide();
    $("#lGToScale").hide();
    $("#lGToPg").hide();
    $("#pGToLg").hide();
  }
  if (answer.value == "pG2Scale") {
    document.getElementById("pGToScale").style.visibility = "visible";
    $(".section").show();
    $("#pGToScale").show();
    $("#lGToScale").hide();
    $("#lGToPg").hide();
    $("#pGToLg").hide();
  }
  if (answer.value == "lG2Scale") {
    document.getElementById("lGToScale").style.visibility = "visible";
    $(".section").show();
    $("#pGToScale").hide();
    $("#lGToScale").show();
    $("#lGToPg").hide();
    $("#pGToLg").hide();
  }
  if (answer.value == "lG2Pg") {
    document.getElementById("lGToPg").style.visibility = "visible";
    $(".section").show();
    $("#pGToScale").hide();
    $("#lGToScale").hide();
    $("#lGToPg").show();
    $("#pGToLg").hide();

  }
  if (answer.value == "pG2Lg") {
    document.getElementById("pGToLg").style.visibility = "visible";
    $(".section").show();
    $("#pGToScale").hide();
    $("#lGToScale").hide();
    $("#lGToPg").hide();
    $("#pGToLg").show();
  }
}

/* converts Percent Grade to 4.0 Scale */
function convert1() {
  const grade = document.getElementById("inputGrade1").value;
  document.getElementById("outputGPA1").value = grade;
  const GPA = document.getElementById("outputGPA1").value;
    if(GPA >= 101 || GPA == ""){
    document.getElementById("outputGPA1").value = "Invalid Input";
    }else{
      if(GPA >= 93 && GPA <= 100){
      document.getElementById("outputGPA1").value = "4.0";
      }else{
        if(GPA >= 90){
        document.getElementById("outputGPA1").value = "3.7";
        }else{
          if(GPA >= 87){
          document.getElementById("outputGPA1").value = "3.3";
          }else{
            if(GPA >= 83){
            document.getElementById("outputGPA1").value = "3.0";
            }else{
              if(GPA >= 80){
              document.getElementById("outputGPA1").value = "2.7";
              }else{
                if(GPA >= 77){
                document.getElementById("outputGPA1").value = "2.3";
                }else{
                  if(GPA >= 73){
                  document.getElementById("outputGPA1").value = "2.0";
                  }else{
                    if(GPA >= 70){
                    document.getElementById("outputGPA1").value = "1.7";
                    }else{
                      if(GPA >= 67){
                      document.getElementById("outputGPA1").value = "1.3";
                      }else{
                        if(GPA >= 65){
                        document.getElementById("outputGPA1").value = "1.0";
                        }else{
                          if(GPA >= 0){
                          document.getElementById("outputGPA1").value = "0.0";
                        }else{
                          document.getElementById("outputGPA1").value = "Invalid Input";
                        }
                      }
                    }
                  }
                }
              } 
            }
          }
        }     
      }
    }
  }
}

/* converts Letter Grade to 4.0 Scale */
function convert2() {
  const grade = document.getElementById("inputGrade2").value;
  document.getElementById("outputGPA2").value = grade;
  const GPA = document.getElementById("outputGPA2").value;
    if (GPA == "A" || GPA == "A+") {
    document.getElementById("outputGPA2").value = "4.0";}
    else {
      if (GPA == "A-") {
      document.getElementById("outputGPA2").value = "3.7";}
      else{
        if (GPA == "B+") {
        document.getElementById("outputGPA2").value = "3.3";}
        else{
          if (GPA == "B") {
          document.getElementById("outputGPA2").value = "3.0";}
          else{
            if (GPA == "B-") {
            document.getElementById("outputGPA2").value = "2.7";}
            else{
              if (GPA == "C+") {
              document.getElementById("outputGPA2").value = "2.3";}
              else{
                if (GPA == "C") {
                document.getElementById("outputGPA2").value = "2.0";}
                else{
                  if (GPA == "C-") {
                  document.getElementById("outputGPA2").value = "1.7";}
                  else{
                    if (GPA == "D+") {
                    document.getElementById("outputGPA2").value = "1.3";} 
                    else{
                      if (GPA == "D") {
                      document.getElementById("outputGPA2").value = "1.0";}
                      else{
                        if (GPA == "E" || GPA == "F") {
                          document.getElementById("outputGPA2").value = "0.0";}
                          else{
                            document.getElementById("outputGPA2").value = "Invalid Input";
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
/* converts Letter Grade to Percent Grade */
function convert3() {
  const grade = document.getElementById("inputGrade3").value;
  document.getElementById("outputGPA3").value = grade;
  const GPA = document.getElementById("outputGPA3").value;
    if (GPA == "A+") {
    document.getElementById("outputGPA3").value = "97-100";}
    else {
      if (GPA == "A") {
      document.getElementById("outputGPA3").value = "93-96";}
      else {
        if (GPA == "A-") {
        document.getElementById("outputGPA3").value = "90-92";}
        else{
          if (GPA == "B+") {
          document.getElementById("outputGPA3").value = "87-89";}
          else{
            if (GPA == "B") {
            document.getElementById("outputGPA3").value = "83-86";}
            else{
              if (GPA == "B-") {
              document.getElementById("outputGPA3").value = "80-82";}
              else{
                if (GPA == "C+") {
                document.getElementById("outputGPA3").value = "77-79";}
                else{
                  if (GPA == "C") {
                  document.getElementById("outputGPA3").value = "73-76";}
                  else{
                    if (GPA == "C-") {
                    document.getElementById("outputGPA3").value = "70-72";}
                    else{
                      if (GPA == "D+") {
                      document.getElementById("outputGPA3").value = "67-69";} 
                      else{
                        if (GPA == "D") {
                        document.getElementById("outputGPA3").value = "65-65";}
                        else{
                          if (GPA == "E" || GPA == "F") {
                          document.getElementById("outputGPA3").value = "0-64";}
                          else{
                            document.getElementById("outputGPA3").value = "Invalid Input";
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

/* converts Percent Grade to Letter Grade */
function convert4() {
  const grade = document.getElementById("inputGrade4").value;
  document.getElementById("outputGPA4").value = grade;
  const GPA = document.getElementById("outputGPA4").value;
    if (GPA == "") {
    document.getElementById("outputGPA4").value = "Invalid Input";
    } else {
      if (GPA >= 97 && GPA <= 100) {
      document.getElementById("outputGPA4").value = "A+";
      } else {
        if (GPA >= 93 && GPA <= 96) {
        document.getElementById("outputGPA4").value = "A";
        } else {
          if (GPA >= 90 && GPA <= 92) {
          document.getElementById("outputGPA4").value = "A-";
          } else {
            if (GPA >= 87 && GPA <= 89) {
            document.getElementById("outputGPA4").value = "B+";
            } else {
            if (GPA >= 83 && GPA <= 86) {
              document.getElementById("outputGPA4").value = "B";
              } else {
                if (GPA >= 80 && GPA <= 82) {
                document.getElementById("outputGPA4").value = "B-";
                } else {
                  if (GPA >= 77 && GPA <= 79) {
                  document.getElementById("outputGPA4").value = "C+";
                  } else {
                    if (GPA >= 73 && GPA <= 76) {
                    document.getElementById("outputGPA4").value = "C";
                    } else {
                      if (GPA >= 70 && GPA <= 72) {
                      document.getElementById("outputGPA4").value = "C-";
                      } else {
                        if (GPA >= 67 && GPA <= 69) {
                        document.getElementById("outputGPA4").value = "D+";
                        } else {
                          if (GPA >= 65 && GPA <= 66) {
                          document.getElementById("outputGPA4").value = "D";
                          } else {
                            if (GPA <= 64 && GPA >= 0) {
                            document.getElementById("outputGPA4").value = "E/F";
                            } else {
                              document.getElementById("outputGPA4").value = "Invalid Input";
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

  
/* hover function on text*/
function changeText(obj, text){
  obj.innerText = text;
}
