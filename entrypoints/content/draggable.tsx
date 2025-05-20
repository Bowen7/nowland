import { Rnd } from "react-rnd";

let capturedPointerId: PointerEvent["pointerId"];

const documentPointerMoveOnceListener = ({ pointerId }: PointerEvent) => {
  document.removeEventListener("pointermove", documentPointerMoveOnceListener);
  capturedPointerId = pointerId;
  document.documentElement.setPointerCapture(capturedPointerId);
};

const setDocumentPointerCapture = () => {
  document.addEventListener("pointermove", documentPointerMoveOnceListener);
};

const releaseDocumentPointerCapture = () => {
  if (capturedPointerId) {
    document.documentElement.releasePointerCapture(capturedPointerId);
  }
};

export const Draggable = (props: { children: React.ReactNode }) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 230,
        height: 56,
      }}
      className="!fixed z-2147483647"
      onDragStart={setDocumentPointerCapture}
      onDragEnd={releaseDocumentPointerCapture}
      enableResizing={false}
    >
      {props.children}
    </Rnd>
  );
};
