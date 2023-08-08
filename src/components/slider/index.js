import React, { Component } from "react";
import Slider from "react-slick";
import './index.css';

export default class ContentSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div className="content-slider">
                <div className="content-row-title">
                    <h2>ATHLETS</h2>
                </div>
                <div id="footballer"></div>
                <Slider {...settings}>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 01 </span> CONNECTION</h3>
                            <p>
                                Connect with coaches directly, you can ping coaches to view profile.
                            </p>
                        </div>
                    </section>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 02 </span> COLLABORATION</h3>
                            <p>
                                Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                            </p>
                        </div>
                    </section>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 03 </span> GROWTH</h3>
                            <p>
                                Resources and tools for you to get better as a student Athelte.
                                Access to training classes, tutor sessions, etc
                            </p>
                        </div>
                    </section>
                </Slider>

                <div className="content-row-title">
                    <h2>PLAYERS</h2>
                </div>
                <div id="basketball"></div>
                <Slider {...settings}>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 01 </span> CONNECTION</h3>
                            <p>
                                Connect with talented athlete directly, you can watch their 
                                skills through video showreels directly from Surface 1.
                            </p>
                        </div>
                    </section>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 02 </span> COLLABORATION</h3>
                            <p>
                                Work with recruiter to increase your chances of finding talented athlete.
                            </p>
                        </div>
                    </section>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 03 </span> GROWTH</h3>
                            <p>
                                Save your time, recruit proper athlets for your team.
                            </p>
                        </div>
                    </section>
                </Slider>
            </div>
        );
    }
}