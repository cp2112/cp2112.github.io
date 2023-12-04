export const PickAFile = (getText = true) => {
    return new Promise<File>((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e: any) => {
            const file = e.target.files && e.target.files[0];
            const reader = new FileReader();
            if (!getText) {
                resolve(file);
            } else {
                reader.onload = (e) => resolve(e.target.result as string);
                reader.onerror = (e) => reject(e);
                reader.readAsText(file);
            }
        };
        input.click();
    });
};