import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chimeraLogo from "../images/chimera_icon.svg";
import kiitLogo from "../images/KIIT_LOGO_1.svg";
import ksacLogo from "../images/KSAC_LOGO_1.svg";

const Navbar = () => {
    const [click, setclick] = useState(false);
    const [about, setabout] = useState(false);
    const [event, setevent] = useState(false);
    const [leads, setleads] = useState(false);
    const [contact, setcontact] = useState(false);
    const [reg, setreg] = useState(false);
    const [navColor, setnavColor] = useState("white");
    const listenScrollEvent = () => {
        window.scrollY > 30
            ? setnavColor("backdrop-blur-md")
            : setnavColor("white");
    };

    const changecolor = (name) => {
        localStorage.setItem("color", name);
        if (name === "about") {
            setabout(true);
            setcontact(false);
            setleads(false);
            setevent(false);
            setreg(false);
        } else if (name === "contact") {
            setabout(false);
            setcontact(true);
            setleads(false);
            setevent(false);
            setreg(false);
        } else if (name === "leads") {
            setabout(false);
            setcontact(false);
            setleads(true);
            setevent(false);
            setreg(false);
        } else if (name === "event") {
            setabout(false);
            setcontact(false);
            setleads(false);
            setevent(true);
            setreg(false);
        } else if (name === "reg") {
            setabout(false);
            setcontact(false);
            setleads(false);
            setevent(false);
            setreg(true);
        } else {
            setabout(false);
            setcontact(false);
            setleads(false);
            setevent(false);
            setreg(false);
        }
    };

    useEffect(() => {
        let c = localStorage.getItem("color");
        changecolor(c);
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <>
            <nav
                className={`${navColor} hidden md:block border-gray-200 sticky top-0 z-50`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 z-50">
                    <div className="flex title-font font-base items-center text-gray-900 mb-4 md:mb-0">
                        <Link
                            to={"/"}
                            className=" "
                            onClick={() => changecolor("homecolor")}
                        >
                            <img
                                src={chimeraLogo}
                                alt="kritarthlogo"
                                className="logo_shadow  h-16 w-full  backdrop-sha"
                            />
                        </Link>
                    </div>
                    <div className="flex md:order-2">
                        <div
                            type="button"
                            className="mr-3 md:mr-0 flex justify-center items-center space-x-2"
                        >
                            <a
                                href="https://ksac.kiit.ac.in/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={ksacLogo}
                                    alt="ksaclogo"
                                    className="h-20 img p-1"
                                />
                            </a>
                            <a
                                href="https://kiit.ac.in/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={kiitLogo}
                                    alt="kiitlogo"
                                    className="h-16 img p-1"
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <div className="flex justify-center items-center space-x-4 text-xl font-poppins text-black font-semibold nav_font">
                            <Link
                                onClick={() => {
                                    changecolor("about");
                                }}
                                to={"/about"}
                                className={`md:font-semiblod ${
                                    about && "bg-[#66D076]"
                                } px-3 py-1   md:rounded-xl hover:text-gray-300`}
                            >
                                About
                            </Link>
                            <Link
                                onClick={() => {
                                    changecolor("event");
                                }}
                                to={"/event"}
                                // to={"/comingsoon"}
                                className={`md:font-semiblod ${
                                    event && "bg-[#66D076]"
                                } px-3 py-1   md:rounded-xl hover:text-gray-300`}
                            >
                                Events
                            </Link>
                            {/* <Link
                                onClick={() => {
                                    changecolor("leads");
                                }}
                                to={"/lead"}
                                // to={"/comingsoon"}
                                className={`md:font-semiblod ${
                                    leads && "bg-[#66D076]"
                                } px-3 py-1   md:rounded-xl hover:text-gray-300`}
                            >
                                Leads
                            </Link> */}
                            <Link
                                onClick={() => {
                                    changecolor("reg");
                                }}
                                to={"/register"}
                                className={`md:font-semiblod ${
                                    reg && "bg-[#66D076]"
                                } px-3 py-1  md:rounded-xl hover:text-gray-300`}
                            >
                                Register
                            </Link>
                            <Link
                                onClick={() => {
                                    changecolor("contact");
                                }}
                                to={"/contacts"}
                                className={`md:font-semiblod ${
                                    contact && "bg-[#66D076]"
                                } px-3 py-1   md:rounded-xl hover:text-gray-300`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <nav className="md:hidden sticky top-0 z-50 bg-black/5">
            <div className={`mx-auto ${navColor} ${click ? "backdrop-blur-md" : ""} max-w-7xl px-2 md:px-6 lg:px-8`}>
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden" onClick={() => setclick(!click)}>
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white " aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5" />
                            {!click && (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>)}
                            {click && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>)}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={'/'}>
                                <img className="h-8 w-auto" src={kritarthlogo} alt="Your Company"/>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <div className="relative ml-3"><div><div className="relative flex text-sm">
                            <a href="https://ksac.kiit.ac.in/" target="_blank">
                                <img className="h-11 w-auto p-1" src={ksac} alt="Your Company"/>
                            </a>
                            <a href="https://kiit.ac.in/" target="_blank">
                                <img className="h-10 w-12 py-[2px] p-1" src={kiit} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {click && (
        <div className={`md:hidden fixed backdrop-blur-md bg-black/5 w-screen z-50 text-center`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link onClick={() => setclick(false)} to={'/about'} className="text-white hover:bg-green-600 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                    About
                </Link>
                <Link onClick={() => setclick(false)} to={'/event'} className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Events
                </Link>
                <Link onClick={() => setclick(false)} to={'/leads'} className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Leads
                </Link>
                <Link onClick={() => setclick(false)} to={'/commingsoon'} className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Register
                </Link>
                <Link onClick={() => setclick(false)} to={'/contacts'} className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Contacts
                </Link>
            </div>
        </div>)}
    </nav> */}

            <nav className=" md:hidden sticky top-0 z-50 bg-black/5">
                <div
                    className={`mx-auto ${navColor} ${
                        click ? "backdrop-blur-md" : ""
                    } max-w-7xl px-2 md:px-6 lg:px-8`}
                >
                    <div className="relative flex h-16 items-center justify-between">
                        <div
                            className="absolute inset-y-0 left-0 flex items-center md:hidden"
                            onClick={() => setclick(!click)}
                        >
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-white "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="absolute -inset-0.5" />
                                {!click && (
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="black"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                                {click && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="black"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to={"/"}>
                                    <img
                                        className="h-8 w-auto"
                                        src={chimeraLogo}
                                        alt="Your Company"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <div className="relative flex   text-sm ">
                                        <a
                                            href="https://ksac.kiit.ac.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                className="h-11 w-auto p-1"
                                                src={ksacLogo}
                                                alt="Your Company"
                                            />
                                        </a>
                                        <a
                                            href="https://kiit.ac.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                className="h-10 w-12 py-[2px] p-1"
                                                src={kiitLogo}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu, show/hide based on menu state. */}
                {click && (
                    <div
                        className={`md:hidden fixed backdrop-blur-md bg-black/5   w-screen z-50 text-center`}
                        id="mobile-menu"
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* Current: "bg-gray-900 text-white", Default: "text-white hover:bg-gray-700 hover:text-white" */}
                            <Link
                                onClick={() => setclick(false)}
                                to={"/about"}
                                className=" text-white hover:bg-green-600 block rounded-md px-3 py-2 text-base font-medium"
                                aria-current="page"
                            >
                                About
                            </Link>
                            <Link
                                onClick={() => setclick(false)}
                                to={"/event"}
                                // to={"/comingsoon"}
                                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                            >
                                Events
                            </Link>
                            {/* <Link
                                onClick={() => setclick(false)}
                                // to={"/leads"}
                                to={"/comingsoon"}
                                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                            >
                                Leads
                            </Link> */}
                            <Link
                                onClick={() => setclick(false)}
                                to={"/register"}
                                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                            >
                                Register
                            </Link>
                            <Link
                                onClick={() => setclick(false)}
                                to={"/contacts"}
                                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                            >
                                Contacts
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
