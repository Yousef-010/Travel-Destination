import './footer.css'
function Footer (props){
    return (
        <>
         <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">...</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">...</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">..</a></li>
                            <li><a href="#">..</a></li>
                            <li><a href="#">..</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-3 item social">
                        <a href="#"><i className="icon ion-social-facebook"></i></a>
                        <a href="#"><i className="icon ion-social-twitter"></i></a>
                        <a href="#"><i className="icon ion-social-github"></i></a>
                        <a href="#"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">All copyrights reserved,Yousef © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        
        </>
    )}

    export default Footer