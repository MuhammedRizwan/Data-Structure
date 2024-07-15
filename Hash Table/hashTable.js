function isSubset(arr1, arr2, m, n)
{
    let i = 0;
    let j = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++)
            if (arr2[i] == arr1[j])
                break;
        if (j == m)
            return false;
    }
    return true;
}
let arr1 = [ 11, 1, 13, 21, 3, 7 ];
let arr2 = [ 11, 3, 7, 1 ];
let m = arr1.length;
let n = arr2.length;
if (isSubset(arr1, arr2, m, n))
  console.log("arr2[] is "
                 + "subset of arr1[] ");
else
  console.log("arr2[] is "
                + "not a subset of arr1[]");