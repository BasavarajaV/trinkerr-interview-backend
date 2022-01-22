function findSliceIndex(input, unwant) {
    for (let i = 0; i < input.length; i++) {
        let slicedItem = input.slice(i, i + (unwant.length))
        if (slicedItem == unwant) {
            return i
        }
    }

    return null;
}


function filterUnwants(input, unwant, sliceIndex) {
    let slicedItem = "";
    for (let j = 0; j < input.length; j++) {
        if ((sliceIndex > j) || (j > unwant.length)) {
            // console.log("j", j);
            slicedItem += input[j]
        }

    }
    return slicedItem
}

function result(input, unwant) {
    let input1 = input;
    for (let index = 0; index < input1.length; index++) {
        const sliceIndex1 = findSliceIndex(input1, unwant);

        // console.log("sliceIndex1", sliceIndex1);
        if (sliceIndex1) {
            const slciedInput = filterUnwants(input1, unwant, sliceIndex1)

            input1 = slciedInput;
        } else {
            return input1;
        }
    }
    return input1;
}


console.log("result", result("daabcbaabcbc", "abc"));
