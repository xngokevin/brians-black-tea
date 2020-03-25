import breakpoints from "../../../config/breakpoints";
import colors from "../../../config/colors";

export default {
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        borderTopColor: colors.lightGrey,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderBottomColor: colors.lightGrey,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        textAlign: 'center',
        '& ul': {
            listStyleType: 'none',
            padding: 0,
            margin: 0,

            '& li': {
                display: 'inline',
                paddingLeft: 10,
                paddingRight: 10
            },
            '& a': {
              color: colors.black
            }
        },
        [`${breakpoints.xsBreak}`]: {
            display: 'none'
        }
    },
}
