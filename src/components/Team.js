import { Component } from 'react';
import shotSound1 from '../media/audio/metalbat.wav'
import scoreSound1 from '../media/audio/yell4yeeha.wav'


export default class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shots: 0,
            score: 0,
        };

        this.shotSound = new Audio (shotSound1);
        this.scoreSound = new Audio (scoreSound1);
    }

     shotHandler = () => {
        let score = this.state.score;
        // this.shotSound.play();
        if (Math.random() > 0.5) {
            score += 1;

            setTimeout(() => {
                this.scoreSound.play()        
            }, 400);
        }
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score,
        }));
    };

    render() {
        let shotPercentageDiv;
        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100);
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %</strong>{shotPercentage}
                </div>
            );
        }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name}/>
                </div>
                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>
                <div>{shotPercentageDiv}</div>
                <button className="buttons" onClick={this.shotHandler}>
                    Shoot:
                </button>
            </div>
        );

    }
}