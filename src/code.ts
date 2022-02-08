
import users from './users.json';

figma.showUI(__html__)
// Load text style for username labels
figma.loadFontAsync({ family: "Roboto", style:"Regular" })

figma.ui.onmessage = msg => {
  if (msg.type === 'create-users') {
    const nodes: SceneNode[] = []
    for (let i = 0; i < msg.count; i++) {
      const user = users[i]

      //Add circle with fill
      const avatar = createAvatar(user)
      avatar.y = i * 150
      figma.currentPage.appendChild(avatar)
     
      //Add username

      const userName = createUserLabel(user)
      userName.y = i*150 + 20
      userName.x = 72
      figma.currentPage.appendChild(userName)

      //Group objects
      const group = figma.group([userName, avatar], figma.currentPage)
      let index = i + 1
      group.name = "User" + " " + index
      nodes.push(group)
    }

    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  }
  figma.closePlugin()
}

// Create functions
function createUserLabel(user) {
  const firstLast = user.firstName + " " + (user.lastName ?? "")
  const text = figma.createText()
  text.characters = firstLast
  text.fontSize = 17
  return text
}

function createAvatar(user) {
  const ellipse = figma.createEllipse()
  ellipse.resize(60, 60)
  ellipse.fills = [{type: 'SOLID', color: {r: 0.85, g: 0.85, b: 0.85}}]
  ellipse.name = "Avatar"
  return ellipse
}