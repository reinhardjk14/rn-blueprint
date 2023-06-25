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
import {ParamPhotosType, getListPhotos, getListTopics} from '_actions/photos';

type Props = ReduxProps & HomeScreenProps;
const dummyUserImg =
  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg';

const FooterComponent = ({isVisible}: {isVisible: boolean}) => {
  const {Layout, Colors} = useTheme();

  if (isVisible) {
    return (
      <View style={Layout.center}>
        <ActivityIndicator color={Colors.Primary} />
      </View>
    );
  }
  return null;
};
const defaultParam: ParamPhotosType = {
  page: 1,
};

const HomeScreen = (props: Props) => {
  const {Gutters, Colors, Common, Layout} = useTheme();
  const {_getPhotos, _getTopics} = props;

  const keyExtractor = React.useCallback(
    (item: any, index: number) => index?.toString(),
    [],
  );

  const [photos, setPhotos] = useState<ItemPhotoDTO[]>([]);
  const [topics, setTopics] = useState<ItemTopicDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadmore, setIsLoadmore] = useState<boolean>(false);
  const [shouldLoadmore, setShouldLoadmore] = useState<boolean>(true);
  const [listParams, setListParams] = useState<ParamPhotosType>(defaultParam);

  const renderItem = React.useCallback(
    ({item, index}: {item: ItemPhotoDTO; index: number}) => {
      return <CardUserPhoto key={index.toString()} data={item} />;
    },
    [],
  );

  const fetchData = React.useCallback(
    async (param?: ParamPhotosType): Promise<ItemPhotoDTO[]> => {
      try {
        const data = await _getPhotos(param);
        return data;
      } catch (error) {
        setLoading(false);
        return [];
      }
    },
    [],
  );

  useEffect(() => {
    setLoading(true);

    // temporary data - remove when implement API
    setPhotos(listPhotos);
    setTopics(listTopics);
    setLoading(false);

    // onRefresh();
  }, []);

  const onRefresh = React.useCallback(async () => {
    setListParams(defaultParam);
    Promise.all([
      fetchData(defaultParam).then(photoRes => {
        setPhotos(photoRes);
      }),
      _getTopics().then(topicRes => {
        setTopics(topicRes);
      }),
    ]).finally(() => {
      setLoading(false);
    });
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
      ) : (
        <FlatList
          data={photos}
          ListHeaderComponent={<ExplorerList data={topics} />}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={[Gutters.largeLPadding]}
          contentContainerStyle={{paddingBottom: width * 0.3}}
          refreshing={loading}
          onRefresh={onRefresh}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReachedGetData}
          ListFooterComponent={<FooterComponent isVisible={isLoadmore} />}
        />
      )}
    </Container>
  );

  function onEndReachedGetData() {
    const newPage = listParams.page + 1;
    if (shouldLoadmore) {
      setIsLoadmore(true);
      const newParam: ParamPhotosType = {
        ...listParams,
        page: newPage,
      };
      setListParams(newParam);
      onLoadMoreList(newParam);
    } else {
      setIsLoadmore(false);
    }
  }

  async function onLoadMoreList(param?: ParamPhotosType) {
    try {
      const newDataRes = await fetchData(param);
      if (newDataRes.length) {
        // check value existed to avoid duplicate
        const dataExisted = photos.find(i => {
          for (const el of newDataRes) {
            if (i.id === el.id) {
              return i;
            }
          }
        });
        if (!dataExisted) {
          setPhotos([...photos, ...newDataRes]);
        }
        setShouldLoadmore(true);
      } else {
        setShouldLoadmore(false);
      }
      setIsLoadmore(false);
    } catch (error) {
      setIsLoadmore(false);
    }
  }
};

const mapStateToProps = ({}: RootState) => ({});
const mapDispatchToProps = {
  _getPhotos: getListPhotos,
  _getTopics: getListTopics,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(HomeScreen);
