import Text from '_atom/Text';
import useTheme from '_hooks/useTheme';
import {width} from '_theme/Layout';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {ItemTopicDTO} from 'src/Interfaces/topics';
import {formatNumber} from 'src/utils/helpers';
import {ExplorerListProps} from './index';

const RenderItem = ({item}: {item: ItemTopicDTO}) => {
  const {Gutters, Colors, Common} = useTheme();

  return (
    <TouchableOpacity style={Gutters.smallRMargin}>
      <ImageBackground
        source={{
          uri: item.cover_photo.urls?.full,
        }}
        style={Common.exploreItemWrapper}
        imageStyle={{
          borderRadius: width * 0.03,
        }}>
        <View style={[Gutters.smallPadding, Common.topicItemBadge]}>
          <Text
            text={`${formatNumber(item?.total_photos)} image`}
            color={Colors.White}
            size="sm"
          />
        </View>
      </ImageBackground>
      <Text text={item?.title} size="base" style={Gutters.smallTMargin} />
    </TouchableOpacity>
  );
};

const ExplorerList = ({data}: ExplorerListProps) => {
  const {Gutters} = useTheme();
  if (!data.length) return null;

  return (
    <View style={Gutters.largeBMargin}>
      <Text
        text="Explore"
        size="xl3"
        variant="semibold"
        style={Gutters.largeBMargin}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item: ItemTopicDTO, index: number) => {
          return (
            <RenderItem key={`item_explore_${index.toString()}`} item={item} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ExplorerList;
