export const initStats = stats => {
    stats.current = new window.Stats()
    stats.current.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    stats.current.dom.style.zIndex = '9999'
    stats.current.dom.style.top = 'auto'
    stats.current.dom.style.left = 'auto'
    stats.current.dom.style.right = '15px'
    stats.current.dom.style.bottom = '0'
    stats.current.dom.style.position	= 'absolute'
    document.body.appendChild(stats.current.dom)
}
