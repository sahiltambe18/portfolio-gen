import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import PortNavbar from "./Port.Navbar";
import Projects from "./Projects";

export default function Portfolio() {
    return (
        <div className="flex flex-col  items-center" >
            <div className="flex flex-col gap-2 items-center w-full h-[100vh] bg-[url(https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] " >
                <PortNavbar />
                <Hero />
            </div>
            <About/>
            <Experience/>
            <Projects/>
            
        </div>
    )
}
