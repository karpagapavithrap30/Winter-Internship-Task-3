function TaskList(){
    const tasks = [
        {
            id:1,
            name:"Title 1",
            message:"TITLE 1 IS SHOWN",
            age:20,
        },
        {
            id:2,
            name:"Title 2",
            message:"TITLE 2 IS SHOWN",
            age:21,
        },
        {
            id:3,
            name:"Title 3",
            message:"TITLE 3 IS SHOWN",
            age:22,
        }
    ];
    return(
        <>
            <h2>Task List</h2>
            {tasks.map((task)=>(
                <taskcard
            key={task.id}
            name={task.name}
            message={task.message}
            age={task.age}
            />
            ))} 
            
        </>
    )
}
export default TaskList