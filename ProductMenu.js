/**
 * Created by hms-mac on 11/17/15.
 */
'use strict';

var React = require('react-native');
const Dimensions = require('Dimensions');
var {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AlertIOS,
    } = React;

var REQUEST_URL = '/Users/hms-mac/research/react-native/apptizer-mock/apptizer/data.json';

var Profile = React.createClass({

    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    componentDidMount: function () {
        this.fetchData();
    },
    fetchData: function () {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.fooditems),
                    loaded: true,
                });
            })
            .done();
    },
    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                style={styles.listView}
                automaticallyAdjustContentInsets={false}
            />
        );
    },

    renderLoadingView: function () {
        return (
            <View style={styles.container}>
                <Text>
                    Loading fooditems...
                </Text>
            </View>
        );
    },

    onAddToCartPressed: function(){
        AlertIOS.alert(
            'Item added to Cart!',
            null,
            [
                {text: 'Okay', onPress: () => console.log('Okay Pressed!')},
            ]
        )
    },

    onSharePressed: function(){
        AlertIOS.alert(
            'Share',
            'Do you want to Share this Item?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                {text: 'Share', onPress: () => console.log('Share Pressed!')},
            ]
        )
    },

    renderItem: function (item) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: item.images.main}}
                    style={styles.image}
                />

                <View style={styles.rightContainer}>
                    <Text>{item.name}</Text>
                    <Text style={styles.text}>Rs.{item.price}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight underlayColor="#36ea00" style={styles.button}onPress={this.onSharePressed}>
                        <Text style={styles.buttonText}>Share</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#36ea00" style={styles.button}onPress={this.onAddToCartPressed}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 100 * 95,
        marginBottom: 10,
        borderColor: '#cecece',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: '#F5FCFF',
        shadowColor: 'grey',
        shadowOpacity: 40,
        shadowOffset: {width: 0, height: 2}

    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        alignItems: 'stretch',
        width: Dimensions.get('window').width / 100 * 95,
        height: 100,
    },
    text: {
        paddingLeft: 10,
    },
    listView: {
        paddingHorizontal: Dimensions.get('window').width / 100 * 2.5,
        paddingTop: 70,
        paddingBottom: 20,
        //backgroundColor: '#c4ff9b', //Background Color behind the Cards
    },
    buttonText: {
        fontSize: 10,
        color: '#36ea00',
        paddingTop: 2,
        paddingBottom: 2,
    },
    button: {
        width: 100,
        height: 20,
        borderColor: '#36ea00',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    }
});

module.exports = Profile;