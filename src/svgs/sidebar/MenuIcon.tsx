type Props = {
  open: boolean;
  setOpen: Function;
};
const MenuIcon = ({ open, setOpen }: Props) => {
  return (
    <div role="button" onClick={() => setOpen(!open)} className="w-fit">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="!cursor-pointer"
      >
        <path
          d="M2.5 10H17.5"
          stroke="white"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 5H17.5"
          stroke="white"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 15H17.5"
          stroke="white"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
