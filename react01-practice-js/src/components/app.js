import React, { Component } from 'react'
import Occurance from './01-occurance';
import Asterisk from './02-asterisk';
import SixSums from './03-sixSums';
import Factorial from './04-factorial';
import RegisterAndLogin from './registerAndLogin';
import Palindrome from './07-palindrome';
import TwoWords from './08-twoWords';
import Summation from './09-summation';
import WordSmash from './10-wordSmash';
// import MultipleInputs from './multipleInputs';

class App extends Component {
    render() {
        return (
            <div>
                <Occurance />
                <Asterisk />
                <SixSums />
                <Factorial />
                <RegisterAndLogin />
                <Palindrome />
                <TwoWords />
                <Summation />
                <WordSmash />
                {/* <MultipleInputs /> */}
            </div>
        )
    }
}

export default App;