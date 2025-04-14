
export function downloadFromBase64(
    base64String: string,
    mimeType: string,
    nomeFile: string
  ) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  
  export function convertToBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result as string;
            const [, base64Data] = base64String.split(',');
            resolve(base64Data);
        };
        reader.onerror = (error) => {
            reject(new Error('Something went wrong!'));
        };
        reader.readAsDataURL(file);
    });
  }