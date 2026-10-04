document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search-input");
    const results = document.querySelectorAll("#search-results li");
    const noResults = document.getElementById("no-results");

    if (!input || !noResults) return;

    function normalize(text) {
        return String(text || "")
            .toLowerCase()
            .replace(/đ/g, "d")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    input.addEventListener("input", function () {
        const query = normalize(input.value.trim());
        let found = 0;

        results.forEach(function (item) {
            const link = item.querySelector("a");
            const title = normalize(link ? link.textContent : "");
            const matches = query === "" || title.includes(query);

            item.style.display = matches ? "" : "none";

            if (query !== "" && matches) found++;
        });

        noResults.style.display =
            query !== "" && found === 0 ? "block" : "none";
    });
});