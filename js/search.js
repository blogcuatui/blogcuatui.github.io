document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("search-input");
    const results = document.querySelectorAll("#search-results li");
    const noResults = document.getElementById("no-results");

    function normalize(text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    input.addEventListener("input", function () {

        const query = normalize(input.value.trim());
        let found = 0;

        results.forEach(function (item) {

            const link = item.querySelector("a");
            const title = normalize(link.textContent);

            if (query !== "" && title.includes(query)) {
                item.classList.add("search-visible");
                found++;
            } else {
                item.classList.remove("search-visible");
            }

        });

        if (query !== "" && found === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });

});