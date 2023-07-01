import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onClose={closeCart} placement="end">
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas>
  );
}
