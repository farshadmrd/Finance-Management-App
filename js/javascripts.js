let add = document.querySelector("#principal");
let btnadd = document.querySelector("#add");

let result = document.querySelector("#result");
let error = document.querySelector("#error");


let initial = document.querySelector("#initial");
let balance = document.querySelector("#balance");
let expenses = document.querySelector("#expenses");

let btnexpense = document.querySelector("#btn-expense");
let esmehazine = document.querySelector("#esm-hazine");
let meghdarhazine = document.querySelector("#meghdar-hazine");


let rightbottom = document.querySelector("#right-bottom");

let changename = document.querySelector("#change-name");
let changeamoount = document.querySelector("#change-amount");
let accept = document.querySelector("#accept");
let errorchange = document.querySelector("#error-change")


btnadd.onclick = function (e) {
    let pattern = /^[0-9]+$/;
    if (pattern.test(add.value)) {
        result.innerHTML = "its ok"
        initial.innerHTML = +initial.innerHTML + +add.value;
        balance.innerHTML = +balance.innerHTML + +add.value;
    } else {
        e.preventDefault();
        result.innerHTML = "wrong:pls insert numbers"
    }
    add.value = "";
}


btnexpense.onclick = function (e) {
    let pattern = /^[0-9]+$/;
    let pattern2 = /^[a-z]+$/;
    let pattern3 = /^[\u0600-\u06FF]+$/;
    if (pattern.test(meghdarhazine.value) && (pattern2.test(esmehazine.value) || pattern3.test(esmehazine.value))) {
        error.innerHTML = "its ok"


        let div = document.createElement("div");
        let divpedr = rightbottom.appendChild(div);


        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let spanone = div.appendChild(span1);
        let spantwo = div.appendChild(span2);
        spanone.classList.add("expense-name");
        spantwo.classList.add("expense-value");

        let div2 = document.createElement("div");
        let divbache = divpedr.appendChild(div2);
        divbache.classList.add("edit");


        let a = document.createElement("a");
        let edit = divbache.appendChild(a);
        edit.innerHTML = "edit";
        edit.setAttribute("data-toggle", "modal");
        edit.setAttribute("data-target", "#myModal")


        accept.onclick = function (e) {
            let pattern = /^[0-9]+$/;
            let pattern2 = /^[a-z]+$/;
            let pattern3 = /^[\u0600-\u06FF]+$/;
            if (pattern.test(changeamoount.value) && (pattern2.test(changename.value) || pattern3.test(changename.value))) {
                errorchange.innerHTML="its ok"
                expenses.innerHTML = +expenses.innerHTML + +(changeamoount.value - spantwo.innerHTML);
                balance.innerHTML = +balance.innerHTML + +(spantwo.innerHTML - changeamoount.value);
                spanone.innerHTML = changename.value;
                changename.value = "";
                spantwo.innerHTML = changeamoount.value;
                changeamoount.value = "";
            }
            else {
                errorchange.innerHTML="wrong format"
                e.preventDefault();
            }
        }


        let a2 = document.createElement("a");
        let remove = divbache.appendChild(a2);
        remove.innerHTML = " remove";
        remove.onclick = function () {
            div.remove();
            expenses.innerHTML = expenses.innerHTML - spantwo.innerHTML;
            balance.innerHTML = +balance.innerHTML + +spantwo.innerHTML;
        }


        spanone.innerHTML = esmehazine.value;
        spantwo.innerHTML = meghdarhazine.value;


        expenses.innerHTML = +expenses.innerHTML + +meghdarhazine.value;

        balance.innerHTML = balance.innerHTML - meghdarhazine.value;

    } else {
        e.preventDefault();
        error.innerHTML = "wrong format"
    }
    esmehazine.value = "";
    meghdarhazine.value = "";
}



