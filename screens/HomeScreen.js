import React from 'react';
import { FlatList, View } from 'react-native';
import CommentList from '../components/CommentList';
import VideoPlayer from '../components/VideoPlayer';
import videos from '../data/videos.json';

export default class HomeScreen extends React.Component {
	state = {
		showComments: false,
		currentVisibleIndex: 0,
		prevVisibleIndex: 0
	};

	onViewableItemsChanged = ({ viewableItems, changed }) => {
		if (viewableItems && viewableItems.length > 0) {
			this.setState({ currentVisibleIndex: viewableItems[0].index, prevVisibleIndex: viewableItems[0].index });
		}
	};

	showCommentsHandler = () => {
		this.setState({ showComments: true, currentVisibleIndex: videos.data.length });
	};

	closeCommentsHandler = () => {
		this.setState({ showComments: false, currentVisibleIndex: this.state.prevVisibleIndex });
	};

	renderVideo = ({ item, index }) => {
		return (
			<VideoPlayer
				src={item.src}
				currentIndex={index}
				currentVisibleIndex={this.state.currentVisibleIndex}
				showComments={this.showCommentsHandler}
			/>
		);
	};

	render() {
		return (
			<View>
				<CommentList visible={this.state.showComments} closeComments={this.closeCommentsHandler} />

				<FlatList
					data={videos.data}
					keyExtractor={(item) => item.id.toString()}
					renderItem={this.renderVideo}
					showsVerticalScrollIndicator={false}
					onViewableItemsChanged={this.onViewableItemsChanged}
					viewabilityConfig={{
						viewAreaCoveragePercentThreshold: 80
					}}
				/>
			</View>
		);
	}
}
