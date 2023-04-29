const ProgressBar = (props: { bgcolor: string; completed: number }) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    background: bgcolor,
    borderRadius: 'inherit',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;
