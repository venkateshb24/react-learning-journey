import Noodles from "./assets/noodles.webp"
import Biriyani from "./assets/biriyani.jpeg"
import Chickenrice from "./assets/chicken-rice.jpeg"
import Card from "./card"

function Cards() {
    return (
        <>
            <Card img={Noodles} name="Noodles" price="100"/>
            <Card img={Biriyani} name="Biriyani" price="150"/>
            <Card img={Chickenrice} name="Chicken Rice" price="120"/>
        </>
    )
}

export default Cards