import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const products = [
  {
    id: '1',
    title: 'Achieve Organic Ground Coffee Bag',
    description:
      'Pre-ground and ready to use in a drip coffee maker, French press, or pour-over',
    price: 20,
    image:
      'https://international.foursigmatic.com/cdn/shop/products/816897020195-Think-Ground-Coffee_Bag-2-Pack-Apr23_d4d42679-4635-4bf4-8dd1-a2dfe3cf0ed9.webp?v=1707158388',
  },
  {
    id: '2',
    title: 'Think Organic Coffee Latte Box',
    description:
      'Organic dairy-free coffee latte infused with lion’s mane and chaga mushrooms for proven focus in a convenient instant packet.',
    price: 33,
    image:
      'https://international.foursigmatic.com/cdn/shop/products/816897021499-Think-Coffee-Latte-Mix_Box-2-Pack-Apr23_6386889c-8fd0-4c74-aca5-22e15089fe49.webp?v=1684951747',
  },
  {
    id: '3',
    title: 'Balance Half Caf Organic Ground Coffee Bag',
    description:
      'Lower caffeine, less stress in a half caf* brew. Organic coffee infused with adaptogens to help you find calm, and balance body and mind.',
    price: 15,
    image:
      'https://international.foursigmatic.com/cdn/shop/products/816897021802_Balance-Ground-Coffee_Bag-2-Pack-Apr23_3fa9e6b9-66e0-4ec0-b1d0-98d2ad9838aa.webp?v=1684950255',
  },
  {
    id: '4',
    title: 'Shield Organic Instant Coffee Box',
    description:
      'Protect your immunity year-round with chaga and cordyceps loaded organic instant coffee. Support your mind and body to feel your best.',
    price: 36,
    image:
      'https://international.foursigmatic.com/cdn/shop/products/4897039310721-Protect-Instant-Coffee_Box-3-Pack-Apr23_d91fd252-1603-4538-8630-057007a571a0.webp?v=1707158601',
  },
  {
    id: '5',
    title: 'Think Organic Creamer- Cacao Coconut',
    description:
      'Reach for a thoughtful creamer. Smooth, creamy, chocolatey coconut-based organic creamer with lion’s mane and L-Theanine for focus in a cup.',
    price: 48,
    image:
      'https://international.foursigmatic.com/cdn/shop/products/816897023707_Think_Cacao_Coconut_Creamer_Bag_4_Pack_20_Off_070823.png?v=1707416938',
  },
];

export default function ProductsScreen({navigation}: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(product => {
          return (
            <CardView
              imageSource={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  productTitle: product.title,
                  productDescription: product.description,
                  productPrice: product.price,
                  productImage: product.image,
                });
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

interface CardViewProps {
  imageSource: string;
  title: string;
  description: string;
  price: number;
  onPress: (event: GestureResponderEvent) => void;
}

const CardView = ({
  imageSource,
  title,
  description,
  price,
  onPress,
}: CardViewProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{uri: imageSource}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text style={styles.price}>Price: {price} $</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
  price: {
    fontSize: 11,
    lineHeight: 24,
  },
  addToCartButton: {
    fontSize: 12,
    borderRadius: 8,
    backgroundColor: '#6F4E37',
    marginTop: 16,
    paddingStart: 4,
    paddingEnd: 4,
    width: 92,
  },
  addToCartText: {
    fontSize: 12,
    marginVertical: 6,
    color: Colors.white,
    textAlign: 'center',
  },
});
