export default function Cart() {
  let items = ["potato", 'tomato', 'coconut']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem items = {items[0]}/>
      <CartItem items = {items[1]}/>
    </div>
  );
}

function CartItem(props) {
  return(
    <div className="cart-item">
        <p>상품명 {props.items}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}