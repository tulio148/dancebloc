import { Link } from "@inertiajs/react";
import {
    faInstagram,
    faTiktok,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <div className="w-full mt-36 border-t border-slate-300">
                <div className="max-w-7xl  mx-auto flex flex-col justify-center items-center mt-16">
                    <div className="w-full flex justify-around gap-3">
                        <Link>
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                size="3x"
                                style={{ color: "#FF00F7" }}
                            />
                        </Link>
                        <Link>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="3x"
                                style={{ color: "#FF00F7" }}
                            />
                        </Link>
                        <Link>
                            <FontAwesomeIcon
                                icon={faTiktok}
                                size="3x"
                                style={{ color: "#FF00F7" }}
                            />
                        </Link>
                    </div>
                    <img
                        className=" w-48 mt-28"
                        src="/faviconpng-removebg-preview.png"
                        alt=""
                    />
                    <p className="mt-4 tracking-widest">
                        &copy; 2023 Dance Bloc Brazil
                    </p>
                </div>
            </div>
        </footer>
    );
}
