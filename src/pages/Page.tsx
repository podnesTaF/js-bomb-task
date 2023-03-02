import {
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import React, {useEffect} from "react";
import Levels from "../components/Levels";
import {IModule} from "../models/IModule";
import Breadcrumb from "../components/Breadcrumb";

interface PageProps {
  modules: IModule[];
}

const Page: React.FC<PageProps> = ({modules}) => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage style={{justifyContent: 'start', overflowY: 'auto'}}>
      <div className='menu'>
        <Breadcrumb />
      </div>
      <div className='intro'>
        <IonText color="primary">
          <h1 className='title'>Welcome to js - react master Questions</h1>
        </IonText>
        <p>
          You can start from what you want, but to get the most form the test start with first module and so on
        </p>
      </div>
      <div>
        <Levels modules={modules} />
      </div>
    </IonPage>
  );
};

export default Page;
