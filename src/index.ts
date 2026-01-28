import { loadGoogleMaps } from '../utils/googleMapsLoader';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

(async () => {
  await loadGoogleMaps();

  await new Promise((resolve) => setTimeout(resolve, 100));

  const customMap = new CustomMap('map');

  const user = new User();
  const company = new Company();

  customMap.addMarker(user);
  customMap.addMarker(company);
})();
