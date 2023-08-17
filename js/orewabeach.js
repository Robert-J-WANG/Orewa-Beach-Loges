var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {

    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("btn_previous").style.display = "none";
    } else {
        document.getElementById("btn_previous").style.display = "block";
    }
    if (n == (x.length - 1)) {
        document.getElementById("btn_next").innerHTML = "Submit";
    } else {
        document.getElementById("btn_next").innerHTML = "Next";
    }
}


function nextPrev(n) {

    var x = document.getElementsByClassName("tab");

    x[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if (currentTab == x.length - 1) {
        printResult();
        showTab(currentTab);
    }
    if (currentTab >= x.length) {
        alert("Your submission is done!");
        clearAll();
        currentTab = 0;
        showTab(currentTab);

    }
    showTab(currentTab);
}


function clearAll() {
    document.getElementById("booking_frm").reset();
    document.getElementById("booking_frm").style.backgroundColor = "white";
}

function backgroundColorChanged() {
    var y = document.getElementById("booking_frm");
    var showColor = document.getElementById("input_color").value;
    y.style.backgroundColor = showColor;
}

function printResult() {
    var check_in_date = document.getElementById("check_in_date").value;
    var check_out_date = document.getElementById("check_out_date").value;
    var adult = document.getElementById("adult").value;
    var children = document.getElementById("children").value;
    document.getElementById("cid_span").innerHTML = " " + check_in_date;
    document.getElementById("cod_span").innerHTML = " " + check_out_date;
    document.getElementById("adult_number").innerHTML = " " + adult;
    document.getElementById("child_number").innerHTML = " " + children;

    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var contact_number = document.getElementById("contact_number").value;
    var email_address = document.getElementById("email_address").value;
    document.getElementById("fname").innerHTML = " " + first_name;
    document.getElementById("lname").innerHTML = " " + last_name;
    document.getElementById("tel").innerHTML = " " + contact_number;
    document.getElementById("email").innerHTML = " " + email_address;

    var cooking = document.querySelector('input[name="cooking"]:checked').value;
    document.getElementById("cooking").innerHTML = " " + cooking;

    var checked_equipment = document.getElementsByName("equipment");
    var key = "";
    for (var i = 0; i < checked_equipment.length; i++) {
        if (checked_equipment[i].checked)
            key += checked_equipment[i].value + "&nbsp &nbsp";
    }
    document.getElementById("equipment").innerHTML = " " + key;

    var add_message = document.getElementById("add_message").value;
    document.getElementById("add_info").innerHTML = " " + add_message;


}
// close the car advertisement
function carClose() {
    document.getElementById("car").style.display = "none";
}