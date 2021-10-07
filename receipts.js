function ToReceipt(type){
    document.getElementById("Receipt").classList.remove('d-none');
    AddReceipt();

  }
  function AddReceipt(){
    document.getElementById("NameReceipt").innerHTML="Сырный суп-пюре с брокколи и грибами";
    document.getElementById("DescribeReceipt").innerHTML="Супы-пюре — отличный вариант, чтобы разнообразить свое меню зимой. Они горячие, сытные, плотные, подходят для питания всех членов семьи — от малышей до старшего поколения. В нашем супе-пюре брокколи, которую многие не любят, обретает совершенно новые оттенки вкуса.";
    document.getElementById("TimeReceipt").innerHTML="Время приготовления: 40 мин.";
    document.getElementById("WeightReceipt").innerHTML="Вес блюда: 600 г.";
    document.getElementById("CcalReceipt").innerHTML="Килокаллорий: 79 ккал/100 г";
    var steps=document.getElementById("AllSteps");
    steps.innerHTML="";
    var ul=document.getElementById("Ingridient");
    ul.innerHTML="";
    Addingridient("Вода 500 миллилитр");
    Addingridient("Брокколи 100 г");
    Addingridient("Шампиньоны 100 г");
    Addingridient("Лук 1 штука");
    Addingridient("Морковь 1 штука");
    Addingridient("Молоко 50 миллилитр");
    Addingridient("Плавленый сыр \"для супа\" 50 г");
    Addingridient("Соль чайная ложка");
    AddStep("Воду довести до кипения, положить нарезанные лук и морковь, варить 5 минут. Добавить брокколи и половину шампиньонов, оставить вариться еще на 10 минут.","https://рецепты.здоровое-питание.рф/upload/iblock/2ea/2ea9d590be134690b5eac15655c9f5a5.png");
    AddStep("Пока овощи и грибы варятся, вторую половину шампиньонов мелко нарезать и обжарить на сухой сковороде (без масла).","https://рецепты.здоровое-питание.рф/upload/iblock/d0e/d0e875b09027e5341b9c85858f3539e1.jpg");
    AddStep("В суп влить молоко и плавленый сыр (чтобы он быстрее растворился, предварительно нарежьте его кубиками или подержите в морозилке и натрите на терке).","https://рецепты.здоровое-питание.рф/upload/iblock/311/31178c4d8997c00859fe01a58de089f9.jpg");
    AddStep("Когда сыр растворится, посолить суп и пюрировать блендером. Подавать, добавив обжаренные грибы.","https://рецепты.здоровое-питание.рф/upload/iblock/d9f/d9fa6a51e5c870eef41768af31c7cb4d.jpg");
  }
  function Addingridient(ing){
    var ul=document.getElementById("Ingridient");
    var li=document.createElement("li");
    li.innerHTML=ing;
    ul.appendChild(li);
  }
  function AddStep(text,src){

    var steps=document.getElementById("AllSteps");
    var divfirst=document.createElement("div");
    divfirst.setAttribute("class","col-md-8");
    var divsecond=document.createElement("div");
    divsecond.setAttribute("class","card-body");
    var h5=document.createElement("h5");
    h5.setAttribute("class","card-title");
    h5.innerHTML=text;
    var divthird=document.createElement("div");
    divthird.setAttribute("class","col-md-4");
    var img=document.createElement("img");
    img.setAttribute("src",src);
    img.setAttribute("class","card-img");
    divthird.appendChild(img);
    divsecond.appendChild(h5);
    divfirst.appendChild(divsecond);
    steps.appendChild(divfirst);
    steps.appendChild(divthird);

  }