export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  allowedBounds = {
    north: 85,
    south: -85,
    west: -180,
    east: 180,
  };

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
        zoomControl: true,
        mapId: 'f7898189cbeebb777b6a3326',
        restriction: {
          latLngBounds: this.allowedBounds,
          strictBounds: true,
        },
      },
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
