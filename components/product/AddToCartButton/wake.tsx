import { useCart } from "apps/wake/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

// deno-lint-ignore no-empty-interface
export interface Props extends Omit<BtnProps, "onAddItem" | "platform"> {
}

function AddToCartButton(props: Props) {
  const { addItem } = useCart();
  const onAddItem = () =>
    addItem({
      productVariantId: Number(props.productID),
      quantity: 1,
      customization: [{
        customizationId: 0,
        value: "0",
      }],
      subscription: {
        recurringTypeId: 0,
        subscriptionGroupId: 0,
      },
    });

  return <Button onAddItem={onAddItem} {...props} />;
}

export default AddToCartButton;
