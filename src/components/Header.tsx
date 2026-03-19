
const Header = () => {
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
                    alt="menu-icon" />
                <img className="h-7 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="logo" />
            </div>
            <div className="col-span-10 text-center">
                <input className="w-1/2" type="text" />
                <button>Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg" />
            </div>
        </div>
    )
}

export default Header