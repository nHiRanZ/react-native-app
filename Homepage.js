const React = require('react-native');
const SideMenu = require('react-native-side-menu');
const SideMenubar = require('./SideMenubar');
const ProductMenu = require('./ProductMenu');

const {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Component
    } = React;

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: 'green',
        borderRadius: 20,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '00ea75',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});

class Button extends Component {
    handlePress(e) {
        this.context.menuActions.toggle();
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

Button.contextTypes = {
    menuActions: React.PropTypes.object.isRequired
};

class Homepage extends Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            touchToClose: false,
        };
    }

    handleChange(isOpen) {
        if (!isOpen) {
            this.setState({
                touchToClose: false,
            });
        }
    }

    onProfilePressed() {
        this.props.navigator.push({
            title: "Products",
            component: ProductMenu
        });
    }

    render() {
        return (
            <SideMenu
                touchToClose={this.state.touchToClose}
                onChange={this.handleChange.bind(this)}
                menu = {<SideMenubar navigator={this.props.navigator}/>}
            >
                <View style={styles.container}>
                    <Button style={styles.button}>
                        Toggle Slider
                    </Button>
                    <Text style={styles.welcome}>
                        Slide Right! >
                    </Text>
                    <TouchableHighlight onPress={(this.onProfilePressed.bind(this))}>
                        <Text style={styles.item}>Products</Text>
                    </TouchableHighlight>
                </View>

            </SideMenu>
        );
    }
}

module.exports = Homepage;
