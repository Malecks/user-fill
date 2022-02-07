figma.showUI(__html__);

figma.loadFontAsync({ family: "Roboto", style:"Regular" })

figma.ui.onmessage = msg => {

  if (msg.type === 'create-users') {
    const nodes: SceneNode[] = [];
    const names: string[] = [
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
      ellipse.fills = [{type: 'SOLID', color: {r: 0.85, g: 0.85, b: 0.85}}];
      ellipse.name = "Avatar"
      figma.currentPage.appendChild(ellipse);
     
      //Add username
      const userName = figma.createText();
      if (names[i]) {
        userName.characters = names[i];
      } else {
        userName.characters = "username";
      }
      
      userName.fontSize = 17;
      userName.y = i*150 + 20;
      userName.x = 72;
      figma.currentPage.appendChild(userName);

      const group = figma.group([userName, ellipse], figma.currentPage);
      group.name = "User"
      nodes.push(group);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  figma.closePlugin();
};