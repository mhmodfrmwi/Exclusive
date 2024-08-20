const RefreshLink = ({ href, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href; // This will refresh the page and navigate
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default RefreshLink;
