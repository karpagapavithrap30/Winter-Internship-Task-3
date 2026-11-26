import { useEffect } from "react";

function effect() {
    useEffect(() => {
        console.log("HI FROM USEEFFECT");

        const timer = setInterval(() => {
            console.log("HELLO STUDENTS!!");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("TIMER STOPPED");
        };
    }, []);

    return (
        <>
            <h1>TIMER CONSOLE</h1>
            <h1>hELLLO!!! </h1>
        </>
    );
}

export default effect;