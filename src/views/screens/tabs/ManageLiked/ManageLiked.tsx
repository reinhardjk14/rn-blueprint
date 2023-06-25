import useTheme from '_hooks/useTheme';
import {Container} from '_organism/Basic';
import EmptyResult from '_organism/Layout/EmptyResult';
import {width} from '_theme/Layout';
import React from 'react';
import {FlatList} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {RootState} from 'src/redux';
import CardUserPhoto from '../Home/CardUserPhoto';
import {HeaderTitle} from '_molecule/Header';

const ManageLiked = (props: ReduxProps) => {
  const {myLikedPhoto} = props;
  const keyExtractor = React.useCallback(
    (item: any, index: number) => index?.toString(),
    [],
  );
  const {Images, Layout, Common, Gutters} = useTheme();

  const renderItem = React.useCallback(
    ({item, index}: {item: ItemPhotoDTO; index: number}) => {
      return <CardUserPhoto key={index.toString()} data={item} />;
    },
    [],
  );

  return (
    <Container style={Common.backgroundLayout}>
      <HeaderTitle showLeftIcon={false} title="My Favorites" />
      <FlatList
        data={myLikedPhoto}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={[Gutters.largeLPadding]}
        contentContainerStyle={{paddingBottom: width * 0.3}}
        ListEmptyComponent={
          <EmptyResult
            title="Still Empty"
            description={`You haven't liked any photos yet. Start browsing photos and save your favorite`}
          />
        }
      />
    </Container>
  );
};

const mapStateToProps = ({photos}: RootState) => ({
  myLikedPhoto: photos.myLikedPhotos,
});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ManageLiked);
