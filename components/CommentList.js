import React, { useState } from 'react';
import { Text, View, Modal, TextInput, Button, StyleSheet } from 'react-native';
import Comment from './Comment';
import comments from '../data/comments.json';

export default function CommentList({ visible, closeComments }) {
	const [ data, setData ] = useState([]);
	const [ content, setContent ] = useState('');

	React.useEffect(() => {
		if (visible) setData(comments.data);
	}, []);

	const postComment = () => {
        const commentList = [...data];
        commentList.push({
            id: data.length,
            content
        })
        setData(commentList);
        setContent('');
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.container}>
				{data.map((c) => <Comment key={c.id} content={c.content} />)}
				<TextInput placeholder="Post a comment" value={content} onChangeText={(text) => setContent(text)} />
                <Button title='Post' onPress={postComment} />
				<Button title="Close" onPress={closeComments} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
