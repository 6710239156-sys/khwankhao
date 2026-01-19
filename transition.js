// Page Transition : Fade / Dissolve
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");

            // ใช้เฉพาะลิงก์ที่ไปหน้า .html
            if (href && href.endsWith(".html")) {
                e.preventDefault();

                document.body.classList.add("page-exit");

                setTimeout(() => {
                    window.location.href = href;
                }, 600); // ต้องตรงกับเวลาใน CSS
            }
        });
    });
});
