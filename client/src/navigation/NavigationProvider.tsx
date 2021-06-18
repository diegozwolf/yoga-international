import {
  DownloadsScreen,
  HomeScreen,
  ClassScreen,
  MeditationScreen,
  CourseScreen,
  ArticleScreen,
  ClassPlayerScreen,
  CoursePlayerScreen,
  ArticlePlayerScreen,
  MeditationPlayerScreen,
} from "../screens";
import { ErrorMessage } from "../components";
import React, { createContext, useState } from "react";
import {
  Props,
  PropsB,
  PropsClass,
  PropsCourses,
  PropsArticle,
  PropsMeditation,
} from "./../types";


type TSElements = {
  HomeScreen: React.FC;
  DownloadsScreen: React.FC;
  ClassScreen: React.FC<Props>;
  MeditationScreen: React.FC<Props>;
  CourseScreen: React.FC<Props>;
  ArticleScreen: React.FC<Props>;
  ClassPlayerScreen: React.FC<PropsClass>;
  CoursePlayerScreen: React.FC<PropsCourses>;
  ArticlePlayerScreen: React.FC<PropsArticle>;
  MeditationPlayerScreen: React.FC<PropsMeditation>;
};

type TSOptions =
  | "HomeScreen"
  | "DownloadsScreen"
  | "ClassScreen"
  | "MeditationScreen"
  | "CourseScreen"
  | "ArticleScreen"
  | "ClassPlayerScreen"
  | "CoursePlayerScreen"
  | "ArticlePlayerScreen"
  | "MeditationPlayerScreen";

type TSRoute = {
  route: TSOptions;
  params?: Props | PropsB;
};

const routes: TSElements = {
  HomeScreen,
  DownloadsScreen,
  ClassScreen,
  MeditationScreen,
  CourseScreen,
  ArticleScreen,
  ClassPlayerScreen,
  CoursePlayerScreen,
  ArticlePlayerScreen,
  MeditationPlayerScreen,
};


let myMap = new Map<string, React.FC>([
  ["HomeScreen", HomeScreen],
  ["DownloadsScreen", DownloadsScreen],
]);

const initialRoute: TSRoute = { route: "HomeScreen", params: { id: "0" } };

export const NavigationContext = createContext<{
  activeRoute: TSRoute;
  setActiveRoute: (a: TSRoute) => void;
}>({
  activeRoute: initialRoute,
  setActiveRoute: () => console.warn("Missing navigation provider"),
});

export const NavigationProvider: React.FC = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState<TSRoute>(initialRoute); 

  const ScreenComponent = myMap.get(activeRoute.route);
  console.log(ScreenComponent);
  if (!ScreenComponent) return <ErrorMessage msg="Missing ScreenComponent!" />;

  return (
    <NavigationContext.Provider
      value={{
        activeRoute,
        setActiveRoute,
      }}
    >
      {children}
      <div style={{ padding: 30 }}>
        <ScreenComponent />
      </div>
    </NavigationContext.Provider>
  );
};
