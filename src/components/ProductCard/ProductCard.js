import {React} from 'react';
import {View, Image, Text} from 'react-native';
import productData from '../../product_data.json';

const ProductCard = ({product}) => {
  const {id, title, imgURL, price, inStock} = product;

  return (
    <View>
      <Image />
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default ProductCard;