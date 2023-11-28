import Sidebar from "../../components/sidebar/Sidebar"
import { useNavigate } from "react-router-dom";


export default function Home() {

    return (
        <main id="main" className="x-background primaryBackground relative ease-in grid place-content-center h-full">
            {/* w-full h-full */}
            <div className="x-content-section secondaryBackground oppositeShadeColor theme-shadow theme-border-radius p-8 flex flex-col text-center">
                <h1>Pardon Our Dust!</h1>
                <h2>Home Page Under Construction</h2>
                <div className="grid place-content-center h-full">
                    <img className="place-self-center w-44" src="/images/icons/construction.png"></img>
                </div>
            </div>
        </main>
    )
}


