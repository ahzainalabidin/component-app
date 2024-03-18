import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {

    const { navigate, currentPath } = useNavigation();

    const hyperlinkClass = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {

        if (event.ctrlKey || event.metaKey) {
            return;
        }

        event.preventDefault();
        navigate(to);

    };

    return <a className={hyperlinkClass} href={to} onClick={handleClick}>{children}</a>

}

export default Link;
