let [toggleAllAboutFn, collapseAllAboutFn] = [()=>{}, ()=>{}];
function setToggleAllabout(fn){
  toggleAllAboutFn = fn;
}
function setCollapseAllAbout(fn){
  collapseAllAboutFn = fn;
}
function toggleAllAbout(){
  if(toggleAllAboutFn) toggleAllAboutFn();
}
function collapseAllAbout(){
  if(collapseAllAboutFn) collapseAllAboutFn();
}

const entry = {
  setToggleAllabout, setCollapseAllAbout,
  toggleAllAbout, collapseAllAbout
}

export default entry;