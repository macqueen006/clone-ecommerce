

const NavHoverLink = ({children, buttonText, className}) => {
  return (
    <a
    href="#"
    className={`inline-flex ${className || ''} flex-col transition-colors duration-150 ease-out items-center  no-underline`}
  >
    {children}
    <div className={`${className || ''}`}>{buttonText}</div>
  </a>
  )
}

export default NavHoverLink
