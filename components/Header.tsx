import Link from 'next/link';

function Header() {
    return (
        <header className="site-header">
            <nav className="navigation">
                <ol className="hz">
                    <li className="logo"><Link href="/">traffule</Link></li>
                    <li><Link href="/signs">signs</Link></li>
                    <li><Link href="/markings">markings</Link></li>
                </ol>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="search..." className="search-input"/>
            </div>
        </header>
    );
}

export default Header;