export const countPercentage = (results: any[]) => {
    const total = results.length;
    const correct = results.filter((result) => result.correct).length;
    return +Math.round((correct / total) * 100).toFixed(2);
}

export const defineColor = (percentage: number) => {
    if(percentage < 50) {
        return '#69bb7b';
    } else if(percentage >= 50 && percentage < 80) {
        return '#ff9900';
    } else {
        return '#ff0000';
    }
}