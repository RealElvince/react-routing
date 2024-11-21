import { Link } from "react-router-dom"


function NotFoundPage() {
  return (
    <div
    className="flex flex-col gap-2">
        404 not found!
        <Link to="/">Home Page</Link>
        <a href="/">Home from A </a>
    </div>

    
  )
}

export default NotFoundPage