var a = document.getElementById("Header").innerHTML = `
<nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-logo" href="#">
                <img src="Assets/Images/Logo-nav" alt="Logo">
                <div class="navbar-text">
                    <span class="navbar-logo-name">SIMPLONS</span>
                    <span class="navbar-logo-name2">Beauty care</span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html"><i class="fas fa-home"></i> Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="Gallery.html"><i class="fas fa-images"></i> Gallery</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-box-open"></i> Products
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="Skin-Care.html"><i class="fas fa-box"></i> Skin Care</a>
                            </li>
                            <li><a class="dropdown-item" href="Hair.html"><i class="fas fa-box"></i> Hair</a></li>
                            <li><a class="dropdown-item" href="Nail-Paints.html"><i class="fas fa-box"></i> Nail Paints</a>
                            </li>
                            <li><a class="dropdown-item" href="Wedding-kits.html"><i class="fas fa-box"></i> Wedding Kits</a>
                            </li>
                            <li><a class="dropdown-item" href="Nail-Art.html"><i class="fas fa-box"></i>Nail Arts</a>
                            </li>
                            <li><a class="dropdown-item" href="Makeup-Kits.html"><i class="fas fa-box"></i> Makeup Kits</a>
                            </li>
                            <li><a class="dropdown-item" href="Jewellery.html"><i class="fas fa-box"></i> Jewellery</a>
                            </li>
                            <li><a class="dropdown-item" href="Upcoming products.html"><i class="fas fa-box"></i> Upcoming Products</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="About-Us.html" tabindex="-1" aria-disabled="true">
                            <i class="fas fa-info-circle"></i> About Us
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="Contact-Us.html"><i class="fas fa-envelope"></i> Contact
                            Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="Feedback.html"><i class="fas fa-comments"></i>
                            Feedback</a>
                    </li>
                    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="cart.html">
        <i class="fas fa-shopping-cart"></i> Cart 
        <span id="cart-badge" class="badge bg-danger" style="border-radius: 50%; padding: 3px 8px; font-size: 14px;">0</span>
    </a>
</li>

                </ul>
            </div>
        </div>
    </nav>
`;
