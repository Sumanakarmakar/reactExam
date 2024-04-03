import React from 'react'

const Home = () => {
    return (
        <>

            <div class="full_bg">
                <div class="slider_main">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                {/* <!-- carousel code --> */}
                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        {/* <!-- first slide --> */}
                                        <div class="carousel-item active">
                                            <div class="carousel-caption relative">
                                                <div class="row d_flex">
                                                    <div class="col-md-5">
                                                        <div class="board">
                                                            <i><img src="images/top_icon.png" alt="#" /></i>
                                                            <h3>
                                                                Skating<br/> Board<br/> School
                                                                </h3>
                                                                    <div class="link_btn">
                                                                        <a class="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div class="col-md-7">
                                                            <div class="banner_img">
                                                                <figure><img class="img_responsive" src="images/banner_img.png"/></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- second slide --> */}
                                            <div class="carousel-item">
                                                <div class="carousel-caption relative">
                                                    <div class="row d_flex">
                                                        <div class="col-md-5">
                                                            <div class="board">
                                                                <i><img src="images/top_icon.png" alt="#" /></i>
                                                                <h3>
                                                                    Skating<br/> Board<br/> School
                                                                    </h3>
                                                                        <div class="link_btn">
                                                                            <a class="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="banner_img">
                                                                    <figure><img class="img_responsive" src="images/banner_img.png"/></figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- third slide--> */}
                                                <div class="carousel-item">
                                                    <div class="carousel-caption relative">
                                                        <div class="row d_flex">
                                                            <div class="col-md-5">
                                                                <div class="board">
                                                                    <i><img src="images/top_icon.png" alt="#" /></i>
                                                                    <h3>
                                                                        Skating<br/> Board<br/> School
                                                                        </h3>
                                                                            <div class="link_btn">
                                                                                <a class="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <div class="banner_img">
                                                                        <figure><img class="img_responsive" src="images/banner_img.png"/></figure>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- controls --> */}
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    )
}

                    export default Home