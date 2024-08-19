import { expect } from 'chai';
import { sort, sort1 } from '../math.js';
import { add, subtract, multiply, divid } from '../dist/calc.js'

// describe('test 1+1', ()=>{ 
//     it('should return 2',()=>{
//         let result = add(1, 1);
//         expect(result).to.equal(2);

//     })
// })


// describe('test sort', ()=>{ 
//     it('should return 1,2,3 ',()=>{
//         let result = sort([3,2,-10,10,50,17,48]);
//         expect(result).to.eql([ -10, 2, 3, 10, 17, 48, 50 ]);

//     })
// })


// describe('test sort1', ()=>{ 
//     it('should return 1,2,3 ',()=>{
//         let result = sort1([3,2,1,-10,50,17,48]);
//         expect(result).to.eql([ -10, 1, 2, 3, 17, 48, 50 ]);

//     })
// })


describe('Calculator Test', () => {
    describe('Add Function', () => {
        it('Should return 5 when adding 3 and 2', () => {
            expect(add(3, 2)).to.equal(5);
        });
        it('Should return -8 when adding -10 and 2', () => {
            expect(add(-10, 2)).to.equal(-8);
        });
        it('Should return 8 when adding 10 and -2', () => {
            expect(add(10, -2)).to.equal(8);
        });
        it('Should return 8.567 when adding 2.309 and 6.258', () => {
            expect(add(2.309, 6.258)).to.be.closeTo(8.567, 0.001); 
        });
    });

    describe('Subtract Function', () => {
        it('Should return 5 when subtracting 10 from 15', () => {
            expect(subtract(15, 10)).to.equal(5);
        });
        it('Should return -8 when subtracting 53 from 45', () => {
            expect(subtract(45, 53)).to.equal(-8);
        });
        it('Should return 8 when subtracting 2 from 10', () => {
            expect(subtract(10, 2)).to.equal(8);
        });
        it('Should return -200.200 when subtracting 400.400 from 200.200', () => {
            expect(subtract(200.200, 400.400)).to.be.closeTo(-200.200, 0.001);
        });
    });

    describe('Multiply Function', () => {
        it('Should return 500 when multiplying 50 and 10', () => {
            expect(multiply(50, 10)).to.equal(500);
        });
        it('Should return 0 when multiplying 55 and 0', () => {
            expect(multiply(55, 0)).to.equal(0);
        });
        it('Should return -100 when multiplying 50 and -2', () => {
            expect(multiply(50, -2)).to.equal(-100);
        });
        it('Should return -500 when multiplying -50 and 10', () => {
            expect(multiply(-50, 10)).to.equal(-500);
        });
    });

    describe('Divid Function', () => {
        it('Should return 5 when dividing 50 by 10', () => {
            expect(divid(50, 10)).to.equal(5);
        });
        it('Should throw an error when dividing by zero', () => {
            expect(() => divid(55, 0)).to.throw('Cannot divide by zero');
        });
        it('Should return -25 when dividing 50 by -2', () => {
            expect(divid(50, -2)).to.equal(-25);
        });
        it('Should return -5 when dividing -50 by 10', () => {
            expect(divid(-50, 10)).to.equal(-5);
        });
    });
});
