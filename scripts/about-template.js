const aboutTemplate = `
    <div class="container mt-5">
        <h1 class="text-center mb-4">About Defligration</h1>
        <p class="lead text-center">Welcome to Defligration, a platform dedicated to helping users navigate and manage their digital lives.</p>
        <div class="row mt-5">
            <div class="col-md-6">
                <h2>Our Mission</h2>
                <p>At Defligration, we believe in simplifying the complexities of modern digital life. Our mission is to provide tools and resources that empower users to take control of their online presence and digital well-being.</p>
            </div>
            <div class="col-md-6">
                <h2>What We Offer</h2>
                <p>We offer a range of services designed to help you manage your digital footprint, protect your privacy, and streamline your online experience. From data management tools to privacy settings guides, we're here to support you.</p>
            </div>
        </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('about-placeholder').innerHTML = aboutTemplate;
});