const rmClassName = (element, nameToRm) => {
  
  element.className = element.className.split(' ').filter(name => name !== nameToRm)
}

export default rmClassName;