import { createPortal } from "react-dom"
import cn from "@/lib/cn"

type Props = React.ComponentPropsWithRef<"div">

export default function BaseModal(props: Props) {
  const { className } = props

  return createPortal(
    <div role="modal-container" className={cn("fixed inset-0 z-50", className)}>
      <div
        role="cancel-modal"
        className="absolute inset-0 z-[-1] bg-black opacity-75"
        onClick={props.onClick}
      />
      {props.children}
    </div>,
    document.body
  )
}
