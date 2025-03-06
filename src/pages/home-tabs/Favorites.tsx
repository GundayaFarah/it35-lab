import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonLabel, IonListHeader 
  } from '@ionic/react';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Ion-List Theming</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonListHeader>
        <IonLabel>Default</IonLabel>
      </IonListHeader>
      <IonListHeader color="primary">
        <IonLabel>Primary</IonLabel>
      </IonListHeader>
      <IonListHeader color="secondary">
        <IonLabel>Secondary</IonLabel>
      </IonListHeader>
      <IonListHeader color="tertiary">
        <IonLabel>Tertiary</IonLabel>
      </IonListHeader>
      <IonListHeader color="success">
        <IonLabel>Success</IonLabel>
      </IonListHeader>
      <IonListHeader color="warning">
        <IonLabel>Warning</IonLabel>
      </IonListHeader>
      <IonListHeader color="danger">
        <IonLabel>Danger</IonLabel>
      </IonListHeader>
      <IonListHeader color="light">
        <IonLabel>Light</IonLabel>
      </IonListHeader>
      <IonListHeader color="medium">
        <IonLabel>Medium</IonLabel>
      </IonListHeader>
      <IonListHeader color="dark">
        <IonLabel>Dark</IonLabel>
      </IonListHeader>
      </IonPage>
    );
  };
  
  export default Favorites;