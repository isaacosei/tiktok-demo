import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function VideoPlayer(props) {
	return (
		<View style={styles.videoContainer}>
			<Video
				source={{ uri: props.src }}
				rate={1.0}
				volume={props.currentIndex === props.currentVisibleIndex ? 1.0 : 0.0}
				isMuted={false}
				status={true}
				usePoster={true}
				resizeMode="cover"
				shouldPlay={props.currentIndex === props.currentVisibleIndex}
				isLooping={false}
				style={{ width: windowWidth, height: windowHeight }}
			/>

			<View style={styles.comment}>
				<Icon name="comment" size={30} color="#fff" onPress={props.showComments} />
				<TouchableHighlight onPress={props.showComments}>
					<Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold' }}>Comments</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	videoContainer: {
		backgroundColor: '#fff',
		width: windowWidth
	},
	comment: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		marginBottom: 30,
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
