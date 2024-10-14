interface ButtonLoginProps {
  buttonText: string
}

export default function ButtonLogin(props: ButtonLoginProps) {
  return (
    <button
      className="bg-[#7eb61d] p-2 rounded-md text-white capitalize"
      type="submit"
    >
      {props.buttonText}
    </button>
  );
}
