const AnalyticsIcon = ({ selected }: { selected: number }) => {
  return (
    <div>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.54995 1.76378V10.9501H16.7362C16.3154 15.1892 12.7387 18.5 8.38883 18.5C3.75581 18.5 0 14.7442 0 10.1112C0 5.76128 3.3108 2.18466 7.54995 1.76378ZM9.22771 0.5C13.8865 0.901291 17.5988 4.61359 18 9.27233H9.22771V0.5Z"
          fill={selected == 3 ? "#0D8812" : "#ffffff"}
        />
      </svg>
    </div>
  );
};

export default AnalyticsIcon;
