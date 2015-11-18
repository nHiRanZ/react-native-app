'use strict';
const React = require('react-native');
const Dimensions = require('Dimensions');
const Profile = require('./ProductMenu');
const Contact = require('./Contact');

const {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    Component,
    TouchableHighlight,
    } = React;

const window = Dimensions.get('window');
const uri = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '3f9b20',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        color: '#ffffff',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '300',
        paddingTop: 5,
    },
});

class SideMenubar extends Component {
    render() {
        return (
            <ScrollView style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri, }}/>
                    <Text style={styles.name}>User</Text>
                </View>

                <TouchableHighlight onPress={(this.onProfilePressed.bind(this))}>
                    <Text style={styles.item}>Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={(this.onContactPressed.bind(this))}>
                    <Text style={styles.item}>Contact Us</Text>
                </TouchableHighlight>

            </ScrollView>
        );
    }

    onProfilePressed() {
        this.props.navigator.push({
            title: "Profile",
            component: Profile
        });
    }

    onContactPressed() {
        this.props.navigator.push({
            title: "Contact Us",
            component: Contact
        });
    }
}

module.exports = SideMenubar;