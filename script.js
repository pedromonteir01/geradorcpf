function gerador() {
//array do cpf
    let nums = [];
// laço para criar 9 valores
    for (let i = 0; i < 9; i++) {
        let dig = parseInt(Math.random() * 9);
        nums.push(dig);
    }
    console.log('numeros cpf:' + nums);
//array para realizar algoritmo do digito A
    let nums2 = [];
    nums2[0] = nums[0] * 10;
    nums2[1] = nums[1] * 9;
    nums2[2] = nums[2] * 8;
    nums2[3] = nums[3] * 7;
    nums2[4] = nums[4] * 6;
    nums2[5] = nums[5] * 5;
    nums2[6] = nums[6] * 4;
    nums2[7] = nums[7] * 3;
    nums2[8] = nums[8] * 2;

    console.log('produto:' + nums2);
//algoritmo do digito A
    let a = 0;
    let a2;

    for (i = 0; i < nums2.length; i++) {
        a += nums2[i];
         a2 = a % 11
        if (a2 < 2) {
            a = 0;
        } else {
            a = 11 - a2;
        }
    }
//verificacao no console e adicionando no cpf
    console.log('digito 1=', + a);
    nums.push(a);
    console.log(nums);
//array para realizar algoritmo do digito B
    let nums3 = [];
    nums3[0] = nums[0] * 11;
    nums3[1] = nums[1] * 10;
    nums3[2] = nums[2] * 9;
    nums3[3] = nums[3] * 8;
    nums3[4] = nums[4] * 7;
    nums3[5] = nums[5] * 6;
    nums3[6] = nums[6] * 5;
    nums3[7] = nums[7] * 4;
    nums3[8] = nums[8] * 3;
    nums3[9] = nums[9] * 2;

    console.log('produto2:' + nums3);

//algoritmo do digito B
    let b = 0;
    let b2;

    for (i = 0; i < nums3.length; i++) {
        b += nums3[i];
        b2 = b % 11;
        if( b2 < 2) {
            b = 0;
        } else {
            b = 11 - b2;
        }
    }
//verificacao no console e adicionando no cpf
    console.log('digito 2:', + b)
    nums.push(b);
    console.log(nums);
//inserindo no input (concat cringe)
    let in1 = document.getElementById("in1");
    in1.value = `
    ${nums[0]} 
    ${nums[1]}
    ${nums[2]}
    .
    ${nums[3]}
    ${nums[4]}
    ${nums[5]}
    .
    ${nums[6]}
    ${nums[7]}
    ${nums[8]}
    -
    ${nums[9]}
    ${nums[10]}
    `;
}