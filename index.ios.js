"use strict";

var React = require("react-native");

var {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    } = React;

var Homepage = require("./Homepage");

var apptizer = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "Home",
                component: Homepage,
            }} />
        );
    }
});

var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent("apptizer", () => apptizer);