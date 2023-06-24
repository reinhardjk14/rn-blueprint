import Images from '_atom/Images';
import {Text} from '_atom/index';
import {listPhotos} from '_constant/dummy';
import useTheme from '_hooks/useTheme';
import {HeaderSearch} from '_molecule/Header';
import {Container, Content} from '_organism/Basic';
import {width} from '_theme/Layout';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {RootState} from 'src/redux';
import {HomeScreenProps} from 'src/utils/types';
import ExplorerList from './ExplorerList';
import CardUserPhoto from './CardUserPhoto';

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

  useEffect(() => {
    // temporary data - remove when implement API
    setPhotos(listPhotos);
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
        ListHeaderComponent={<ExplorerList />}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={Gutters.largeLPadding}
      />
    </Container>
  );
};

const mapStateToProps = ({}: RootState) => ({});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(HomeScreen);
