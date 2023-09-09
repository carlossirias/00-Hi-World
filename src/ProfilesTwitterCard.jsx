import { useState } from "react"

export function ProfilesTwitterCard({userName = 'sirias04', name = 'Carlos Sirias', initialIsFollowing = false, followUs = false})
{
    const [isFollowing, setState] = useState(initialIsFollowing)
    var followUsContainer = followUs ?  <span className="text-sm bg-gray-800 rounded-md px-[0.2rem] py-[0.1rem]">Te sigue</span> : ''
    
    var classIsFollowing = isFollowing ? 'border-[1px] border-white bg-gray-900 text-gray-50' : 'bg-gray-50 text-black'

    var textIsFollowing = isFollowing ? 'Dejar de seguir' : 'Seguir'

    const handState = ()=>
    {
        setState(!isFollowing);
    }
    

    return(
    <div className="w-96 max-sm:w-full flex items-center place-content-between">
        <div className="flex gap-2">
            
            <img src={`https://unavatar.io/${userName}`} className=" h-12 rounded-full" alt="" />
            
            <div>
                <strong className="text-gray-50">{name}</strong>
                <p className="text-gray-600 font-medium">@{userName} {followUsContainer}</p>
            </div>
        </div>

        <div>
            <button className={`py-1 px-4 text-sm font-bold rounded-full  hover:bg-gray-200 hover:text-black  transition ${classIsFollowing} `} onClick={handState}>{textIsFollowing}</button>
        </div>
    </div>)
}