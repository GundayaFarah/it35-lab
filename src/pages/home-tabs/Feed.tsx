import React, { useState, useRef } from 'react';
import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonRange,
  } from '@ionic/react';
  
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Ion-Range</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRange labelPlacement="start" label="Label at the Start"></IonRange>
      <br />
      <IonRange labelPlacement="end" label="Label at the End"></IonRange>
      <br />
      <IonRange labelPlacement="fixed" label="Fixed Width Label"></IonRange>
      <br />
      <IonRange labelPlacement="stacked" label="Stacked Label"></IonRange>
      </IonPage>
    );
  };
  
  export default Search;