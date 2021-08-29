//This function will paste the questions related to the body part selected in the dropdown
function Questions_knee() {
    var questions = document.getElementById("questions");
    questions.innerHTML = ""; //empty the space just in case something else was there

    let pastequestions = `<form class="input quiz" name="questions" action="getResult()">
    <ol>
        <li>
            <p>Try to bend your knee, then straighten and rotate it. Do you feel pain, clicking or a clunking sensation within the joint?</p>
        </li>
        <input type="radio" id="first_0" required name="bend_knee" value="Yes">   <label for="first_0">Yes</label>
        <br>
        <input type="radio" id="first_1" required name="bend_knee" value="No">   <label for="first_1">No</label>
        <br>
        <br>
        <li>
            <p>After your injury, did your knee become more stiff and swollen gradually over time?</p>
        </li>
        <input type="radio" id="second_0" required name="knee_after" value="Yes">   <label for="second_0">Yes</label>
        <br>
        <input type="radio" id="second_1"required name="knee_after" value="No">   <label for="second_1">No</label>
        <br>
        <br>
        <li>
            <p>Do you have the inability to straighten the knee, a knee that gives way or stiffness and swelling right after your injury? </p>
        </li>
        <input type="radio" id="third_0"required name="straight_knee" value="Yes">   <label for="third_0">Yes</label>
        <br>
        <input type="radio" id="third_1" required name="straight_knee" value="No">   <label for="third_1">No</label>
        <br>
        <br>
        <input id="submit" type="submit" value="Submit" onclick=getResult()>
</form>
   `;
    questions.innerHTML = pastequestions;

}

function getResult() {
    var result = "";
    var first = document.getElementById("first_0");
    var second = document.getElementById("second_0");
    var third = document.getElementById("third_0");

    if (first.checked == true && second.checked == false && third.checked == false) {
        result = "../templates/mild";

    } else if (first.checked == true && second.checked == true && third.checked == false) {
        result = "../templates/moderate.html";
    } else if (first.checked == false && second.checked == true && third.checked == false) {
        result = "../templates/moderate.html";
    } else if (first.checked == true && second.checked == true && third.checked == true) {
        result = "../templates/severe.html";
    } else {
        result = "../templates/mild.html";
    }

    window.location.replace(result);
}


function save() {
    var checkbox = document.getElementById('checkbox1');
    localStorage.setItem('checkbox1', checkbox.checked);
}