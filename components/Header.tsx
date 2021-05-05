import Link from 'next/link';

function Header() {
    return (
        <header className={"naviagtion"}>
            <ol className={"hz"}>
                <li className={"brand"}><Link href={"/"}>traffule</Link></li>

            </ol>
        </header>
    );
}

export default Header;