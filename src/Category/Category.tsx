import React, {  Component } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

// Third party imports - icon
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import ZocialIcons from 'react-native-vector-icons/Zocial';

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
export const typeText = {
  upper: 'UPPER',
  lower: 'LOWER',
  capitalize: 'CAPITALIZE',
};

class Category extends Component {
  static defaultProps = {
    data: [], //data category default
    itemText: '',
    imageData: [], //imageData category default
    colorTextDefault: '#f5f3f4',
    colorTextSelected: '#000000',
    colorItemDefault: 'rgba(255,255,255,0.2)',
    colorItemSelected: '#FF4E50',
    colorIconDefault: '#900', //Color icon selected
    colorIconSelected: '#FFF', //Color icon selected
    bounces: false,
    indexSelected: 0, //Item selected default 0
    iconSet: 'FontAwesome', //Type icon default
    iconSize: 30,
  };

  constructor(props) {
    super(props);
    let arrCategory = [];

    try {
      if (this.props.imageData.length === 0) {
        this.props.data.map((item, index) => {
          let newObject;
          index === this.props.indexSelected
            ? (newObject = Object.assign({ isSelected: true }, item))
            : (newObject = Object.assign({ isSelected: false }, item));
          arrCategory.push(newObject);
        });
      } else {
        this.props.imageData.map((item, index) => {
          let newObject;
          const nameImage = this.props.imageData[index];
          index === this.props.indexSelected
            ? (newObject = Object.assign({
                index,
                name: nameImage,
                isSelected: true,
              }))
            : (newObject = Object.assign({
                index,
                name: nameImage,
                isSelected: false,
              }));
          arrCategory.push(newObject);
        });
      }

      this.state = {
        data: arrCategory,
        indexSelected: this.props.indexSelected,
      };
    } catch (error) {
      console.error('Data not set - Please set data for Category component');
    }
  }

  componentDidMount() {
    let category = this.state.data[this.state.indexSelected];
    let onPress = this.props.itemSelected;
    typeof onPress === 'function' && onPress(category);
  }

  //action when click item
  handleItemCategoryClick(category, rowID) {
    category.isSelected = !category.isSelected;
    const dataClone = this.state.data;

    const unSelected = dataClone[this.state.indexSelected];
    unSelected.isSelected = !unSelected.isSelected;

    dataClone[this.state.indexSelected] = unSelected;
    dataClone[rowID] = category;

    this.setState({
      data: dataClone,
      indexSelected: rowID,
    });

    //call back item selected
    let onPress = this.props.itemSelected;
    typeof onPress === 'function' && onPress(category);
  }

  renderTextCategory(text) {
    const type = typeText[this.props.textType];
    text = text.toString();
    switch (type) {
      case 'UPPER':
        return text.toUpperCase();
        break;
      case 'LOWER':
        return text.toLowerCase();
        break;
      case 'CAPITALIZE':
        return text.charAt(0).toUpperCase() + text.slice(1);
      default:
        return text;
    }
  }

  //render Item
  renderItemCategory({ item, index }) {
    const colorTextSelected = item.isSelected
      ? this.props.colorTextSelected
      : this.props.colorTextDefault;
    const colorItemSelected = item.isSelected
      ? this.props.colorItemSelected
      : item.color || this.props.colorItemDefault;
    const colorIconSelected = item.isSelected
      ? this.props.colorIconSelected
      : this.props.colorIconDefault;

    if (this.props.imageData.length !== 0) {
      Icon = iconSets[this.props.iconSet];
    }

    return (
      <TouchableOpacity
        style={[
          styles.itemStyles,
          this.props.itemStyles,
          { backgroundColor: colorItemSelected },
        ]}
        onPress={this.handleItemCategoryClick.bind(this, item, index)}
      >
        {this.props.imageData.length != 0 && (
          <Icon
            name={item.name}
            size={this.props.iconSize}
            color={colorIconSelected}
          />
        )}
        {this.props.imageData.length == 0 && (
          <Text style={[styles.textItemStyles, { color: colorTextSelected }]}>
            {this.renderTextCategory(item[this.props.itemText])}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        style={[styles.categoryStyles, this.props.style]}
        contentContainerStyle={styles.flatListStyles}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={this.props.bounces}
        keyExtractor={(item, index) => index}
        renderItem={this.renderItemCategory.bind(this)}
        data={this.state.data}
      />
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  categoryStyles: {
    backgroundColor: '#000',
  },

  flatListStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingRight: 0
  },

  itemStyles: {
    padding: 8,
    marginRight: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textItemStyles: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
