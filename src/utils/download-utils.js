export const downloadOrOpenImage = (dataUrl, filename) => {
	// Create a temporary link element
	const link = document.createElement('a');
	link.href = dataUrl;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
