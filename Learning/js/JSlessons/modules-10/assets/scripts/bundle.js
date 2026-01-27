/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/ProjectItem.js"
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n// import { Tooltip } from './Tooltip.js';\n\nconsole.log('Project Item created!');\nclass ProjectItem {\n  hasActiveTooltip = false;\n  constructor(id, updateProjectListsFunction, type) {\n    this.id = id;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n  showMoreInfoHandler() {\n    if (this.hasActiveTooltip) {\n      return;\n    }\n    const projectElement = document.getElementById(this.id);\n    const tooltipText = projectElement.dataset.extraInfo;\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then(module => {\n      const tooltip = new module.Tooltip(() => {\n        this.hasActiveTooltip = false;\n      }, tooltipText, this.id);\n      tooltip.attach();\n      this.hasActiveTooltip = true;\n    });\n  }\n  connectDrag() {\n    const item = document.getElementById(this.id);\n    item.addEventListener('dragstart', event => {\n      event.dataTransfer.setData('text/plain', this.id);\n      event.dataTransfer.effectAllowed = 'move';\n    });\n    item.addEventListener('dragend', event => {\n      console.log(event);\n    });\n  }\n  connectMoreInfoButton() {\n    const projectItemElement = document.getElementById(this.id);\n    const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');\n    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n  }\n  connectSwitchButton(type) {\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector('button:last-of-type');\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\n    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n    switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));\n  }\n  update(updateProjectListsFn, type) {\n    this.updateProjectListsHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2R1bGVzLTEwLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gJy4uL1V0aWxpdHkvRE9NSGVscGVyLmpzJztcbi8vIGltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAuanMnO1xuXG5jb25zb2xlLmxvZygnUHJvamVjdCBJdGVtIGNyZWF0ZWQhJyk7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbSB7XG4gIGhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihpZCwgdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb24sIHR5cGUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb247XG4gICAgdGhpcy5jb25uZWN0TW9yZUluZm9CdXR0b24oKTtcbiAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XG4gICAgdGhpcy5jb25uZWN0RHJhZygpO1xuICB9XG5cbiAgc2hvd01vcmVJbmZvSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5oYXNBY3RpdmVUb29sdGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmV4dHJhSW5mbztcbiAgICBpbXBvcnQoJy4vVG9vbHRpcC5qcycpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgbW9kdWxlLlRvb2x0aXAoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcFRleHQsXG4gICAgICAgIHRoaXMuaWRcbiAgICAgICk7XG4gICAgICB0b29sdGlwLmF0dGFjaCgpO1xuICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gdHJ1ZTtcbiAgICB9KTtcbiAgIFxuICB9XG5cbiAgY29ubmVjdERyYWcoKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmlkKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgIH0pO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdE1vcmVJbmZvQnV0dG9uKCkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IG1vcmVJbmZvQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uOmZpcnN0LW9mLXR5cGUnXG4gICAgKTtcbiAgICBtb3JlSW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGxldCBzd2l0Y2hCdG4gPSBwcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpO1xuICAgIHN3aXRjaEJ0biA9IERPTUhlbHBlci5jbGVhckV2ZW50TGlzdGVuZXJzKHN3aXRjaEJ0bik7XG4gICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gdHlwZSA9PT0gJ2FjdGl2ZScgPyAnRmluaXNoJyA6ICdBY3RpdmF0ZSc7XG4gICAgc3dpdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKHVwZGF0ZVByb2plY3RMaXN0c0ZuLCB0eXBlKSB7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRm47XG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n\n}");

/***/ },

/***/ "./src/App/ProjectList.js"
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n\n\n// console.log(DEFAULT_VALUE);\n\nclass ProjectList {\n  projects = [];\n  constructor(type) {\n    this.type = type;\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));\n    }\n    console.log(this.projects);\n    this.connectDroppable();\n  }\n  connectDroppable() {\n    console.log(globalThis);\n    const list = document.querySelector(`#${this.type}-projects ul`);\n    if (!list) {\n      console.error(`List not found for type: ${this.type}`);\n      return;\n    } else console.log('list found');\n    list.addEventListener('dragenter', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        list.parentElement.classList.add('droppable');\n        event.preventDefault();\n      }\n    });\n    list.addEventListener('dragover', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n      }\n    });\n    list.addEventListener('dragleave', event => {\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n    list.addEventListener('drop', event => {\n      const prjId = event.dataTransfer.getData('text/plain');\n      if (this.projects.find(p => p.id === prjId)) {\n        return;\n      }\n      document.getElementById(prjId).querySelector('button:last-of-type').click();\n      list.parentElement.classList.remove('droppable');\n      // event.preventDefault(); // not required\n    });\n  }\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n  addProject(project) {\n    this.projects.push(project);\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement(project.id, `#${this.type}-projects ul`);\n    project.update(this.switchProject.bind(this), this.type);\n  }\n  switchProject(projectId) {\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n    // this.projects.splice(projectIndex, 1);\n    this.switchHandler(this.projects.find(p => p.id === projectId));\n    this.projects = this.projects.filter(p => p.id !== projectId);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vZHVsZXMtMTAvLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzPzBkY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdEl0ZW0gYXMgUHJqSXRlbSB9IGZyb20gJy4vUHJvamVjdEl0ZW0uanMnO1xuaW1wb3J0ICogYXMgRE9NSCBmcm9tICcuLi9VdGlsaXR5L0RPTUhlbHBlci5qcyc7XG5cbi8vIGNvbnNvbGUubG9nKERFRkFVTFRfVkFMVUUpO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IHByakl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dHlwZX0tcHJvamVjdHMgbGlgKTtcbiAgICBmb3IgKGNvbnN0IHByakl0ZW0gb2YgcHJqSXRlbXMpIHtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChcbiAgICAgICAgbmV3IFByakl0ZW0ocHJqSXRlbS5pZCwgdGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xuICAgIHRoaXMuY29ubmVjdERyb3BwYWJsZSgpO1xuICB9XG5cbiAgY29ubmVjdERyb3BwYWJsZSgpIHtcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxUaGlzKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuICAgIGlmICghbGlzdCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTGlzdCBub3QgZm91bmQgZm9yIHR5cGU6ICR7dGhpcy50eXBlfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBjb25zb2xlLmxvZygnbGlzdCBmb3VuZCcpO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSAndGV4dC9wbGFpbicpIHtcbiAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldC5jbG9zZXN0KGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCkgIT09IGxpc3QpIHtcbiAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZChwID0+IHAuaWQgPT09IHByaklkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQocHJqSWQpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdidXR0b246bGFzdC1vZi10eXBlJylcbiAgICAgICAgLmNsaWNrKCk7XG4gICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBub3QgcmVxdWlyZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihzd2l0Y2hIYW5kbGVyRnVuY3Rpb24pIHtcbiAgICB0aGlzLnN3aXRjaEhhbmRsZXIgPSBzd2l0Y2hIYW5kbGVyRnVuY3Rpb247XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgRE9NSC5tb3ZlRWxlbWVudChwcm9qZWN0LmlkLCBgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuICAgIHByb2plY3QudXBkYXRlKHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpO1xuICB9XG5cbiAgc3dpdGNoUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAvLyBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHByb2plY3RJZCk7XG4gICAgLy8gdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICB0aGlzLnN3aXRjaEhhbmRsZXIodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKSk7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvamVjdElkKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n\n}");

/***/ },

/***/ "./src/Utility/DOMHelper.js"
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper),\n/* harmony export */   clearEventListeners: () => (/* binding */ clearEventListeners),\n/* harmony export */   moveElement: () => (/* binding */ moveElement)\n/* harmony export */ });\nconsole.log('DOM Helper executing!');\nclass DOMHelper {\n  static clearEventListeners(element) {\n    const clonedElement = element.cloneNode(true);\n    element.replaceWith(clonedElement);\n    return clonedElement;\n  }\n  static moveElement(elementId, newDestinationSelector) {\n    const element = document.getElementById(elementId);\n    const destinationElement = document.querySelector(newDestinationSelector);\n    destinationElement.append(element);\n    element.scrollIntoView({\n      behavior: 'smooth'\n    });\n  }\n}\nfunction clearEventListeners(element) {\n  const clonedElement = element.cloneNode(true);\n  element.replaceWith(clonedElement);\n  return clonedElement;\n}\nfunction moveElement(elementId, newDestinationSelector) {\n  const element = document.getElementById(elementId);\n  const destinationElement = document.querySelector(newDestinationSelector);\n  destinationElement.append(element);\n  element.scrollIntoView({\n    behavior: 'smooth'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vZHVsZXMtMTAvLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanM/NTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnRE9NIEhlbHBlciBleGVjdXRpbmchJyk7XG5cbmV4cG9ydCBjbGFzcyBET01IZWxwZXIge1xuICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkRWxlbWVudCk7XG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgbW92ZUVsZW1lbnQoZWxlbWVudElkLCBuZXdEZXN0aW5hdGlvblNlbGVjdG9yKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuZXdEZXN0aW5hdGlvblNlbGVjdG9yKTtcbiAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xuICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkRWxlbWVudCk7XG4gIHJldHVybiBjbG9uZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZUVsZW1lbnQoZWxlbWVudElkLCBuZXdEZXN0aW5hdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xuICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n\n}");

/***/ },

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\n// import 'core-js'\n/*\n\nThis project uses npm, lint, babel, webpack etc . TO use that the steps below were done \n\nnpm init\nnpm install --save-dev eslint\nnpx eslint --init\nnpm install --save-dev webpack webpack-cli\nnpm install --save-dev webpack-dev-server\nnpm install --save-dev @babel/core @babel/cli @babel/preset-env\nnpm install --save-dev babel-loader\nnpm install --save core-js\nnpm install --save regenerator-runtime\n\nthen use \nnpm run build:dev     -->     this is the better opt since it re-builds the webpage for every change in code \n        OR\nserve\n\n*/\n\nglobalThis.DEFAULT_VALUE = 'MAX';\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList('active');\n    const finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList('finished');\n    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));\n    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n  static startAnalytics() {\n    const analyticsScript = document.createElement('script');\n    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kdWxlcy0xMC8uL3NyYy9hcHAuanM/MTExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vQXBwL1Byb2plY3RMaXN0LmpzJztcbi8vIGltcG9ydCAnY29yZS1qcydcbi8qXG5cblRoaXMgcHJvamVjdCB1c2VzIG5wbSwgbGludCwgYmFiZWwsIHdlYnBhY2sgZXRjIC4gVE8gdXNlIHRoYXQgdGhlIHN0ZXBzIGJlbG93IHdlcmUgZG9uZSBcblxubnBtIGluaXRcbm5wbSBpbnN0YWxsIC0tc2F2ZS1kZXYgZXNsaW50XG5ucHggZXNsaW50IC0taW5pdFxubnBtIGluc3RhbGwgLS1zYXZlLWRldiB3ZWJwYWNrIHdlYnBhY2stY2xpXG5ucG0gaW5zdGFsbCAtLXNhdmUtZGV2IHdlYnBhY2stZGV2LXNlcnZlclxubnBtIGluc3RhbGwgLS1zYXZlLWRldiBAYmFiZWwvY29yZSBAYmFiZWwvY2xpIEBiYWJlbC9wcmVzZXQtZW52XG5ucG0gaW5zdGFsbCAtLXNhdmUtZGV2IGJhYmVsLWxvYWRlclxubnBtIGluc3RhbGwgLS1zYXZlIGNvcmUtanNcbm5wbSBpbnN0YWxsIC0tc2F2ZSByZWdlbmVyYXRvci1ydW50aW1lXG5cbnRoZW4gdXNlIFxubnBtIHJ1biBidWlsZDpkZXYgICAgIC0tPiAgICAgdGhpcyBpcyB0aGUgYmV0dGVyIG9wdCBzaW5jZSBpdCByZS1idWlsZHMgdGhlIHdlYnBhZ2UgZm9yIGV2ZXJ5IGNoYW5nZSBpbiBjb2RlIFxuICAgICAgICBPUlxuc2VydmVcblxuKi9cblxuZ2xvYmFsVGhpcy5ERUZBVUxUX1ZBTFVFID0gJ01BWCc7XG5cbmNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgnYWN0aXZlJyk7XG4gICAgY29uc3QgZmluaXNoZWRQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XG4gICAgYWN0aXZlUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChmaW5pc2hlZFByb2plY3RzTGlzdClcbiAgICApO1xuICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGFjdGl2ZVByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUHJvamVjdHNMaXN0KVxuICAgICk7XG5cbiAgICAvLyBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5hbHl0aWNzLCAzMDAwKTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wLWFuYWx5dGljcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydEFuYWx5dGljcygpIHtcbiAgICBjb25zdCBhbmFseXRpY3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBhbmFseXRpY3NTY3JpcHQuc3JjID0gJ2Fzc2V0cy9zY3JpcHRzL1V0aWxpdHkvQW5hbHl0aWNzLmpzJztcbiAgICBhbmFseXRpY3NTY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGFuYWx5dGljc1NjcmlwdCk7XG4gIH1cbn1cblxuQXBwLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "modules-10:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/scripts/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmodules_10"] = globalThis["webpackChunkmodules_10"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;