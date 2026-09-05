// ================================
// GRAMBIZ AI - CAPITAL
// ================================

const capitalForm =
    document.getElementById("capitalForm");

const capitalInput =
    document.getElementById("capital");

const capitalOptions =
    document.querySelectorAll(
        ".capital-options button"
    );


// QUICK AMOUNT BUTTONS

capitalOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const amount = button.dataset.amount;

        capitalInput.value = amount;

    });

});


// SAVE CAPITAL

if (capitalForm) {

    capitalForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const capital =
            capitalInput.value.trim();


        if (!capital || Number(capital) <= 0) {

            alert(
                "Please enter a valid investment amount."
            );

            return;
        }


        localStorage.setItem(
            "grambizCapital",
            capital
        );


        window.location.href = "confirmation.html";

    });

}


// BACK

const capitalBackBtn =
    document.getElementById("capitalBackBtn");


if (capitalBackBtn) {

    capitalBackBtn.addEventListener("click", function () {

        history.back();

    });

}