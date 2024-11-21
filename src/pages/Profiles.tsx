import { Link,Outlet } from "react-router-dom";


function Profiles() {
    const profiles = [1,2,3,4,5];
  return (
    <div>
        {
            profiles.map(
                (profile) => 
                (<Link key={profile} to={`/profiles/${profile} `}>
                    Profile {profile}
                </Link>)
            )
        }
        <Outlet/>
    </div>
  )
}

export default Profiles