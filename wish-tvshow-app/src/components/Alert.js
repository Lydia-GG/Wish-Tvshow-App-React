const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <h6 data-testid="alert-test">{message}</h6>
    </div>
  );
};

export default Alert;
