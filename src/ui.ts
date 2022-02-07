import './ui.css'
window.onload=function() {
    document.getElementById('add-users').onclick = () => {
        const textbox = document.getElementById('count') as HTMLInputElement
        const count = parseInt(textbox.value, 10)
        parent.postMessage({ pluginMessage: { type: 'create-users', count } }, '*')
      }
      
      document.getElementById('cancel').onclick = () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
      }
}