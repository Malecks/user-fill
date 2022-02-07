// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.loadFontAsync({ family: "Roboto", style: "Regular" });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
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
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};