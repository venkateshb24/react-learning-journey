function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p>Price : {props.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card