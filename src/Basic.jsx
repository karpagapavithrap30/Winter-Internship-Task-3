import { useEffect,useState } from "react";

function   Basic() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getApp() {
            try
            {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const data = await response.json();
                console.log(data);
                setData(data);
                
            }catch (error) {
                console.error("Failed to load user data:", error);
            }
        }
        getApp();
    },[]);
    return (
        <>
            <h1>Hi..!!</h1>
            <p>
                {data && (
                    <>
                        <p>{data.title}</p>
                        <p>{data.id}</p>
                    </>
                )}
            </p>
        </>
    );
}export default Basic;