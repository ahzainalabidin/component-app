import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {

    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500': primary,
        'border-gray-900 bg-gray-900': secondary,
        'border-green-500 bg-green-500': success,
        'border-yellow-400 bg-yellow-400': warning,
        'border-red-500 bg-red-500': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-white': !outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
    });

    return <button className={classes}>{children}</button>;

}

Button.propTypes = {

    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {

        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, and danger can be true');
        }

    },

};

export default Button;
