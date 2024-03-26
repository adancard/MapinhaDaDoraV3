import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Casinha() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Coordenadas do Senai São Caetano do Sul
    const latitude = 28.39498;
    const longitude = -178.2948;

    // Ajuste o zoom conforme necessário
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.01, // Delta de latitude para o zoom
      longitudeDelta: 0.01, // Delta de longitude para o zoom
    };

    // Define a região do mapa ao montar o componente
    mapRef.current.setCamera({ center: { latitude, longitude }, zoom: 15 });
  }, []);

  return (
    // Componente de contêiner que envolve o mapa
    <View style={styles.container}>
      
      {/* MapView é o componente de mapa fornecido pelo pacote react-native-maps */}
      <MapView

        // Ref é usada para acessar métodos do componente MapView programaticamente
        ref={mapRef}

        // Estilo do mapa, definido pelos estilos do componente StyleSheet
        style={styles.map}

        // Mostra a localização do usuário no mapa
        showsUserLocation={true}
        
        // Região inicial ao abrir o mapa
        initialRegion={{
          latitude: 28.39498,
          longitude: -178.2948,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {/* Marcação no mapa - Marker representa um ponto específico no mapa */}
        <Marker
          // Coordenadas da marcação (Senai São Caetano do Sul)
          coordinate={{ latitude: 28.39498, longitude: -178.2948 }}
          // Título exibido quando a marcação é tocada
          title="Casa do rafael"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
