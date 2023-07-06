import React from 'react';

import Art from '../Art/Art';
import AstronautPicasso from '../../img/tokencipher_picasso_style_painting_of_astronaut_lost_in_deep_in_dcf2c0d2-b112-4c40-bb79-dd13f2294f25.png';
import AstronautPicasso2 from '../../img/tokencipher_picasso_style_painting_of_astronaut_lost_in_deep_in_43babdca-8f49-40a6-adbd-efa7be793bc7.png';
import DeepSeaSubmarineMobeus from '../../img/tokencipher_moebius_style_art_of_deep_sea_exploration_in_submar_7d9c7e3e-7a1d-42ed-b3c9-df7fa873bc19.png';
import DeepSeaSubmarineMobeus2 from '../../img/tokencipher_moebius_style_art_of_deep_sea_exploration_in_submar_da2a13e8-afda-4664-9ad0-ab0e4d5ada50.png';
import ArtificialDeepSync from '../../img/tokencipher_moebius_style_art_of_female_android_being_assembled_44059cc0-2c12-4323-9deb-ac574a417443.png'
import RebornLiberated from '../../img/tokencipher_moebius_style_art_of_female_android_skydiving_headf_efff0320-2b7e-49cc-8c9c-ae837919b462.png';
import FourthSpectacle from '../../img/tokencipher_4th_of_july_spectacle_in_watercolor_d79de79b-d17b-4e44-b857-8bf3d61693f4.png';
import OvercomingFears from '../../img/tokencipher_watercolor_takashi_murakami_style_art_of_child_slee_aef17f65-a041-4894-b914-d54b7c71da59.png'

class App extends React.Component {
  render() {
    return (
      <>
        <Art 
          imgframe="frame-1"
          imgsrc={AstronautPicasso}  
          imgalt="picasso-style colorful vibrant digital painting of astronaut depicted lost in deep space"
          cardtitle="Taking Risks: Lost In Deep Space"
          carddate="06/30/2023"
        />

        <Art
          imgframe="frame-1"
          imgsrc={AstronautPicasso2}  
          imgalt="picasso-style colorful vibrant digital painting of Astronaut depicted lost in deep space"
          cardtitle="Taking Risks: Lost In Deep Space Pt. 2"
          carddate="06/30/2023"
        />

        <Art
          imgframe="frame-2"
          imgsrc={DeepSeaSubmarineMobeus}  
          imgalt="mobeus-style colorful vibrant digital art of submarine depicted deep underwater"
          cardtitle="Taking Risks: Deep Sea Exploration"
          carddate="07/01/2023"
        />

        
        <Art
          imgframe="frame-2"
          imgsrc={DeepSeaSubmarineMobeus2}  
          imgalt="mobeus-style colorful vibrant digital art of submarine depicted deep underwater"
          cardtitle="Taking Risks: Deep Sea Exploration Pt. 2"
          carddate="07/01/2023"
        />

        <Art
          imgframe="frame-3"
          imgsrc={ArtificialDeepSync}  
          imgalt="mobeus-style digital art of cyborg woman sitting in chair of cyborg R&D facility with head slightly down, eyes closed, wearing white uniform and headgear. "
          cardtitle="Artificial Deep Sync"
          carddate="07/02/2023"
        />

        <Art
          imgframe="frame-4"
          imgsrc={RebornLiberated}  
          imgalt="mobeus-style digital art of cyborg woman sky-diving headfirst into futuristic city with eyes closed liberated."
          cardtitle="Reborn Liberated"
          carddate="07/03/2023"
        />
        
        <Art
          imgframe="frame-6"
          imgsrc={FourthSpectacle}  
          imgalt="watercolor digital painting of fireworks across lake with boats and people visible in foreground watching."
          cardtitle="Fourth Spectacle"
          carddate="07/04/2023"
        />
        
        <Art
          imgframe="frame-5"
          imgsrc={OvercomingFears}  
          imgalt="takashi murakami style watercolor digital art of child sleeping in bed with apparitions at bedside."
          cardtitle="Overcoming Fears"
          carddate="07/05/2023"
        />

      </>
    );
  }
}

export default App;
