/**
 * Images should be stored in the `App/Images` directory and referenced using variables defined here.
 */

export default function () {
  return {
    underMaintenance: require('_assets/Images/maintenance.jpg'),
    notfound: {
      uri: 'https://unsplash-assets.imgix.net/empty-states/photos.png',
    },
  };
}
