import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Tabs from './components/Tabs/Tabs';
import ProfileCard from './components/ProfileCard/ProfileCard';
import BasicProfile from './components/BasicProfile/BasicProfile';
import Notifications from './components/Notifications/Notifications';
import { css, cx } from '@emotion/css' 

function App() {
  return (
    <div className={css`
    display: grid;
    grid-template: minmax(64px, auto) 1fr / 1fr;
    grid-template-areas: 
    "header"
    "main";
    height: 100%;
    max-width: 1960px;
    min-width: 320px;
    margin: 0 auto;
    `}>
      <Header />
      <div className={css`
      display: grid;
      grid-template: 1fr / 270px 1fr;
      grid-area: main;
      grid-template-areas: 
        "aside content";
      height: 100%;
      column-gap: 24px;
      @media (max-width: 1045px) {
        grid-template: 1fr / 270px 1fr;
        grid-template-areas:
        "content content";
        padding-left: 20px;
      }
      @media (max-width: 440px) {
        column-gap: 0;
      }
      `}>
        <Aside />
        <div className={css`
        display: grid;
        grid-template: minmax(57px, auto) 1fr / minmax(280px, 375px) minmax(328px, 910px);
        grid-template-areas: 
        "tabs tabs"
        "left right";
        grid-area: content;
        height: 100%;
        column-gap: 28px;
        padding-right: 20px;
        @media (max-width: 690px) {
          grid-template: minmax(57px, auto) 1fr / auto;
          grid-template-areas:
            "tabs"
            "left"
            "right";
        }
        `}>
          <Tabs />
          <div className={css`
          grid-area: left;
          `}>
            <ProfileCard />
          </div>
          <div className={css`
          grid-area: right;
          `}>
            <BasicProfile />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
