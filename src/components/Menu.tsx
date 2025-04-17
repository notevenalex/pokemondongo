import { Link } from "react-router-dom"

export const Menu = () => {
  
  return (
    <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
        <ul className="md:flex gap-4 md:mt-0">
            <li>
                <Link to="/">Home</Link>
                
            </li>
            <li>
                <Link to="/poke">Who's that poke?</Link>
            </li>
            
        </ul>
        </div>
    </nav>
  )
}
