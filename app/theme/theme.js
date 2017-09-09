const React = require('react-native');
const {StyleSheet} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    btn: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 3,
        width: 150,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'GillSans-Light'
    },
    textInput: {
        height: 50,
        textAlign: 'center',
        fontFamily: 'GillSans-Light'
    },
    line: {
        borderColor: '#dbdbdb',
        borderWidth: .5,
        height: 1,
        alignSelf: 'stretch',
    },
    logo:{
        textAlign: 'center',
        fontSize: 26,
        // fontFamily: "GillSans",
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        marginTop: 10,
    },
});

module.exports = styles;