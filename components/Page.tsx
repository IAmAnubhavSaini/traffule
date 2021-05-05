import Header from "./Header";

export default function Page(props: any) {
    return (
        <div className="site">
            <Header></Header>
            <section>
                {props.children}
            </section>
        </div>
    );
}