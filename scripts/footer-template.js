const footerTemplate = `
    <footer class="mt-auto py-3 bg-light border-top">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center gap-4 small text-muted flex-wrap">

                <a href="https://github.com/ericlstaggs/ericslearningrepo"
                    class="text-decoration-none text-muted border border-secondary-subtle rounded-pill px-3 py-1"
                    target="_blank">
                    &lt; <i class="bi bi-github"></i> source code &gt;
                </a>

                <span>
                    &copy; 2026 Eric Staggs
                </span>

                <a href="https://github.com/ericlstaggs"
                    class="text-decoration-none text-muted border border-secondary-subtle rounded-pill px-3 py-1"
                    target="_blank">
                    <i class="bi bi-github"></i>
                    <i class="bi bi-person-circle"></i>
                    GitHub Profile
                </a>

            </div>
        </div>
    </footer>`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('footer-placeholder').innerHTML = footerTemplate;
});
