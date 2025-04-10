import { useModal } from "../contexts/ModalContext";
import Form from "./Form";

function Footer(){
  const { modalDispatch } = useModal();
  

  return (
    <>
      <div>
        <button onClick={() => {
          modalDispatch({ type: "OPEN_FORM", form: "CREATE" });
        }} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-xl">
          + Create New
        </button>
        <Form />
      </div>
    </>
  )
}

export default Footer;
