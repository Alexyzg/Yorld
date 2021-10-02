import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';

// Third party imports - icon
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import ZocialIcons from 'react-native-vector-icons/Zocial';
import { capitalize } from '../utils';

const iconSets = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons,
};

//type text in item category
export enum TypeText {
  UPPER = 'UPPER',
  LOWER = 'LOWER',
  CAPITALIZE = 'CAPITALIZE',
}

export type ItemCategory = {
  id: number | string;
  color?: string;
  title?: string;
  isSelected?: boolean;
};

export type TextType = 'UPPER' | 'LOWER' | 'CAPITALIZE';

export type CategoryProps = {
  data: ItemCategory[];
  itemText: string;
  imageData?: any[];
  colorTextDefault: string;
  colorTextSelected: string;
  colorItemDefault: string;
  colorItemSelected: string;
  colorIconDefault?: string;
  colorIconSelected?: string;
  bounces?: boolean;
  indexSelected?: number;
  iconSet?: string;
  iconSize?: number;
  style?: ViewStyle;
  itemStyles?: ViewStyle;
  textType?: TextType;
  itemSelected?: (id: string) => void;
};

const defaultData = {
  data: [],
  itemText: '',
  imageData: [],
  colorTextDefault: '#f5f3f4',
  colorTextSelected: '#000000',
  colorItemDefault: 'rgba(255,255,255,0.2)',
  colorItemSelected: '#FF4E50',
  colorIconDefault: '#900',
  colorIconSelected: '#FFF',
  bounces: false,
  indexSelected: 0,
  iconSet: 'FontAwesome',
  iconSize: 30,
};

export const Category: React.FC<CategoryProps> = React.memo(
  (props = defaultData) => {
    const {
      data,
      itemText,
      imageData,
      colorTextDefault,
      colorTextSelected,
      colorItemDefault,
      colorItemSelected,
      colorIconDefault,
      colorIconSelected,
      bounces,
      indexSelected,
      iconSet,
      iconSize,
      style,
      itemStyles,
      textType,
      itemSelected,
    } = props;
    const [categoriesData, setCategoriesData] = useState<ItemCategory[]>([]);

    useEffect(() => {
      const adaptedData =
        !imageData || imageData.length === 0
          ? data.reduce(
              (acc, item, index) => [
                ...acc,
                { ...item, isSelected: index === indexSelected },
              ],
              [] as ItemCategory[],
            )
          : imageData.reduce(
              (acc, item, index) => [
                ...acc,
                {
                  index,
                  name: imageData[index],
                  isSelected: index === indexSelected,
                },
              ],
              [],
            );
      setCategoriesData(adaptedData);
    }, [setCategoriesData, data, imageData, indexSelected]);

    const handleItemCategoryClick = useCallback(
      (item, index) => {
        setCategoriesData(
          categoriesData.map((category, categoryIndex) => ({
            ...category,
            isSelected: categoryIndex === index,
          })),
        );

        if (typeof itemSelected === 'function') {
          itemSelected(item.id);
        }
      },
      [categoriesData, itemSelected],
    );

    const renderTextCategory = useCallback(
      text => {
        text = text.toString();
        switch (textType) {
          case TypeText.UPPER:
            return text.toUpperCase();
          case TypeText.LOWER:
            return text.toLowerCase();
          case TypeText.CAPITALIZE:
            return capitalize(text);
          default:
            return text;
        }
      },
      [textType],
    );

    const renderItemCategory = useCallback(
      ({ item, index }) => {
        const { isSelected } = item;
        const textColor = isSelected ? colorTextSelected : colorTextDefault;
        const itemColor = isSelected
          ? colorItemSelected
          : item.color || colorItemDefault;
        const iconColor = isSelected ? colorIconSelected : colorIconDefault;
        let Icon;
        if (imageData && imageData.length !== 0) {
          // @ts-ignore
          Icon = iconSets[iconSet];
        }
        return (
          <TouchableOpacity
            style={[
              styles.itemStyles,
              itemStyles,
              { backgroundColor: itemColor },
            ]}
            onPress={() => handleItemCategoryClick(item, index)}
          >
            {Icon && (
              <Icon name={item.name} size={iconSize} color={iconColor} />
            )}
            {!Icon && (
              <Text style={[styles.textItemStyles, { color: textColor }]}>
                {renderTextCategory(item[itemText])}
              </Text>
            )}
          </TouchableOpacity>
        );
      },
      [
        colorTextSelected,
        colorTextDefault,
        colorItemSelected,
        colorItemDefault,
        colorIconSelected,
        colorIconDefault,
        imageData,
        itemStyles,
        iconSize,
        renderTextCategory,
        itemText,
        iconSet,
        handleItemCategoryClick,
      ],
    );

    return (
      <FlatList
        style={[styles.categoryStyles, style]}
        contentContainerStyle={styles.flatListStyles}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={bounces}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItemCategory}
        data={categoriesData}
      />
    );
  },
);

const styles = StyleSheet.create({
  categoryStyles: {
    backgroundColor: '#000',
  },
  flatListStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingRight: 0,
  },
  itemStyles: {
    padding: 8,
    marginRight: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItemStyles: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
