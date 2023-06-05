
import './CardProduct.css'



const CardProduct = (props) => {
    function handleClick() {
            alert(`Produk ${props.namaProduk} dengan harga ${props.hargaProduk} merupakan produk dengan kualitas terbaik `)
    }

  return (
    <div className="Card" onClick={handleClick}>
        <img src={props.gambar} /> 
        <h2>{props.namaProduk}</h2>
        <p>{props.hargaProduk}</p>
    </div>
  )
}

export default CardProduct