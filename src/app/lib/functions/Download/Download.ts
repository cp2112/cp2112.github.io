export const Download = (data: string, filename: string, type: string) => {
    const file = new Blob([data], {type: type});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);

    a.click();

    setTimeout(function () {
        document.body.removeChild(a);
    }, 0);
};