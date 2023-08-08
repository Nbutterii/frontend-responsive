import React from 'react';
import './index.css';
import ContentSlider from '../slider'

class Content extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content-desktop">
                    <section className="content-con">
                        <div className="content-row"/>
                        <div className="content-row">
                            <h2>ATHLETS</h2>
                            <div id="footballer"/>
                            <h3><span> 01 </span> CONNECTION</h3>
                            <p>
                                Connect with coaches directly, you can ping coaches to view profile.
                            </p>
                        </div>
                    </section>
                    <section className="content-con bg-grey">
                        <div className="content-row"/>
                        <div className="content-row">
                            <h3><span> 02 </span> COLLABORATION</h3>
                            <p>
                                Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                            </p>
                        </div>
                    </section>
                    <section className="content-con bg-purple">
                        <div className="content-row"/>
                        <div className="content-row">
                            <h3><span className="box-shadow-white"> 03 </span> GROWTH</h3>
                            <p className="color-white">
                                Resources and tools for you to get better as a student Athelte.
                                Access to training classes, tutor sessions, etc
                            </p>
                        </div>
                    </section>

                    <section className="content-con">
                        <div className="content-row">
                            <h2>PLAYERS</h2>
                            <div id="basketball"/>
                            <h3><span> 01 </span> CONNECTION</h3>
                            <p>
                                Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                            </p>
                        </div>
                        <div className="content-row"/>
                    </section>
                    <section className="content-con bg-grey">
                        <div className="content-row">
                            <h3><span> 02 </span> COLLABORATION</h3>
                            <p>
                                Work with recruiter to increase your chances of finding talented athlete.
                            </p>
                        </div>
                        <div className="content-row"/>
                    </section>
                    <section className="content-con bg-darkpurple">
                        <div className="content-row">
                            <h3><span className="box-shadow-white color-purple"> 03 </span> GROWTH</h3>
                            <p className="color-white">
                                Save your time, recruit proper athlets for your team.
                            </p>
                        </div>
                        <div className="content-row"/>
                    </section>
                </div>

                <div className="content-mobile">
                    <ContentSlider />
                </div>
            </div>
        )
    }
}

export default Content;
