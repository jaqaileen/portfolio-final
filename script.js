window.addEventListener("load", () => {
        const elements = document.querySelectorAll(".swift-up-text");

        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 200); // Stagger animation with a delay of 200ms
        });
    });
