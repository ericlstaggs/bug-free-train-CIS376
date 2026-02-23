const navbarTemplate = `

    <div class="mt-4 p-5 bg-primary text-white rounded align-content-center align-items-center d-flex flex-column" >
        <h1 class="title-text">Defligration</h1>
    </div>

   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">

                <i class="bi bi-robot"></i></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../ericslearningrepo/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.youtube.com/watch?v=QZ7fIsUrkeE" target="_blank">Video</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="about">
                        <a class="nav-link" href="../ericslearningrepo/about.html">About</a>
                    </li>
                    <li class="navTemplate">
                        <a class="nav-link" href="../ericslearningrepo/templates/content.html">Content</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>








`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('navbar-placeholder').innerHTML = navbarTemplate;
});