// ============================================
// GRAMBIZ AI - MULTILINGUAL SYSTEM
// ============================================

const languageSelector =
    document.getElementById("languageSelector");


// ============================================
// LOAD LANGUAGE
// ============================================

async function loadLanguage(language) {

    try {

        const response =
            await fetch(`languages/${language}.json`);

        const translations =
            await response.json();


        // ----------------------------------------
        // Normal text
        // ----------------------------------------

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (translations[key]) {

                    element.textContent =
                        translations[key];

                }

            });


        // ----------------------------------------
        // Placeholder text
        // ----------------------------------------

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (translations[key]) {

                    element.placeholder =
                        translations[key];

                }

            });


        // ----------------------------------------
        // Save language
        // ----------------------------------------

        localStorage.setItem(
            "grambizLanguage",
            language
        );


        // ----------------------------------------
        // Set selector
        // ----------------------------------------

        if (languageSelector) {

            languageSelector.value =
                language;

        }


        // ----------------------------------------
        // Page title
        // ----------------------------------------

        if (language === "hi") {

            document.title =
                "लॉगिन | UNNATI";

        } else {

            document.title =
                "Login | UNNATI";

        }

    }

    catch (error) {

        console.error(
            "Language loading failed:",
            error
        );

    }

}


// ============================================
// LANGUAGE CHANGE
// ============================================

if (languageSelector) {

    languageSelector.addEventListener(
        "change",
        function () {

            loadLanguage(this.value);

        }
    );

}


// ============================================
// LOAD SAVED LANGUAGE
// ============================================

const savedLanguage =
    localStorage.getItem("grambizLanguage") || "en";


loadLanguage(savedLanguage);