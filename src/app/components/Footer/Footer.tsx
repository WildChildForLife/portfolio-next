import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer>
            <p className="description">
                Beyond just a portfolio, this is a digital narrative. Crafted with Figma's precision, powered by the latest technologies, and inspired by a vision to redefine digital experiences.
            </p>
            <p className="copyright">
                &nbsp; &copy; 2023 Brought to you by <Link href="https://www.linkedin.com/in/youssef-el-gharbaoui-3785b2a8/" target="_blank" >Youssef El Gharbaoui</Link>
            </p>
        </footer>
    )
}

export default Footer;