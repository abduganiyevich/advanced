import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilitues/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}=useShoppingCart()
    const quantity=getItemQuantity(id);
  return (
    <div>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="fs-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {
                    quantity===0?(
                        <button onClick={()=>increaseCartQuantity(id)} type="button" className="btn btn-primary w-100">+Add to Cart</button>
                    ):<div className="d-flex align-items-center flex-column" style={{gap:'2rem'}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap:"2rem"}}>
                                <button onClick={()=>decreaseCartQuantity(id)} className="btn btn-primary">-</button>
                                <div>
                                <span className="fs-3">{quantity}</span>
                                </div>
                                <button onClick={()=>increaseCartQuantity(id)} className="btn btn-primary">+</button>
                            </div>
                            <button onClick={()=>removeFromCart(id)} className="btn btn-danger">Remove</button>
                    </div>
                }
            </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StoreItem;
