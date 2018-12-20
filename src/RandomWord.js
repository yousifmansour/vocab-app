import './RandomWord.css';
import React from 'react';

class RandomWord extends React.Component {

    componentDidMount() {
        if (this.props.word === '' || this.props.word === undefined) 
            this.getNewWord();
        }
    
    getNewWord() {
        let url = 'https://www.yousifmansour.space/api/vocab/get/random';
        fetch(url).then((data) => (data.json())).then((data) => {
            this
                .props
                .handleInput(data.word);
        });
    }

    render() {
        const word = this.props.word;

        // this is the loading animation
        const loader = <div className="loader loader-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>;
        return (

            <div className="random-word">
                {this.props.word
                    ? <div>
                            <h1>
                                {word}
                            </h1>
                            <button
                                onClick={(e) => {
                                e.preventDefault();
                                this.getNewWord();
                            }}>Get Random Word</button>
                        </div>
                    : loader}

            </div>
        );
    }
}

export default RandomWord;