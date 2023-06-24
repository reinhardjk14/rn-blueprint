import {listPhotos, listTopics} from '_constant/dummy';
import useTheme from '_hooks/useTheme';
import {HeaderSearch} from '_molecule/Header';
import {Container} from '_organism/Basic';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {ItemTopicDTO} from 'src/Interfaces/topics';
import {RootState} from 'src/redux';
import {HomeScreenProps} from 'src/utils/types';
import CardUserPhoto from './CardUserPhoto';
import ExplorerList from './ExplorerList';
import {width} from '_theme/Layout';
import {getListPhotos} from '_actions/photos';

type Props = ReduxProps & HomeScreenProps;
const dummyUserImg =
  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg';

const HomeScreen = (props: Props) => {
  const {Gutters, Colors, Common, Layout} = useTheme();
  const {_getPhotos} = props;

  const keyExtractor = React.useCallback(
    (item: any, index: number) => index?.toString(),
    [],
  );

  const [photos, setPhotos] = useState<ItemPhotoDTO[]>([]);
  const [topics, setTopics] = useState<ItemTopicDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const renderItem = React.useCallback(
    ({item, index}: {item: ItemPhotoDTO; index: number}) => {
      return <CardUserPhoto key={index.toString()} data={item} />;
    },
    [],
  );

  const fetchData = React.useCallback(async () => {
    try {
      const data = await _getPhotos();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log('errororor', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    // temporary data - remove when implement API
    setPhotos(listPhotos);
    setTopics(listTopics);
    setLoading(false);
    // fetchData();
  }, []);

  return (
    <Container style={Common.backgroundLayout}>
      <HeaderSearch
        leftImage={{uri: dummyUserImg}}
        onPressLeftIcon={props.navigation.openDrawer}
        leftImageStyle={Common.avatar}
        onChangeValue={val => console.log('value', val)}
        style={Common.header.headerHome}
      />
      {loading ? (
        <View style={[Layout.center, Gutters.largeVPadding]}>
          <ActivityIndicator color={Colors.Primary} />
        </View>
      ) : null}

      <FlatList
        data={photos}
        ListHeaderComponent={<ExplorerList data={topics} />}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={[Gutters.largeLPadding]}
        contentContainerStyle={{paddingBottom: width * 0.3}}
      />
    </Container>
  );
};

const mapStateToProps = ({}: RootState) => ({});
const mapDispatchToProps = {
  _getPhotos: getListPhotos,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(HomeScreen);
