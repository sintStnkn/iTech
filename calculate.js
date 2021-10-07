function CountCal() {

    var Aval = document.getElementById('inputAge').value;
    var Wval = document.getElementById('inputWeight').value;
    var Hval = document.getElementById('inputHeight').value;
    var select = document.getElementById("ativity");
    var activityValue = select.options[select.selectedIndex].value;
    var genderVal=-5;
    if(document.getElementById("MaleB").checked){
      genderVal=-5;
    }
    else if(document.getElementById("FemaleB").checked){
      genderVal=-161;
    }
    var res=Math.round((10*Wval+6.25*Hval-5*Aval+genderVal)*activityValue);
    var resDown=res-250;
    var resFastDown=res-500;
    document.getElementById("result").classList.remove('d-none');
    document.getElementById('resultS').innerHTML = "Ваша дневная норма киллокаллорий: "+res;
    document.getElementById('resultDown').innerHTML = "Ваша дневная норма киллокаллорий для умеренного худения: "+resDown;
    document.getElementById('resultFastDown').innerHTML = "Ваша дневная норма киллокаллорий для быстрого худения: "+resFastDown;
  }