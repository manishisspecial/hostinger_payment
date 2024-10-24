function Premium() {
    var PremiumSelector = document.getElementById('premium_option').value;
    if (PremiumSelector === '1_month') {

        var CurrencySelector = document.getElementById('converter').value;
        if (CurrencySelector === 'INR') {
            console.log("R");
            var text1 = 599.00;
            var text4 = 599.00;
            var text8 = 599.00;
            document.getElementById('result1').innerHTML = "₹ " + text1.toFixed(2) + " / Month";
            document.getElementById('result4').innerHTML = "₹ " + text4.toFixed(2);
            document.getElementById('renewal_111').innerHTML = "₹ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Euro') {
            console.log("E");
            var text1 = 599.00 * 0.011;
            var text4 = 599.00 * 0.011;
            var text8 = 599.00 * 0.011;
            document.getElementById('result1').innerHTML = "€" + text1.toFixed(2) + "/ Month";
            document.getElementById('result4').innerHTML = "€ " + text4.toFixed(2);
            document.getElementById('renewal_111').innerHTML = "€" + text8.toFixed(2) + "/ Month";
        }
        else if (CurrencySelector === 'Dollar') {
            console.log("D");
            var text1 = 599.00 * 0.012;
            var text4 = 599.00 * 0.012;
            var text8 = 599.00 * 0.012;
            document.getElementById('result1').innerHTML = "$" + text1.toFixed(2) + "/ Month";
            document.getElementById('result4').innerHTML = "$ " + text4.toFixed(2);
            document.getElementById('renewal_111').innerHTML = "$" + text8.toFixed(2) + "/ Month";
        }
        else if (CurrencySelector === 'Pounds') {
            console.log("P");
            var text1 = 599.00 * 0.0092;
            var text4 = 599.00 * 0.0092;
            var text8 = 599.00 * 0.0092;
            document.getElementById('result1').innerHTML = "£" + text1.toFixed(2) + "/ Month";
            document.getElementById('result4').innerHTML = "£ " + text4.toFixed(2);
            document.getElementById('renewal_111').innerHTML = "£" + text8.toFixed(2) + "/ Month";
        }
        var element1 = document.getElementsByClassName("saving_1")[0];
        var element2 = document.getElementsByClassName("saving_2")[0];
        var element3 = document.getElementsByClassName("renewal_1")[0];
        var element4 = document.getElementsByClassName("renewal_11")[0];
        var element5 = document.getElementsByClassName("renewal_2")[0];
        var element6 = document.getElementsByClassName("renewal_22")[0];
        var element7 = document.getElementsByClassName("renewal_3")[0];
        var element8 = document.getElementsByClassName("renewal_33")[0];
        var element9 = document.getElementsByClassName("renewal_4")[0];
        var element10 = document.getElementsByClassName("renewal_44")[0];
        var element11 = document.getElementsByClassName("discount_div")[0];
        var element12 = document.getElementsByClassName("subtotal_inner")[0];
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "block";
        element4.style.display = "block";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
        element9.style.display = "none";
        element10.style.display = "none";
        element11.style.display = "none";
        element12.style.display = "none";
    }
    else if (PremiumSelector === '12_months') {
        var CurrencySelector = document.getElementById('converter').value;
        if (CurrencySelector === 'INR') {
            console.log("R");
            var text1 = 219.00;
            var text2 = 599.00;
            var text3 = 4560.00;
            var text4 = 2628.00;
            var text5 = 7188.00;
            var text6 = 63;
            var text7 = 4560.00;
            var text8 = 379.00;
            document.getElementById('result1').innerHTML = "₹ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "₹ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "₹ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "₹ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "₹ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "₹ " + text7.toFixed(2);
        }
        else if (CurrencySelector === 'Euro') {
            console.log("E");
            var text1 = 219.00 * 0.011;
            var text2 = 599.00 * 0.011;
            var text3 = 4560.00 * 0.011;
            var text4 = 2628.00 * 0.011;
            var text5 = 7188.00 * 0.011;
            var text6 = 63;
            var text7 = 4560.00 * 0.011;
            var text8 = 379.00 * 0.011;
            document.getElementById('result1').innerHTML = "€ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "€ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "€ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "€ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "€ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "€ " + text7.toFixed(2);
            document.getElementById('renewal_222').innerHTML = "€ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Dollar') {
            console.log("D");
            var text1 = 219.00 * 0.012;
            var text2 = 599.00 * 0.012;
            var text3 = 4560.00 * 0.012;
            var text4 = 2628.00 * 0.012;
            var text5 = 7188.00 * 0.012;
            var text6 = 63;
            var text7 = 4560.00 * 0.012;
            var text8 = 379.00 * 0.012;
            document.getElementById('result1').innerHTML = "$ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "$ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "$ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "$ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "$ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "$ " + text7.toFixed(2);
            document.getElementById('renewal_222').innerHTML = "$ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Pounds') {
            console.log("P");
            var text1 = 219.00 * 0.092;
            var text2 = 599.00 * 0.092;
            var text3 = 4560.00 * 0.092;
            var text4 = 2628.00 * 0.092;
            var text5 = 7188.00 * 0.092;
            var text6 = 63;
            var text7 = 4560.00 * 0.092;
            var text8 = 379.00 * 0.092;
            document.getElementById('result1').innerHTML = "£ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "£ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "£ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "£ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "£ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "£ " + text7.toFixed(2);
            document.getElementById('renewal_222').innerHTML = "£ " + text8.toFixed(2) + " / Month";
        }
        var element1 = document.getElementsByClassName("saving_1")[0];
        var element2 = document.getElementsByClassName("saving_2")[0];
        var element3 = document.getElementsByClassName("renewal_1")[0];
        var element4 = document.getElementsByClassName("renewal_11")[0];
        var element5 = document.getElementsByClassName("renewal_2")[0];
        var element6 = document.getElementsByClassName("renewal_22")[0];
        var element7 = document.getElementsByClassName("renewal_3")[0];
        var element8 = document.getElementsByClassName("renewal_33")[0];
        var element9 = document.getElementsByClassName("renewal_4")[0];
        var element10 = document.getElementsByClassName("renewal_44")[0];
        var element11 = document.getElementsByClassName("discount_div")[0];
        var element12 = document.getElementsByClassName("subtotal_inner")[0];
        element1.style.display = "block";
        element2.style.display = "block";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "block";
        element6.style.display = "block";
        element7.style.display = "none";
        element8.style.display = "none";
        element9.style.display = "none";
        element10.style.display = "none";
        element11.style.display = "flex";
        element12.style.display = "block";
    }
    else if (PremiumSelector === '24_months') {
        var CurrencySelector = document.getElementById('converter').value;
        if (CurrencySelector === 'INR') {
            console.log("R");
            var text1 = 179.00;
            var text2 = 599.00;
            var text3 = 10080.00;
            var text4 = 4296.00;
            var text5 = 14376.00;
            var text6 = 70;
            var text7 = 10080.00;
            var text8 = 339.00;
            document.getElementById('result1').innerHTML = "₹ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "₹ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "₹ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "₹ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "₹ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "₹ " + text7.toFixed(2);
            document.getElementById('renewal_333').innerHTML = "₹ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Euro') {
            console.log("E");
            var text1 = 179.00 * 0.011;
            var text2 = 599.00 * 0.011;
            var text3 = 10080.00 * 0.011;
            var text4 = 4296.00 * 0.011;
            var text5 = 14376.00 * 0.011;
            var text6 = 70;
            var text7 = 10080.00 * 0.011;
            var text8 = 339.00;
            document.getElementById('result1').innerHTML = "€ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "€ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "€ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "€ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "€ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "€ " + text7.toFixed(2);
            document.getElementById('renewal_333').innerHTML = "€ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Dollar') {
            console.log("D");
            var text1 = 179.00 * 0.012;
            var text2 = 599.00 * 0.012;
            var text3 = 10080.00 * 0.012;
            var text4 = 4296.00 * 0.012;
            var text5 = 14376.00 * 0.012;
            var text6 = 70;
            var text7 = 10080.00 * 0.012;
            var text8 = 339.00;
            document.getElementById('result1').innerHTML = "$ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "$ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "$ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "$ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "$ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "$ " + text7.toFixed(2);
            document.getElementById('renewal_333').innerHTML = "$ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Pounds') {
            console.log("P");
            var text1 = 179.00 * 0.092;
            var text2 = 599.00 * 0.092;
            var text3 = 10080.00 * 0.092;
            var text4 = 4296.00 * 0.092;
            var text5 = 14376.00 * 0.092;
            var text6 = 70;
            var text7 = 10080.00 * 0.092;
            var text8 = 339.00;
            document.getElementById('result1').innerHTML = "£ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "£ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "£ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "£ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "£ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "£ " + text7.toFixed(2);
            document.getElementById('renewal_333').innerHTML = "£ " + text8.toFixed(2) + " / Month";
        }

        var element1 = document.getElementsByClassName("saving_1")[0];
        var element2 = document.getElementsByClassName("saving_2")[0];
        var element3 = document.getElementsByClassName("renewal_1")[0];
        var element4 = document.getElementsByClassName("renewal_11")[0];
        var element5 = document.getElementsByClassName("renewal_2")[0];
        var element6 = document.getElementsByClassName("renewal_22")[0];
        var element7 = document.getElementsByClassName("renewal_3")[0];
        var element8 = document.getElementsByClassName("renewal_33")[0];
        var element9 = document.getElementsByClassName("renewal_4")[0];
        var element10 = document.getElementsByClassName("renewal_44")[0];
        var element11 = document.getElementsByClassName("discount_div")[0];
        var element12 = document.getElementsByClassName("subtotal_inner")[0];
        element1.style.display = "block";
        element2.style.display = "block";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "block";
        element8.style.display = "block";
        element9.style.display = "none";
        element10.style.display = "none";
        element11.style.display = "flex";
        element12.style.display = "block";

    }
    else if (PremiumSelector === '48_months') {


        var CurrencySelector = document.getElementById('converter').value;
        if (CurrencySelector === 'INR') {
            console.log("R");
            var text1 = 149.00;
            var text2 = 599.00;
            var text3 = 21600.00;
            var text4 = 7152.00;
            var text5 = 28752.00;
            var text6 = 75;
            var text7 = 21600.00;
            var text8 = 249.00;
            document.getElementById('result1').innerHTML = "₹ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "₹ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "₹ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "₹ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "₹ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "₹ " + text7.toFixed(2);
            document.getElementById('renewal_444').innerHTML = "₹ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Euro') {
            console.log("E");
            var text1 = 149.00 * 0.011;
            var text2 = 599.00 * 0.011;
            var text3 = 21600.00 * 0.011;
            var text4 = 7152.00 * 0.011;
            var text5 = 28752.00 * 0.011;
            var text6 = 75;
            var text7 = 21600.00 * 0.011;
            var text8 = 249.00 * 0.011;
            document.getElementById('result1').innerHTML = "€ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "€ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "€ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "€ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "€ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "€ " + text7.toFixed(2);
            document.getElementById('renewal_444').innerHTML = "€ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Dollar') {
            console.log("D");
            var text1 = 149.00 * 0.012;
            var text2 = 599.00 * 0.012;
            var text3 = 21600.00 * 0.012;
            var text4 = 7152.00 * 0.012;
            var text5 = 28752.00 * 0.012;
            var text6 = 75;
            var text7 = 21600.00 * 0.012;
            var text8 = 249.00 * 0.012;
            document.getElementById('result1').innerHTML = "$ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "$ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "$ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "$ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "$ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "$ " + text7.toFixed(2);
            document.getElementById('renewal_444').innerHTML = "$ " + text8.toFixed(2) + " / Month";
        }
        else if (CurrencySelector === 'Pounds') {
            console.log("P");
            var text1 = 149.00 * 0.092;
            var text2 = 599.00 * 0.092;
            var text3 = 21600.00 * 0.092;
            var text4 = 7152.00 * 0.092;
            var text5 = 28752.00 * 0.092;
            var text6 = 75;
            var text7 = 21600.00 * 0.092;
            var text8 = 249.00 * 0.092;
            document.getElementById('result1').innerHTML = "£ " + text1.toFixed(2) + " / Month";
            document.getElementById('result2').innerHTML = "£ " + text2.toFixed(2) + " / Month";
            document.getElementById('result3').innerHTML = "Save " + "£ " + text3.toFixed(2);
            document.getElementById('result4').innerHTML = "£ " + text4.toFixed(2);
            document.getElementById('result5').innerHTML = "£ " + text5.toFixed(2);
            document.getElementById('result6').innerHTML = text6 + " %";
            document.getElementById('result7').innerHTML = "£ " + text7.toFixed(2);
            document.getElementById('renewal_444').innerHTML = "£ " + text8.toFixed(2) + " / Month";
        }
   
        var element1 = document.getElementsByClassName("saving_1")[0];
        var element2 = document.getElementsByClassName("saving_2")[0];
        var element3 = document.getElementsByClassName("renewal_1")[0];
        var element4 = document.getElementsByClassName("renewal_11")[0];
        var element5 = document.getElementsByClassName("renewal_2")[0];
        var element6 = document.getElementsByClassName("renewal_22")[0];
        var element7 = document.getElementsByClassName("renewal_3")[0];
        var element8 = document.getElementsByClassName("renewal_33")[0];
        var element9 = document.getElementsByClassName("renewal_4")[0];
        var element10 = document.getElementsByClassName("renewal_44")[0];
        var element11 = document.getElementsByClassName("discount_div")[0];
        var element12 = document.getElementsByClassName("subtotal_inner")[0];
        element1.style.display = "block";
        element2.style.display = "block";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
        element9.style.display = "block";
        element10.style.display = "block";
        element11.style.display = "flex";
        element12.style.display = "block";

    }

}

    