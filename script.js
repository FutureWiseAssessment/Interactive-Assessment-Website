function startAssessment() {

    window.location.href = "assessment.html";

    // Later, you can change this to:
    // window.location.href = "assessment.html";

}

function toggleFAQ(button) {

    const answer = button.nextElementSibling;

    answer.classList.toggle("show");

    const icon = button.querySelector("span");

    if (answer.classList.contains("show")) {

        icon.textContent = "−";

    } else {

        icon.textContent = "+";

    }

}

function toggleMenu() {

    const navigation =
        document.querySelector(".navigation");

    navigation.classList.toggle("mobile-active");

}

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigationLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});