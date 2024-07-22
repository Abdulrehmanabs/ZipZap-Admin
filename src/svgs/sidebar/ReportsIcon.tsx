const ReportsIcon = ({ selected }: { selected: number }) => {
  return (
    <div>
      <svg
        width="17"
        height="19"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1111 1.9H12.2778V0H10.3889V1.9H6.61111V0H4.72222V1.9H1.88889C0.847167 1.9 0 2.75215 0 3.8V17.1C0 18.1479 0.847167 19 1.88889 19H15.1111C16.1528 19 17 18.1479 17 17.1V3.8C17 2.75215 16.1528 1.9 15.1111 1.9ZM8.5 11.4H3.77778V9.5H8.5V11.4ZM13.2222 7.6H3.77778V5.7H13.2222V7.6Z"
          fill={selected == 4 ? "#0D8812" : "#ffffff"}
        />
      </svg>
    </div>
  );
};

export default ReportsIcon;
