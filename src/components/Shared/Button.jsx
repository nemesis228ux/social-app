

const Button = ({text, bgColor, textColor}) => {
  return(
    <button style={{backgroundColor: bgColor, color: textColor}}
    className="w-[80px] border border-white rounded-sm font-semibold  text-center hover:scale-95 duration-300">
      {text}
    </button>
  )
}

export default Button