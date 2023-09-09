import { TwitterCard } from "./TwitterCard"
import { ProfilesTwitterCard } from "./ProfilesTwitterCard"

export function App(){

    var users = [
        {
            name: "Carlos Sirias",
            userName: "sirias04",
            followUs: false,
            initialIsFollowing: false
        },
        {
            name: "Otoniel Rojas",
            userName: "Otonielrojas8",
            followUs: false,
            initialIsFollowing: false
        },
        {
            name: "Dalas Review",
            userName: "DalasReview",
            followUs: false,
            initialIsFollowing: false
        },
        {
            name: "Bill Gates",
            userName: "BillGates",
            followUs: true,
            initialIsFollowing: false
        },
        {
            name: "X",
            userName: "X",
            followUs: true,
            initialIsFollowing: false
        }
    ]
    return (
        <main className="w-scren h-screen bg-gray-950 flex items-center justify-center">
            <TwitterCard>
                {
                    users.map(({name, userName, followUs, initialIsFollowing})=>(
                        <ProfilesTwitterCard key={userName} name={name} userName={userName} followUs={followUs} initialIsFollowing={initialIsFollowing}/>
                    ))
                }
            </TwitterCard>

        </main>
    )
}