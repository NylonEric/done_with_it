import { View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import colors from '../../config/colors';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Chevron from '../Chevron';

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.light}
        >
        <View style={[styles.listContainer]}>
          {IconComponent}
          {image && <Image source={image} style={styles.listImage}/>}
          <View style={[styles.detailsContainer]}>
            <AppText style={styles.userTitle} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.userSubTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <View style={styles.chevronContainer}>
            {showChevrons && <Chevron direction="right" />}
          </View>
        </View>
      </TouchableHighlight>    
    </Swipeable>
  )
}