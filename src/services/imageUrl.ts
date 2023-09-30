
const getCroppedImageUrl = (url: string) => {
    const target= '/media/'
    const targetIndex = url.indexOf(target) + target.length
    const newUrl= url.slice(0, targetIndex) + 'crop/600/400/' + url.slice(targetIndex)
    console.log(newUrl);
 return newUrl
 
}

export default getCroppedImageUrl
