import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Projects.css'
const Projects = () => {
    const {colorTheme} = useAuth();
    return (
        <div className='latest-project'>
            <div className='container my-5'>
                <div className={colorTheme==='dark'?'dark-latest-project' : 'light-latest-project'}>
                    <h1>LATEST PROJECT</h1>
                    <p>we design with care and develop with precisions </p>
                </div>
                <div className='row projects text-start'>
                    <div className='col-md-5 col-sm-12'>
                     <div className={colorTheme==='dark'?'dark-project-text':'light-project-text'}> <h1>PROJECT TITLE</h1>
                      <p>quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocksquartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocksquartz, vex nymphs. Waltz, g zebras vex. Two driven jocks </p>
                      <span><i className="fas fa-arrow-right project-icon"></i></span></div>
                    </div>
                    <div className=' col-md-7 col-sm-12'>
                     
                       <div className='ractangle-design mt-4'>
                            <div className='ractangle-ractangle-one'></div>
                            <div className='ractangle-ractangle-two'>
                                <span></span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;