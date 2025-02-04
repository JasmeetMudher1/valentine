import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="homepage-link">
                <Link href='/'> ← Go Back</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <img
                        src="/public/celebrate.gif"
                        alt="two animals holding hearts and smiling gif"
                        className="yay-img"
                    />
                    <p id="yay">💖 Yipee! 💖</p>
                </section>
            </div>
        </div>
    )
}