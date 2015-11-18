/**
 * Created by hms-mac on 11/17/15.
 */
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    ActivityIndicatorIOS,
    Component,
    Text,
    View,
    WebView
    } = React;

class Contact extends Component{
    render() {
        return (
            <View style={styles.container}>
                <WebView url={'http://www.hsenidmobile.com/'} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = Contact;