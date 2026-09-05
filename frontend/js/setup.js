// ================================
// GRAMBIZ AI - BUSINESS SETUP
// ================================


// ================================
// LOCATION SCREEN
// ================================

const locationForm =
    document.getElementById("locationForm");

const useLocationBtn =
    document.getElementById("useLocationBtn");


if (locationForm) {

    locationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const village =
            document.getElementById("village").value.trim();

        const block =
            document.getElementById("block").value.trim();

        const district =
            document.getElementById("district").value.trim();


        localStorage.setItem("grambizVillage", village);
        localStorage.setItem("grambizBlock", block);
        localStorage.setItem("grambizDistrict", district);


        // Go to Business screen
        window.location.href = "business.html";

    });

}


// ================================
// USE MY LOCATION
// ================================

if (useLocationBtn) {

    useLocationBtn.addEventListener("click", function () {

        if (!navigator.geolocation) {

            alert(
                "Location is not supported by your browser."
            );

            return;
        }


        navigator.geolocation.getCurrentPosition(

            function () {

                alert(
                    "Location detected! Please enter your village, block and district."
                );

            },

            function () {

                alert(
                    "Unable to access your location. Please enter your location manually."
                );

            }

        );

    });

}


// ================================
// BUSINESS SCREEN
// ================================

const businessForm =
    document.getElementById("businessForm");


const backBtn =
    document.getElementById("backBtn");


if (businessForm) {

    businessForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const selectedBusiness =
            document.querySelector('input[name="business"]:checked');


        if (!selectedBusiness) {

            alert("Please select a business category.");

            return;
        }


        localStorage.setItem(
            "grambizBusiness",
            selectedBusiness.value
        );


        window.location.href =
            "capital.html";

    });

}


// ================================
// BACK BUTTON
// ================================

if (backBtn) {

    backBtn.addEventListener("click", function () {

        history.back();

    });

}