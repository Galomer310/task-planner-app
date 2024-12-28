const DatePicker = ({ onDateChange }) => {
    return <input type="date" onChange={(e) => onDateChange(e.target.value)} />;
  };
  
  export default DatePicker;
  