

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divid(a: number, b: number): number {
    if(b === 0){throw new Error('Cannot divide by zero')}
    return a / b;
}
