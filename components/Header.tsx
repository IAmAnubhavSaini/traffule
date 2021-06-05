import Link from 'next/link';

function Header() {
    return (
        <header className="site-header">
            <nav className="navigation">
                <ol className="hz">
                    <li className="logo">traffule</li>
                    <li><Link href="/signs">signs</Link></li>
                    {/*<li><Link href="/markings">markings</Link></li>*/}
                </ol>
            </nav>
        </header>
    );
}

export default Header;