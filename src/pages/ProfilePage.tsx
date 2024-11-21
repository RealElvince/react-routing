import { useParams } from "react-router-dom"



function ProfilePage() {
    const params = useParams<{profileId:string}>()
    console.log(params)
  return (
    <div>
        Profile Page {params.profileId}
    </div>
  )
}

export default ProfilePage