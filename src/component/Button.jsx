import { useContext } from "react"
import { UserStatus } from "../App"

export default function Button (){
    const [signedIn, setSignedIn] = useContext(UserStatus)
    return (
        <>
        <button onClick={() => setSignedIn(!signedIn)}>{signedIn ? "Sign in" : "Sign out"}</button>
        </>
    )
}