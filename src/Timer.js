
import React, { useState, useRef } from "react";
import { BlueButton } from "./StyledComponents";

function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState("not-started");
    const intervalRef = useRef();

    function startTimer() {
        setIsRunning('started');
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

    }

    function stopTimer() {
        setIsRunning('paused');
        clearInterval(intervalRef.current);
    }

    function resetTimer() {
        setIsRunning('not-started');
        clearInterval(intervalRef.current);
        setTime(0);
    }

    function resumeTimer() {
        setIsRunning('started');
        startTimer();
    }
    function isStartDisabled() {
        console.log(1);
        return isRunning === "started";
    }
    function isStopDisabled() {
        console.log(2);
        return isRunning !== "started";
    }
    function isResetDisabled() {
        console.log(3);
        return isRunning === "not-started";
    }
    function isResumeDisabled() {
        console.log(4);
        return isRunning !== "paused";
    }


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };
    return (
        <div>
            <h1>Timer</h1>
            <h2>{formatTime(time)}</h2>
            <div className="buttons-div">
                <BlueButton name="start" isDisabled={isStartDisabled() } onClick={startTimer} >Start</BlueButton>
                <BlueButton name="stop" isDisabled={isStopDisabled()} onClick={stopTimer}>Stop</BlueButton>
                <BlueButton name="reset" isDisabled={isResetDisabled()} onClick={resetTimer}>Reset</BlueButton>
                <BlueButton name="resume" isDisabled={isResumeDisabled()} onClick={resumeTimer}>Resume</BlueButton>

            </div>
        </div>
    );
}

export default Timer;
