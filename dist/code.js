/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
figma.showUI(__html__);
figma.loadFontAsync({ family: "Roboto", style: "Regular" });
figma.ui.onmessage = msg => {
    if (msg.type === 'create-users') {
        const nodes = [];
        const names = [
            "Alex Mathers",
            "Dave Shea",
            "Aman Biswas",
            "Maria Dubecki",
            "Jon Rundle"
        ];
        for (let i = 0; i < msg.count; i++) {
            //Add circle with fill
            const ellipse = figma.createEllipse();
            ellipse.resize(60, 60);
            ellipse.y = i * 150;
            ellipse.fills = [{ type: 'SOLID', color: { r: 0.85, g: 0.85, b: 0.85 } }];
            figma.currentPage.appendChild(ellipse);
            //Add username
            const userName = figma.createText();
            if (names[i]) {
                userName.characters = names[i];
            }
            else {
                userName.characters = "username";
            }
            userName.fontSize = 17;
            userName.y = i * 150;
            userName.x = 72;
            figma.currentPage.appendChild(userName);
            const group = figma.group([userName, ellipse], figma.currentPage);
            group.name = "User";
            nodes.push(group);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    figma.closePlugin();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3Qiw2QkFBNkI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Vc2VyLUZpbGwvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGUtdXNlcnMnKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIGNvbnN0IG5hbWVzID0gW1xuICAgICAgICAgICAgXCJBbGV4IE1hdGhlcnNcIixcbiAgICAgICAgICAgIFwiRGF2ZSBTaGVhXCIsXG4gICAgICAgICAgICBcIkFtYW4gQmlzd2FzXCIsXG4gICAgICAgICAgICBcIk1hcmlhIER1YmVja2lcIixcbiAgICAgICAgICAgIFwiSm9uIFJ1bmRsZVwiXG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vQWRkIGNpcmNsZSB3aXRoIGZpbGxcbiAgICAgICAgICAgIGNvbnN0IGVsbGlwc2UgPSBmaWdtYS5jcmVhdGVFbGxpcHNlKCk7XG4gICAgICAgICAgICBlbGxpcHNlLnJlc2l6ZSg2MCwgNjApO1xuICAgICAgICAgICAgZWxsaXBzZS55ID0gaSAqIDE1MDtcbiAgICAgICAgICAgIGVsbGlwc2UuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjg1LCBnOiAwLjg1LCBiOiAwLjg1IH0gfV07XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChlbGxpcHNlKTtcbiAgICAgICAgICAgIC8vQWRkIHVzZXJuYW1lXG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIGlmIChuYW1lc1tpXSkge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lLmNoYXJhY3RlcnMgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lLmNoYXJhY3RlcnMgPSBcInVzZXJuYW1lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyTmFtZS5mb250U2l6ZSA9IDE3O1xuICAgICAgICAgICAgdXNlck5hbWUueSA9IGkgKiAxNTA7XG4gICAgICAgICAgICB1c2VyTmFtZS54ID0gNzI7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGZpZ21hLmdyb3VwKFt1c2VyTmFtZSwgZWxsaXBzZV0sIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBcIlVzZXJcIjtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZ3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xuICAgIH1cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==