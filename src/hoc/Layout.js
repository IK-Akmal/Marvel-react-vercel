import Footer from "../components/Footer/Footer";
import TopBar from "../components/TopBar/TopBar";




export default function Layout(props) {
    return (
        <>
            <TopBar />
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}