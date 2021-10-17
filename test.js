/*
Я пытался разнести одну функцию Choise на две для того, чтобы кнопка "Назад" работала нормально. Т.е. пока мы видим категории - кнопки не видно.
Выбрали категорию - появилась кнопка возврата к категориям. Выбрали блюдо - кнопка "Назад" должна была бы возвращать к выбору блюд.
И уже из выбора блюд кнопка "Назад" снова вела бы к выбору категории и пропадала после показа категорий.
Но чет сложно.
В данный момент из-за того, что функция одна, сделать кнопку для возврата к какому-то определенному куску функции сложно. Мб невозможно вообще.
Сама кнопка на 231 строке хтмльника, id=moveBack.
Обращаться можно как "var backButton = document.getElementById("moveBack");" и далее "backButton.что-нибудь", либо просто "document.getElementById("moveBack").что-нибудь".
*/


function fChoiseIsDone(type) {
	var backButton = document.getElementById("moveBack");
	var alldishes = document.getElementById("ChoiseDishes");
	backButton.setAttribute("onClick", "fChoiseIsDone()");
    alldishes.innerHTML = "";
    var isGiveRec = false;
	// после выбора из категории выбираем сам рецепт
	switch (type) {
        case "eggs":
            AddOneChoise("Яичница", "https://static.1000.menu/img/content-v2/fa/b5/29517/yaichnica-s-syrom_1619936542_9_max.jpg", "friedeggs");
            AddOneChoise("Омлет", "https://static.1000.menu/img/content-v2/90/36/45938/omlet-iz-yaic-i-moloka-prostoi-na-skovorode_1622035051_0_max.jpg", "omlete");
            break;
        case "kasha":
            AddOneChoise("Каша на воде", "http://www.vkussovet.ru/content/media/pic/large/1000000/16000/15488-1c9ecb9e5b01e3d8.jpg", "waterkasha");
            AddOneChoise("Каша на молоке", "https://www.patee.ru/r/x6/17/c9/52/960m.jpg", "milkkasha");
            break;
        case "fruits":
            AddOneChoise("Запечёный фруктовый завтрак", "https://www.maggi.ru/data/images/recept/img640x500/recept_6720_vicv.jpg", "fruitzapek");
            AddOneChoise("Сырой фруктовый завтрак", "https://media.istockphoto.com/photos/delicious-and-healthy-breakfast-with-fruits-berries-cereal-picture-id479774516", "fruitsiroi");
            break;
        case "cheese":
            AddOneChoise("Запеканка", "https://static.1000.menu/img/content/35128/tvorojnaya-zapekanka-kak-v-detstve_1558702907_1_max.jpg", "zapek");
            AddOneChoise("Сырники", "https://img-global.cpcdn.com/recipes/09d289bc87a7d946/1200x630cq70/photo.jpg", "cheeznik");
            AddOneChoise("Вареники", "https://www.photorecept.ru/wp-content/uploads/2019/07/9-12-1300x864.jpg", "varenik");
            AddOneChoise("Йогурт", "https://gotovite.ru/wp-content/uploads/2015/09/grecheskiy_yogurt.png", "yoga");
            break;
        case "friedeggs":
            AddOneChoise("Яичница со специями", "https://image.freepik.com/free-photo/fried-eggs-with-spices-on-whole-background-close-up_185193-13650.jpg", "friedeggsSpy");
            AddOneChoise("Яичница с овощами", "https://kopilka-kulinara.ru/upload/information_system_56/2/7/3/item_2732/item_2732.jpg", "friedeggsVeg");
            AddOneChoise("Яичница с мясом", "https://kulinaria1955.ru/uploads/posts/2020-12/1608211510_1655.jpg", "friedeggsMet");
            break;
        case "omlete":
            AddOneChoise("Омлет со специями", "https://milkalliance.com.ua/blog/media/k2/items/cache/dc9e231f652301f80ea8e901bd9ec18a_M.jpg", "omleteSpy");
            AddOneChoise("Омлет с овощами", "https://www.patee.ru/r/x6/16/7d/20/960m.jpg", "omleteVeg");
            AddOneChoise("Омлет с мясом", "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/31483.jpg", "omleteMet");
            break;
        case "waterkasha":
            AddOneChoise("Гречневая каша на воде", "https://www.gastronom.ru/binfiles/images/20150212/b7f594cb.jpg", "waterkashaGr");
            AddOneChoise("Овсяная каша на воде", "http://www.vkussovet.ru/content/media/pic/large/1000000/16000/15488-1c9ecb9e5b01e3d8.jpg", "waterkashaOv");
            AddOneChoise("Рисовая каша на воде", "https://static.1000.menu/img/content/26769/klassicheskaya-risovaya-kasha_1524725368_9_max.jpg", "waterkashaRis");
            AddOneChoise("Пшенная каша на воде", "https://img.povar.ru/uploads/11/18/4f/3d/pshennaya_kasha_na_vode-289556.JPG", "waterkashaPsh");
            break;
        case "milkkasha":
            AddOneChoise("Гречневая каша на молоке", "https://s1.eda.ru/StaticContent/Photos/140124100744/150902214209/p_O.jpg", "milkkashaGr");
            AddOneChoise("Овсяная каша на молоке", "https://hozyajkadoma.ru/wp-content/uploads/2020/12/ovsyanaya-kasha-s-maslom.jpg", "milkkashaOv");
            AddOneChoise("Рисовая каша на молоке", "https://km-doma.ru/assets/gallery_thumbnails/8c/8ce956ac1619dee3f35f7d4a0b8e23f1.jpg", "milkkashaRis");
            AddOneChoise("Пшенная каша на молоке", "https://img-global.cpcdn.com/recipes/0ffc44c17231a66d939ffbc04403ed019c4601c328d1e60058feb113b58f4690/1200x630cq70/photo.jpg", "milkkashaPsh");
            break;
        case "fruitzapek":
            AddOneChoise("Шарлота", "https://static.1000.menu/img/content-v2/70/c1/16602/sharlotka-tvorojnaya-s-yablokami-v-duxovke_1588923840_11_max.jpg", "sharlot");
            AddOneChoise("запечёные яблоки", "https://volshebnaya-eda.ru/wp-content/uploads/2013/11/pecheny-yabloki-810x540.jpg", "applezapek");
            break;
        case "fruitsiroi":
            AddOneChoise("Банан", "https://icdn.lenta.ru/images/2019/12/06/10/20191206104306174/pwa_vertical_768_c1a9caf868077c23bbbe5b4175f14360.jpg", "banana");
            AddOneChoise("Яблоко", "https://kot.sh/sites/default/files/styles/large/public/articles-image/apple_main.jpg?itok=kaJ1H3Mw", "apple");
            AddOneChoise("Салат с авокадо", "https://cdn.lifehacker.ru/wp-content/uploads/2018/11/shutterstock_507078310_1576510459-e1576510491720-630x315.jpg", "saladAv");
            break;
        default:
            isGiveRec = true;
            break;
    }
    //Выдача рецепта
    switch (type) {
        case "omleteSpy":
            ToReceipt(3);
            break;
        case "omleteVeg":
            ToReceipt(4);
            break;
        case "omleteMet":
            ToReceipt(5);
            break;
        case "friedeggsSpy":
            ToReceipt(6);
            break;
        case "friedeggsVeg":
            ToReceipt(7);
            break;
        case "friedeggsMet":
            ToReceipt(8);
            break;
        case "milkkashaGr":
            ToReceipt(9);
            break;
        case "milkkashaOv":
            ToReceipt(10);
            break;
        case "milkkashaRis":
            ToReceipt(11);
            break;
        case "milkkashaPsh":
            ToReceipt(12);
            break;
        case "waterkashaGr":
            ToReceipt(13);
            break;
        case "waterkashaOv":
            ToReceipt(14);
            break;
        case "waterkashaRis":
            ToReceipt(15);
            break;
        case "waterkashaPsh":
            ToReceipt(16);
            break;

        case "zapek":
            ToReceipt(17);
            break;
        case "cheeznik":
            ToReceipt(18);
            break;
        case "varenik":
            ToReceipt(19);
            break;
        case "yoga":
            ToReceipt(20);
            break;

        case "sharlot":
            ToReceipt(21);
            break;
        case "applezapek":
            ToReceipt(22);
            break;

        case "banana":
            ToReceipt(23);
            break;
        case "apple":
            ToReceipt(24);
            break;
        case "saladAv":
            ToReceipt(25);
            break;
    }

    if (isGiveRec) {
		backButton.style.marginLeft = 400000;
        AddOneChoise("Яичные блюда на завтрак — довольно популярное блюдо во многих странах мира. Это объясняется и доступностью, и ценой, и быстротой приготовления.", "https://www.infox.ru/photo/0c7/2e5/0c72e5fa486d282725d440556ff542c8asdasdasd5a6b13367616a7.70929390-650x433-0c72e5fa486d282725d440556ff542c8.gif", "eggs");
        AddOneChoise("Каша – идеальный здоровый завтрак.Позавтракав кашей, вы не захотите перекусывать до обеда.", "https://24.kz/media/k2/items/cache/a9423d4ced704169457ad1a6ddd3fafb_XL.jpg", "kasha");
        AddOneChoise("Кисломолочные продукты на завтрак, всего лишь сто лет назад кисломолочные продукты относились к разряду невероятно дорогих и ценных лекарств.", "https://gotovim-doma.ru/images/recipe/8/de/8decb6dab54a707a89bd319a7f45aaeb_l.jpg", "cheese");
        AddOneChoise("Фрукты на завтрак хороши в сочетаниях. Именно разные ингредиенты подарят чувство сытости, не лишая утренней легкости.", "https://chto-takoe-lyubov.net/wp-content/uploads/2020/06/romantika-131.jpg", "fruits");
    }
    else{
        var chois=document.getElementById("ChoiseDishesScroll");
        chois.scrollIntoView(true);
		backButton.style.marginLeft = 0;
    }	
}

function Choise(type) {
	var backButton = document.getElementById("moveBack");
    var alldishes = document.getElementById("ChoiseDishes");
	backButton.setAttribute("onClick", "Choise(this.value);");
    alldishes.innerHTML = "";
    var isGiveRec = false;
    // Выбор категории
    switch (type) {
        case "eggs":
            AddOneChoise("Яичница", "https://static.1000.menu/img/content-v2/fa/b5/29517/yaichnica-s-syrom_1619936542_9_max.jpg", "friedeggs");
            AddOneChoise("Омлет", "https://static.1000.menu/img/content-v2/90/36/45938/omlet-iz-yaic-i-moloka-prostoi-na-skovorode_1622035051_0_max.jpg", "omlete");
            break;
        case "kasha":
            AddOneChoise("Каша на воде", "http://www.vkussovet.ru/content/media/pic/large/1000000/16000/15488-1c9ecb9e5b01e3d8.jpg", "waterkasha");
            AddOneChoise("Каша на молоке", "https://www.patee.ru/r/x6/17/c9/52/960m.jpg", "milkkasha");
            break;
        case "fruits":
            AddOneChoise("Запечёный фруктовый завтрак", "https://www.maggi.ru/data/images/recept/img640x500/recept_6720_vicv.jpg", "fruitzapek");
            AddOneChoise("Сырой фруктовый завтрак", "https://media.istockphoto.com/photos/delicious-and-healthy-breakfast-with-fruits-berries-cereal-picture-id479774516", "fruitsiroi");
            break;
        case "cheese":
            AddOneChoise("Запеканка", "https://static.1000.menu/img/content/35128/tvorojnaya-zapekanka-kak-v-detstve_1558702907_1_max.jpg", "zapek");
            AddOneChoise("Сырники", "https://img-global.cpcdn.com/recipes/09d289bc87a7d946/1200x630cq70/photo.jpg", "cheeznik");
            AddOneChoise("Вареники", "https://www.photorecept.ru/wp-content/uploads/2019/07/9-12-1300x864.jpg", "varenik");
            AddOneChoise("Йогурт", "https://gotovite.ru/wp-content/uploads/2015/09/grecheskiy_yogurt.png", "yoga");
            break;
        default:
            break;
    }
	var call = fChoiseIsDone(type);
}





function AddOneChoise(text, src, value) {
    var alldishes = document.getElementById("ChoiseDishes");
    var bttn1 = document.createElement("button")
    bttn1.innerHTML = "Подробнее";
    bttn1.setAttribute("value", value);
    bttn1.setAttribute("onclick", "Choise(this.value)");
    bttn1.setAttribute("type", "button");
    bttn1.setAttribute("class", "btn btn-lg btn-outline-secondary");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "justify-content-between align-items-center");
    div1.appendChild(bttn1);
    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerHTML = text;
    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-body");
    div2.appendChild(p);
    div2.appendChild(div1);

    var img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("class", "bd-placeholder-img card-img-top");
    img.setAttribute("height", "225");

    var div3 = document.createElement("div");
    div3.setAttribute("class", "card shadow-sm");
    div3.appendChild(img);
    div3.appendChild(div2);
    var div4 = document.createElement("div");
    div4.setAttribute("class", "col");
    div4.appendChild(div3);
    alldishes.appendChild(div4);
}