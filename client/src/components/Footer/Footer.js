
const Footer = (props) => {
    return (
        <>
            <div className={'footer bg-' + props.theme} id="footer_container">
                <div class="container">
                    <footer class="py-3">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="google.com" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="google.com" class="nav-link px-2 text-muted">About us</a></li>
                        <li class="nav-item"><a href="google.com" class="nav-link px-2 text-muted">Contact us</a></li>
                        <li class="nav-item"><a href="google.com" class="nav-link px-2 text-muted">Trends</a></li>
                        </ul>
                        <p class="text-center text-muted">All rights reserved &copy; 2022 Trendit</p>
                    </footer>
                </div>
            </div>
            
        </>
    );
}

export default Footer;