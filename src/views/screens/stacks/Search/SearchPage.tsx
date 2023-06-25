import MasonryList from '@react-native-seoul/masonry-list';
import {SearchPhotosType, searchPhotos} from '_actions/search';
import Icon from '_atom/Icon';
import useDebounce from '_hooks/useDebounce';
import useTheme from '_hooks/useTheme';
import {HeaderWrapper} from '_molecule/Header';
import {Container} from '_organism/Basic';
import EmptyResult from '_organism/Layout/EmptyResult';
import FooterComponent from '_organism/Layout/FooterComponent';
import React, {createRef, useEffect, useState} from 'react';
import {InteractionManager, TextInput, View} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {RootState} from 'src/redux';
import {SearchPageProps} from 'src/utils/types';
import CardItemPhoto from './CardItemPhoto';
import {defaultParam} from './index';

type Props = ReduxProps &
  SearchPageProps & {route: {params: {searchKeyword?: string}}};

const SearchPage = (props: Props) => {
  const {route, _searchPhotos} = props;
  const searchInputRef = createRef<TextInput>();
  const {Colors, Common, Images, Layout, Gutters} = useTheme();
  const styles = Common.input;
  const keyExtractor = React.useCallback(
    (item: any, index: number) => index?.toString(),
    [],
  );

  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ItemPhotoDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadmore, setIsLoadmore] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>();
  const [listParams, setListParams] = useState<SearchPhotosType>(defaultParam);
  const keywords = useDebounce(searchText, 500);

  const renderItem = React.useCallback(
    ({item, i}: {item: ItemPhotoDTO; i: number}) => {
      return <CardItemPhoto key={i.toString()} data={item} />;
    },
    [],
  );

  const searchData = React.useCallback(
    async (param?: SearchPhotosType): Promise<ItemPhotoDTO[]> => {
      try {
        const data = await _searchPhotos(param);
        setTotalPages(data.total_pages);
        return data.results;
      } catch (error) {
        setLoading(false);
        return [];
      }
    },
    [],
  );

  const handleSearch = React.useCallback(async (val: string) => {
    const res = await searchData({
      query: encodeURIComponent(val),
      page: 1,
    });
    setSearchResult(res);
  }, []);

  useEffect(() => {
    InteractionManager.runAfterInteractions(async () => {
      const searchVal = route?.params?.searchKeyword;
      if (searchVal) {
        setListParams({...defaultParam, query: encodeURIComponent(searchVal)});
        setSearchText(searchVal);
        const res = await searchData({
          query: encodeURIComponent(searchVal),
          page: 1,
        });
        setSearchResult(res);
      }
    });
  }, [route?.params?.searchKeyword]);

  useEffect(() => {
    if (keywords) {
      if (keywords.length > 2) {
        handleSearch(keywords);
      } else {
        setSearchResult([]);
      }
    }
  }, [keywords]);

  return (
    <Container style={Common.backgroundLayout}>
      <View style={Common.header.headerSearch}>
        <View style={styles.searchWrapper}>
          <Icon name="search" size={20} color={Colors.Dark} />
          <TextInput
            ref={searchInputRef}
            value={searchText}
            style={[styles.input, Gutters.smallLPadding]}
            placeholder="Search"
            onChangeText={setSearchText}
          />
        </View>
      </View>
      <MasonryList
        data={searchResult}
        keyExtractor={keyExtractor}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={[Gutters.smallPadding, Common.backgroundLayout]}
        contentContainerStyle={Common.backgroundLayout}
        // refreshing={isLoadingNext}
        // onRefresh={() => refetch({first: ITEM_CNT})}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReachedGetData}
        ListFooterComponent={<FooterComponent isVisible={isLoadmore} />}
        ListEmptyComponent={<EmptyResult />}
        containerStyle={Common.backgroundLayout}
      />
    </Container>
  );

  function onEndReachedGetData() {
    const newPage = listParams.page + 1;
    if (newPage < totalPages) {
      setIsLoadmore(true);
      const newParam: SearchPhotosType = {
        ...listParams,
        page: newPage,
      };
      setListParams(newParam);
      onLoadMoreList(newParam);
    } else {
      setIsLoadmore(false);
    }
  }

  async function onLoadMoreList(param?: SearchPhotosType) {
    try {
      const newDataRes = await searchData(param);
      if (newDataRes.length) {
        // check value existed to avoid duplicate
        const dataExisted = searchResult.find(i => {
          for (const el of newDataRes) {
            if (i.id === el.id) {
              return i;
            }
          }
        });
        if (!dataExisted) {
          setSearchResult([...searchResult, ...newDataRes]);
        }
      }
      setIsLoadmore(false);
    } catch (error) {
      setIsLoadmore(false);
    }
  }
};

const mapStateToProps = ({}: RootState) => ({});
const mapDispatchToProps = {
  _searchPhotos: searchPhotos,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(SearchPage);
