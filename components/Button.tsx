interface ButtonLoginProps {
  buttonText: string;
  onClick: () => void;
}

export default function ButtonLogin(props: ButtonLoginProps) {
  return (
    <button
      className={`bg-[#7eb61d] p-2 rounded-md text-white capitalize`}
      type="submit"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
}
