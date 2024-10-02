var one = '₹28,752.00';
var two = '₹7,152.00';
var three = '₹749.00';
var sixteen = '₹1,797.00';
var four = '₹0.00';
var fourteen = '₹0.00';
var fifteen = '₹0.00';
var five = '75%';
var six = '₹21,600.00';
var seven = '₹1,287.36';
var eight = '₹36,931.64';
var nine = '₹8,439.36';
var ten = '48 months plan';
var eleven = '3 extra months';
var twelve = 'Domain name';
var thirteen = 'Domain privacy protection';
var seventeen = 'Plan discount -';



document.getElementById('result1').innerHTML = one;
document.getElementById('result2').innerHTML = two;
document.getElementById('result3').innerHTML = three;
document.getElementById('result4').innerHTML = four;
document.getElementById('result5').innerHTML = five;
document.getElementById('result6').innerHTML = six;
document.getElementById('result7').innerHTML = seven;
document.getElementById('result8').innerHTML = eight;
document.getElementById('result9').innerHTML = nine;
document.getElementById('result10').innerHTML = ten;
document.getElementById('result11').innerHTML = eleven;
document.getElementById('result12').innerHTML = twelve;
document.getElementById('result13').innerHTML = thirteen;
document.getElementById('result14').innerHTML = fourteen;
document.getElementById('result15').innerHTML = fifteen;
document.getElementById('result16').innerHTML = sixteen;
document.getElementById('result17').innerHTML = seventeen;

function Currency() {
    var CurrencySelector = document.getElementById('converter').value;
    if (CurrencySelector === 'INR') {
        console.log("R");
        var preRate = 599.00 * 1;
        var Mon_1 = 599.00 * 1;
        var Year_1 = 219.00 * 1;
        var Year_2 = 179.00 * 1;
        var Year_4 = 149.00 * 1;
        document.getElementById('twelve_month').innerHTML = '₹' + Mon_1;
        document.getElementById('twentyfour_month').innerHTML = '₹' + Mon_1;
        document.getElementById('forty_eight_month').innerHTML = '₹' + Mon_1;
        document.getElementById('one_month').innerHTML = '₹' + Mon_1;
        document.getElementById('one_year').innerHTML = '₹' + Year_1;
        document.getElementById('two_year').innerHTML = '₹' + Year_2;
        document.getElementById('four_year').innerHTML = '₹' + Year_4;
    }
    else if (CurrencySelector === 'Euro') {
        console.log("E");
        var preRate_1 = 599.00 * 0.011;
        var preRate_2 = 599.00 * 0.011;
        var preRate_3 = 599.00 * 0.011;
        var preRate_4 = 599.00 * 0.011;
        var Mon_1 = 599.00 * 0.011;
        var Year_1 = 219.00 * 0.011;
        var Year_2 = 179.00 * 0.011;
        var Year_4 = 149.00 * 0.011;
        document.getElementById('twelve_month').innerHTML = '€' + preRate.toFixed(2);
        document.getElementById('twentyfour_month').innerHTML = '€' + preRate.toFixed(2);
        document.getElementById('forty_eight_month').innerHTML = '€' + preRate.toFixed(2);
        document.getElementById('one_month').innerHTML = '€' + Mon_1.toFixed(2);
        document.getElementById('one_year').innerHTML = '€' + Year_1.toFixed(2);
        document.getElementById('two_year').innerHTML = '€' + Year_2.toFixed(2);
        document.getElementById('four_year').innerHTML = '€' + Year_4.toFixed(2);
    }
    else if (CurrencySelector === 'Dollar') {
        console.log("D");
        var preRate = 599.00 * 0.012;
        var Mon_1 = 599.00 * 0.012;
        var Year_1 = 219.00 * 0.012;
        var Year_2 = 179.00 * 0.012;
        var Year_4 = 149.00 * 0.012;
        document.getElementById('twelve_month').innerHTML = '$' + preRate.toFixed(2);
        document.getElementById('twentyfour_month').innerHTML = '$' + preRate.toFixed(2);
        document.getElementById('forty_eight_month').innerHTML = '$' + preRate.toFixed(2);
        document.getElementById('one_month').innerHTML = '$' + Mon_1.toFixed(2);
        document.getElementById('one_year').innerHTML = '$' + Year_1.toFixed(2);
        document.getElementById('two_year').innerHTML = '$' + Year_2.toFixed(2);
        document.getElementById('four_year').innerHTML = '$' + Year_4.toFixed(2);
    }
    else if (CurrencySelector === 'Pounds') {
        console.log("P");
        var preRate = 599.00 * 0.0092;
        var Mon_1 = 599.00 * 0.0092;
        var Year_1 = 219.00 * 0.0092;
        var Year_2 = 179.00 * 0.0092;
        var Year_4 = 149.00 * 0.0092;
        document.getElementById('forty_eight_month').innerHTML = '£' + preRate.toFixed(2);
        document.getElementById('one_month').innerHTML = '£' + Mon_1.toFixed(2);
        document.getElementById('one_year').innerHTML = '£' + Year_1.toFixed(2);
        document.getElementById('two_year').innerHTML = '£' + Year_2.toFixed(2);
        document.getElementById('four_year').innerHTML = '£' + Year_4.toFixed(2);
    }
}

function Premium_One() {
    var one = '';
    var two = '₹599.00';
    var three = '';
    var sixteen = '';
    var four = '';
    var fourteen = '';
    var fifteen = '';
    var five = '';
    var six = '';
    var seven = '₹107.82';
    var eight = '';
    var nine = '₹706.82';
    var ten = '1 Month plan';
    var eleven = '';
    var twelve = '';
    var thirteen = '';
    var seventeen = '';

    var element1 = document.getElementsByClassName("img_check")[0];
    var element2 = document.getElementsByClassName("img_check")[1];
    var element3 = document.getElementsByClassName("img_check")[2];


    document.getElementById('result1').innerHTML = one;
    document.getElementById('result2').innerHTML = two;
    document.getElementById('result3').innerHTML = three;
    document.getElementById('result4').innerHTML = four;
    document.getElementById('result5').innerHTML = five;
    document.getElementById('result6').innerHTML = six;
    document.getElementById('result7').innerHTML = seven;
    document.getElementById('result8').innerHTML = eight;
    document.getElementById('result9').innerHTML = nine;
    document.getElementById('result10').innerHTML = ten;
    document.getElementById('result11').innerHTML = eleven;
    document.getElementById('result12').innerHTML = twelve;
    document.getElementById('result13').innerHTML = thirteen;
    document.getElementById('result14').innerHTML = fourteen;
    document.getElementById('result15').innerHTML = fifteen;
    document.getElementById('result16').innerHTML = sixteen;
    document.getElementById('result17').innerHTML = seventeen;


    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "none";


    var element_box_1 = document.getElementsByClassName("border_box_1")[0];
    var element_box_2 = document.getElementsByClassName("border_box_2")[0];
    var element_box_3 = document.getElementsByClassName("border_box_3")[0];
    var element_box_4 = document.getElementsByClassName("border_box_4")[0];


    element_box_1.style.border = "5px blue solid";
    element_box_2.style.border = "none";
    element_box_3.style.border = "none";
    element_box_4.style.border = "none";

    // document.getElementById('box_one').style.border = 'thick solid blue';
}


function Premium_Two() {

    var one = '₹7,188.00';
    var two = '₹2,688.00';
    var three = '₹749.00';
    var sixteen = '';
    var four = '';
    var fourteen = '₹0.00';
    var fifteen = '₹0.00';
    var five = '63%';
    var six = '₹4,560.00';
    var seven = '₹473.04';
    var eight = '₹9,365.66';
    var nine = '₹3,101.04';
    var ten = '12 months plan';
    var eleven = '';
    var twelve = 'Domain name';
    var thirteen = 'Domain privacy protection';
    var seventeen = 'Plan discount -';

    var element1 = document.getElementsByClassName("img_check")[0];
    // var element2 = document.getElementsByClassName("img_check")[1];
    // var element3 = document.getElementsByClassName("img_check")[2];


    document.getElementById('result1').innerHTML = one;
    document.getElementById('result2').innerHTML = two;
    document.getElementById('result3').innerHTML = three;
    document.getElementById('result4').innerHTML = four;
    document.getElementById('result5').innerHTML = five;
    document.getElementById('result6').innerHTML = six;
    document.getElementById('result7').innerHTML = seven;
    document.getElementById('result8').innerHTML = eight;
    document.getElementById('result9').innerHTML = nine;
    document.getElementById('result10').innerHTML = ten;
    document.getElementById('result11').innerHTML = eleven;
    document.getElementById('result12').innerHTML = twelve;
    document.getElementById('result13').innerHTML = thirteen;
    document.getElementById('result14').innerHTML = fourteen;
    document.getElementById('result15').innerHTML = fifteen;
    document.getElementById('result16').innerHTML = sixteen;
    document.getElementById('result17').innerHTML = seventeen;
    element1.style.display = "none";
    // element2.style.display = "none";
    // element3.style.display = "none";

    var element_box_1 = document.getElementsByClassName("border_box_1")[0];
    var element_box_2 = document.getElementsByClassName("border_box_2")[0];
    var element_box_3 = document.getElementsByClassName("border_box_3")[0];
    var element_box_4 = document.getElementsByClassName("border_box_4")[0];


    element_box_2.style.border = "5px blue solid";
    element_box_1.style.border = "none";
    element_box_3.style.border = "none";
    element_box_4.style.border = "none";

}

function Premium_Three() {

    var one = '₹14,376.00';
    var two = '₹4,296.00';
    var three = '₹749.00';
    var sixteen = '';
    var four = '';
    var fourteen = '₹0.00';
    var fifteen = '₹0.00';
    var five = '70%';
    var six = '₹10,080.00';
    var seven = '₹773.28';
    var eight = '₹17,847.50';
    var nine = '₹5,069.28';
    var ten = '24 months plan';
    var eleven = '';
    var twelve = 'Domain name';
    var thirteen = 'Domain privacy protection';
    var seventeen = 'Plan discount -';

    var element1 = document.getElementsByClassName("img_check")[0];
    // var element2 = document.getElementsByClassName("img_check")[1];
    // var element3 = document.getElementsByClassName("img_check")[2];


    document.getElementById('result1').innerHTML = one;
    document.getElementById('result2').innerHTML = two;
    document.getElementById('result3').innerHTML = three;
    document.getElementById('result4').innerHTML = four;
    document.getElementById('result5').innerHTML = five;
    document.getElementById('result6').innerHTML = six;
    document.getElementById('result7').innerHTML = seven;
    document.getElementById('result8').innerHTML = eight;
    document.getElementById('result9').innerHTML = nine;
    document.getElementById('result10').innerHTML = ten;
    document.getElementById('result11').innerHTML = eleven;
    document.getElementById('result12').innerHTML = twelve;
    document.getElementById('result13').innerHTML = thirteen;
    document.getElementById('result14').innerHTML = fourteen;
    document.getElementById('result15').innerHTML = fifteen;
    document.getElementById('result16').innerHTML = sixteen;
    document.getElementById('result17').innerHTML = seventeen;
    element1.style.display = "none";
    // element2.style.display = "none";
    // element3.style.display = "none";

    var element_box_1 = document.getElementsByClassName("border_box_1")[0];
    var element_box_2 = document.getElementsByClassName("border_box_2")[0];
    var element_box_3 = document.getElementsByClassName("border_box_3")[0];
    var element_box_4 = document.getElementsByClassName("border_box_4")[0];


    element_box_3.style.border = "5px blue solid";
    element_box_1.style.border = "none";
    element_box_2.style.border = "none";
    element_box_4.style.border = "none";

}

function Premium_Four() {

    var one = '₹28,752.00';
    var two = '₹7,152.00';
    var three = '₹749.00';
    var sixteen = '₹1,797.00';
    var four = '₹0.00';
    var fourteen = '₹0.00';
    var fifteen = '₹0.00';
    var five = '75%';
    var six = '₹21,600.00';
    var seven = '₹1,287.36';
    var eight = '₹36,931.64';
    var nine = '₹8,439.36';
    var ten = '48 months plan';
    var eleven = '3 extra months';
    var twelve = 'Domain name';
    var thirteen = 'Domain privacy protection';
    var seventeen = 'Plan discount -';

    var element1 = document.getElementsByClassName("img_check")[0];
    var element2 = document.getElementsByClassName("img_check")[1];
    var element3 = document.getElementsByClassName("img_check")[2];


    document.getElementById('result1').innerHTML = one;
    document.getElementById('result2').innerHTML = two;
    document.getElementById('result3').innerHTML = three;
    document.getElementById('result4').innerHTML = four;
    document.getElementById('result5').innerHTML = five;
    document.getElementById('result6').innerHTML = six;
    document.getElementById('result7').innerHTML = seven;
    document.getElementById('result8').innerHTML = eight;
    document.getElementById('result9').innerHTML = nine;
    document.getElementById('result10').innerHTML = ten;
    document.getElementById('result11').innerHTML = eleven;
    document.getElementById('result12').innerHTML = twelve;
    document.getElementById('result13').innerHTML = thirteen;
    document.getElementById('result14').innerHTML = fourteen;
    document.getElementById('result15').innerHTML = fifteen;
    document.getElementById('result16').innerHTML = sixteen;
    document.getElementById('result17').innerHTML = seventeen;
    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "none";

    var element_box_1 = document.getElementsByClassName("border_box_1")[0];
    var element_box_2 = document.getElementsByClassName("border_box_2")[0];
    var element_box_3 = document.getElementsByClassName("border_box_3")[0];
    var element_box_4 = document.getElementsByClassName("border_box_4")[0];


    element_box_4.style.border = "5px lightgreen solid";
    element_box_1.style.border = "none";
    element_box_3.style.border = "none";
    element_box_2.style.border = "none";
}




