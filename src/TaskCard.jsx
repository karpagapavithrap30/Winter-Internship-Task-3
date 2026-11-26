import { Card, CardContent } from "@/components/ui/card"

function TaskCard({key,name,message,age}){
    return(
        <>
        <Card>
            <CardContent>
              <p>{key}</p>
              <p>{name}</p>
              <p>{message}</p>
              <p>{age}</p>  
            </CardContent>
            
        </Card>
        </>
    )
}
export default TaskCard