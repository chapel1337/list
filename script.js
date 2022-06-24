// written by chapel1337
// will make another version of this once i learn cookies

let list = [];

function add() {
    let question1 = prompt("what do you want your step to be?");

    if (question1) {
        list[list.length ++] = question1;
        let question2 = confirm("successfully added step to list\nwould you like to view your step in the list?")

        if (question2) {
            alert(list) // i absolutely hate how it doesn't add spaces after each ,
        }
    }
    else {
        alert("please specify a step you want to add to the list");
    }
};

function view() {
    alert(list);
};

function remove() {
    let question1 = prompt("what step do you want to remove from the list?\nplease respond with the number of the step");

    if (question1) {
        list.pop(question1);
        alert(`successfully removed step ${question1}`);
    }
    else if (list.length == 0) {
        alert("there are no more steps in the list");
    }
    else if (question1 == undefined) {
        alert("please specify a step you want to remove from the list");
    }
};