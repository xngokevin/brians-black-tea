import colors from "../../../config/colors";
export default {
    sideDrawerContainer: {
        alignItems: 'center',
        color: "#000",
        flexDirection: 'column',
        width: '70%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: colors.white,
        zIndex: 100,
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease-out'
    },
    open: {
        transform: 'translateX(0)'
    },
    logo: {

    },
    navContainer: {
        marginTop: 30,
        '& ul': {
            listStyleType: 'none',
            padding: 0,
            margin: 0,

            '& li': {
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
            },
            '& a': {
                color: colors.black
            }
        }
    }
};

