document.addEventListener('DOMContentLoaded', () => {
    renderHTML(store);

    function renderHTML(folderList) {
        // Use map to improve readability and simplify rendering
        folderList.forEach(item => {
            const elem = item.type === 'folder' ? createFolderElem(item) : createFileElem(item);
            const parentElem = document.getElementById(item.parentNodeid);
            if (parentElem) {
                parentElem.lastElementChild.appendChild(elem);
            }

            if (item.type === 'folder') {
                renderHTML(item.children);
            }
        });
    }
});
