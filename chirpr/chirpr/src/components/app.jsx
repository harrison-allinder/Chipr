import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Timeline from "./Timeline";
import CreateChirpForm from "./CreateChirpForm";

class App extends Component {
    constructor(props) {
        super(props);

        //Set up intial state data

        this.state = {
            chirps: [
                {
                    userName: "Ryan",
                    chirpContent: "YOU ARE STILL HERE/ YOU ARE STILL HAPPY/ YOU ARE STILL SMILING AND LAUGHING/ YOU ARE STILL THE ONLY THING AND EVERY THING I NEED IN MY LIFE",
                    chirpId: 1,
                    chirpDate: "May 08 2019 2:23"
                },
                {
                    userName: "Ryan",
                    chirpContent: "I dont think I like TFB anymore I dont like being sad all the time. Has anyone here ever listened to Grimes?",
                    chirpId: 2,
                    chirpDate: "May 08 2014 2:22"
                },
                {
                    userName: "Ryan",
                    chirpContent:
                        "I WOULD SLEEP BETTER ON YOUR FLOOR THAN I WOULD EVER IN MY BED~ and if your carpet makes my face itch/ it would still be heaven in my head",
                    chirpId: 3,
                    chirpDate: "Dec 04 2013 4:55"
                },
                {
                    userName: "Ryan",
                    chirpContent:
                        "yoo 1 month into listening to the front bottoms i'm a little depressed all the time but I think im gonna grow to love it",
                    chirpId: 4,
                    chirpDate: "Oct 08 2013 3:02"
                },
                {
                    userName: "Ryan",
                    chirpContent:
                        "Guys I just discovered this cool band called the front bottoms it's lit",
                    chirpId: 5,
                    chirpDate: "May 27 2013 5:37"
                }
            ],
            createChirp: false,
            numChirps: 5
        };

        this.handleToggleCreateChirp = this.handleToggleCreateChirp.bind(this);
        this.handleNewChirp = this.handleNewChirp.bind(this);
    }

    // toggle between new chirp display and timeline display
    handleToggleCreateChirp() {
        this.setState({ createChirp: !this.state.createChirp });
    }

    // handle inputs to new chirp form
    handleNewChirp(chirp) {
        let date = new Date();
        chirp.chirpDate = date.toString();
        chirp.chirpId = this.state.numChirps + 1;
        this.setState({
            chirps: [chirp, ...this.state.chirps],
            createChirp: false,
            numChirps: this.state.numChirps + 1
        });
        console.log(this.state);
    }

    render() {
        if (this.state.createChirp === false) {
            return (
                <>
                    <PageHeader handleToggleCreateChirp={this.handleToggleCreateChirp} />
                    <Timeline chirps={this.state.chirps} />
                </>
            );
        } else {
            return (
                <>
                    <PageHeader handleToggleCreateChirp={this.handleToggleCreateChirp} />
                    <CreateChirpForm
                        handleCancel={this.handleToggleCreateChirp}
                        handleSubmit={this.handleNewChirp}
                    />
                </>
            );
        }
    }
}
export default App;