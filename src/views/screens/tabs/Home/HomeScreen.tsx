import {listPhotos, listTopics} from '_constant/dummy';
import useTheme from '_hooks/useTheme';
import {HeaderSearch} from '_molecule/Header';
import {Container} from '_organism/Basic';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {ItemTopicDTO} from 'src/Interfaces/topics';
import {RootState} from 'src/redux';
import {HomeScreenProps} from 'src/utils/types';
import CardUserPhoto from './CardUserPhoto';
import ExplorerList from './ExplorerList';
import {width} from '_theme/Layout';

type Props = ReduxProps & HomeScreenProps;
const dummyUserImg =
  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg';

const HomeScreen = (props: Props) => {
  const {Gutters, Common} = useTheme();
  const keyExtractor = React.useCallback(
    (item: any, index: number) => index?.toString(),
    [],
  );

  const [photos, setPhotos] = useState<ItemPhotoDTO[]>([]);
  const [topics, setTopics] = useState<ItemTopicDTO[]>([]);

  useEffect(() => {
    // temporary data - remove when implement API
    setPhotos(listPhotos);
    setTopics(listTopics);
  }, []);

  const renderItem = React.useCallback(
    ({item, index}: {item: ItemPhotoDTO; index: number}) => {
      return <CardUserPhoto key={index.toString()} data={item} />;
    },
    [],
  );

  return (
    <Container style={Common.backgroundLayout}>
      <HeaderSearch
        leftImage={{uri: dummyUserImg}}
        onPressLeftIcon={props.navigation.openDrawer}
        leftImageStyle={Common.avatar}
        onChangeValue={val => console.log('value', val)}
        style={Common.header.headerHome}
      />
      <FlatList
        data={photos}
        ListHeaderComponent={<ExplorerList data={topics} />}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={Gutters.largePadding}
        contentContainerStyle={{paddingBottom: width * 0.3}}
      />
    </Container>
  );
};

const mapStateToProps = ({}: RootState) => ({});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(HomeScreen);
