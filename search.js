function Search(){

    var text=document.getElementById("inputSearch").value.toString().toLowerCase();
    console.log("салад с говядина и брокколи".indexOf(text)>-1);
    switch(true){

        case ("сыр сырный суп с брокколи и грибы".toString().indexOf(text)>-1):
            ToReceipt(0);
        break;
        
        case ("салад с говядина и брокколи".indexOf(text)>-1):
            ToReceipt(1);
        break;
        
        case "курица куриные маффины с брокколи".indexOf(text)>-1:
            ToReceipt(2);
        break;
        
        case "омлет с овощами овощи порционный".indexOf(text)>-1:
            ToReceipt(4);
        break;
        
        case "каша молочная гречневая каша молочная молоко гречка".indexOf(text)>-1:
            ToReceipt(9);
        break;
        
        case "сырники творог".indexOf(text)>-1:
            ToReceipt(18);
        break;
        
        case "яблоки запечёные яблоки с орехи орехами мед мёд яблоко".indexOf(text)>-1:
            ToReceipt(22);
        break;

    }
}