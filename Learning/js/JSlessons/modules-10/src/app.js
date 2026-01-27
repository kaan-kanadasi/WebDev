import { ProjectList } from './App/ProjectList.js';
// import 'core-js'
/*

This project uses npm, lint, babel, webpack etc . TO use that the steps below were done 

npm init
npm install --save-dev eslint
npx eslint --init
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev babel-loader
npm install --save core-js
npm install --save regenerator-runtime

then use 
npm run build:dev     -->     this is the better opt since it re-builds the webpage for every change in code 
        OR
serve

*/

globalThis.DEFAULT_VALUE = 'MAX';

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
