import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function ProductDetails({route}: any) {
  const {productTitle, productDescription, productPrice, productImage} =
    route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: productImage,
          }}
          style={styles.productImage}
        />

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{JSON.stringify(productTitle)}</Text>
          <Text style={styles.cardDescription}>
            {JSON.stringify(productDescription)}
          </Text>
          <Text style={styles.price}>
            Price: {JSON.stringify(productPrice)} $
          </Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  productImage: {
    width: '95%',
    height: 280,
    marginStart: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  cardContent: {
    flex: 1,
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 36,
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
    marginTop: 8,
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
