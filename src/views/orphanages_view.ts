import Orphanages from '../models/Orphanage';
import images_view from './images_view';
import Images from './images_view';

export default {
  render(orphanage:Orphanages){
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: images_view.renderMany(orphanage.images)
    } 
  },

  renderMany(orphanages: Orphanages[]){
    return orphanages.map((orphanage) => this.render(orphanage));
  }
};