import './Breakdown.css';
import exerciseIcon from './images/icon-exercise.svg';
import playIcon from './images/icon-play.svg';
import selfCareIcon from './images/icon-self-care.svg';
import socialIcon from './images/icon-social.svg';
import studyIcon from './images/icon-study.svg';
import workIcon from './images/icon-work.svg';



function Breakdown() {
    return (
        <div className="breakdownGrid">
            <div className="breakdownCard orange">
            <img className="bdImg" src={workIcon}  alt="profile" />

                <div className="statsCard">
                    <h3>Work</h3>
                    <p className="time">1hr</p>
                </div>
            </div>
            <div className="breakdownCard blue">
            <img className="bdImg" src={playIcon}  alt="profile" />

                <div className="statsCard">
                    <h3>Play</h3>
                    <p className="time">1hr</p>
                </div>
            </div>
            <div className="breakdownCard pink">
            <img className="bdImg" src={studyIcon}  alt="profile" />

                <div className="statsCard">
                    <h3>Study</h3>
                    <p className="time">1hr</p>
                </div>
            </div>
            <div className="breakdownCard green">
            <img className="bdImg" src={exerciseIcon}  alt="profile" />

                <div className="statsCard">
                    <h3>Exercies</h3>
                    <p className="time">1hr</p>
                </div>
            </div>
            <div className="breakdownCard purple">
            <img className="bdImg" src={socialIcon}  alt="profile" />

                <div className="statsCard">
                    <h3>Social</h3>
                    <p className="time">1hr</p>
                </div>
            </div>
            <div className="breakdownCard yellow">
            <img className="bdImg" src={selfCareIcon } alt="profile" />

                <div className="statsCard">
                    <h3>Self care</h3>
                    <p className="time">1hr</p>
                </div>
            </div>
        </div>
    )
}
export default Breakdown;