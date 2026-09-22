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

const otherBusinessRadio =
    document.getElementById("otherBusiness");

const otherBusinessContainer =
    document.getElementById("otherBusinessContainer");

const otherBusinessInput =
    document.getElementById("otherBusinessInput");


// ================================
// SHOW / HIDE OTHER INPUT
// ================================

if (otherBusinessRadio) {

    const businessOptions =
        document.querySelectorAll(
            'input[name="business"]'
        );

    businessOptions.forEach(function (option) {

        option.addEventListener("change", function () {

            if (this.value === "Other") {

                otherBusinessContainer.style.display =
                    "block";

                otherBusinessInput.focus();

            } else {

                otherBusinessContainer.style.display =
                    "none";

                otherBusinessInput.value = "";

            }

        });

    });

}


// ================================
// BUSINESS FORM SUBMIT
// ================================

if (businessForm) {

    businessForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const selectedBusiness =
                document.querySelector(
                    'input[name="business"]:checked'
                );


            // No business selected
            if (!selectedBusiness) {

                alert(
                    "Please select a business category."
                );

                return;
            }


            // ================================
            // OTHER BUSINESS
            // ================================

            if (selectedBusiness.value === "Other") {

                const customBusiness =
                    otherBusinessInput.value.trim();


                if (!customBusiness) {

                    alert(
                        "Please enter your business type."
                    );

                    otherBusinessInput.focus();

                    return;
                }


                // Save user's actual business name
                localStorage.setItem(
                    "grambizBusiness",
                    customBusiness
                );


                // Also remember that category was Other
                localStorage.setItem(
                    "grambizBusinessCategory",
                    "Other"
                );

            }

            // ================================
            // NORMAL BUSINESS
            // ================================

            else {

                localStorage.setItem(
                    "grambizBusiness",
                    selectedBusiness.value
                );


                localStorage.setItem(
                    "grambizBusinessCategory",
                    selectedBusiness.value
                );

            }


            // Go to Capital screen
            window.location.href =
                "capital.html";

        }
    );

}


// ================================
// BACK BUTTON
// ================================

if (backBtn) {

    backBtn.addEventListener(
        "click",
        function () {

            history.back();

        }
    );

}

// ================================
// BACK BUTTON
// ================================

if (backBtn) {

    backBtn.addEventListener("click", function () {

        history.back();

    });

}