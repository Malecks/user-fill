import users from './users.json';

const padding:number = 8;

figma.showUI(__html__)
// Load text style for username labels (do this outside of loop)
figma.loadFontAsync({ 
  family: "Roboto", style:"Regular" 
})

figma.ui.onmessage = msg => {
  if (msg.type === 'create-users') {
    createUsers(msg.count);
  }

  figma.closePlugin();
}

function createUsers(count: number) {

  let nodes: SceneNode[] = [];
  for (let i = 0; i < count; i++) {
    let user = users[i];

    //Add circle with fill
    let avatar = createAvatar(user);
    avatar.y = i * 150;
    figma.currentPage.appendChild(avatar);
   
    //Add username
    let userName = createUserLabel(user);
    userName.y = i*150 + 20;
    userName.x = 72;
    figma.currentPage.appendChild(userName);

    //Group with autolayout
    let frame = createUserFrame();
    frame.appendChild(avatar);
    frame.appendChild(userName);
    
    let index = i + 1;
    frame.name = "User" + " " + index;
    nodes.push(frame);
  }

  //Group users in autolayout
  let frame = createLayout();
  frame.name = "Users";
  for (let node of nodes) {
    frame.appendChild(node);
  }

  //Select and zoom into users
  figma.currentPage.selection = [frame];
  figma.viewport.scrollAndZoomIntoView([frame]);
}

function createLayout() {
  let frame = figma.createFrame();
  frame.layoutMode = "VERTICAL";
  frame.itemSpacing = padding;
  frame.paddingTop = frame.paddingLeft = frame.paddingBottom = frame.paddingRight = padding;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  return frame;
}

// Create functions
function createUserLabel(user) {
  let firstLast = user.firstName + " " + (user.lastName ?? "");
  let text = figma.createText();
  text.characters = firstLast;
  text.fontSize = 17;
  return text;
}

function createAvatar(user) {
  let ellipse = figma.createEllipse();
  ellipse.resize(60, 60);
  ellipse.fills = [{type: 'SOLID', color: {r: 0.85, g: 0.85, b: 0.85}}];
  ellipse.name = "Avatar";
  return ellipse;
}

function createUserFrame() {
  let frame = figma.createFrame();
  frame.layoutMode = "HORIZONTAL";
  frame.counterAxisAlignItems = "CENTER";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingLeft = frame.paddingRight = frame.paddingTop = frame.paddingBottom = padding;
  frame.itemSpacing = padding;
  frame.fills = [];
  return frame;
}