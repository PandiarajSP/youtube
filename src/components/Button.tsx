
const Button = ({ buttonText }: { buttonText: string }) => {
    return (

        <button className="px-3 py-2 m-3 bg-gray-100 rounded-lg whitespace-nowrap">
            {buttonText}
        </button>

    )
}

export default Button