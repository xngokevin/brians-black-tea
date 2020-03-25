import breakpoints from "../../../config/breakpoints";
import colors from "../../../config/colors";
export default {
    headerContainer: {
        position: 'fixed',
        maxWidth: 1140,
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomStyle: 'solid',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        zIndex: 5,
        backgroundColor: colors.white,
        paddingBottom: 5
    },
    logoContainer: {
        position: 'relative',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    hamburgerIcon: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: 'translateY(-50%)',
        [`${breakpoints.smBreak}`]: {
            display: 'none'
        }
    },
    logo: {
        marginTop: 10,
    },
    navContainer: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        '& ul': {
            listStyleType: 'none',
            padding: 0,
            margin: 0,

            '& li': {
                display: 'inline',
                paddingLeft: 10,
                paddingRight: 10
            }
        },
        [`${breakpoints.xsBreak}`]: {
            display: 'none'
        }
    },
};

