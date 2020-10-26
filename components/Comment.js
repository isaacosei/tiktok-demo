import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Comment(props) {
    return (
        <View style={styles.commentContainer}>
            <Text>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    commentContainer: {
        padding: 5
    }
})