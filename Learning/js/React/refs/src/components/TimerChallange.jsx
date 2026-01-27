import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
    const timeIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

    if (timerRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handleRest() {
        setTimerRemaining(targetTime * 1000);
    }
    
    function handleStart() {
        timer.current = setInterval(() => {
            setTimerRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            //dialog.current.showModal();
        }, 10);
    }

    function handleStop() {
        dialog.current.showModal();
        clearInterval(timer.current);
    }

    return (
    <>
    <ResultModal 
        ref={dialog} 
        targetTime={targetTime} 
        remainingTime={timerRemaining}
        onReset={handleRest}
    />
    <section className="challange">
        <h2>{title}</h2>
        <p className="challange-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Challegne
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>
    );
}