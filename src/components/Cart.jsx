import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useOutletContext } from "react-router-dom"
import { Button } from "./ui/button";

function Cart() {

  const [cart,setCart]=useOutletContext();
  console.log("cart fro dfsajfal",cart)

  return (
    <main className="flex flex-col gap-3">
      {cart.map((item)=>{
        return(
        <Card key={item.id} className="mx-6 flex items-center justify-center">
        <CardContent>
          <img src={item.image} alt="" className="w-32 p-4"/>
        </CardContent>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardDescription>
          <p>{item.quantity}</p>
        </CardDescription>
        <CardFooter>
          <Button>Remove</Button>
        </CardFooter>
      </Card>
        )
      })}
    </main>
  )
}

export default Cart