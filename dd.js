/*

text = 'abcdefg'
pattern = 'a*b.de*'



*/

let cc = [
    ["", "a*b*c*"],
    ["ab.a", "ab*.a"],
    ["acd", "ab*c.."]
]
function isMatch(text, pattern) {
    console.log(`text: '${text}' pattern: '${pattern}'`)
    let CNST = {
      MATCH: !0, NO_MATCH: !1
    }, i, j, plen=pattern.length, tlen=text.length, matched = 0, t='';
    // your code goes here
    if(text === pattern) return CNST.MATCH;
    // if(!tlen && )
    for(i=0, j=0; i<plen; ++i){
        //console.log(text[j], pattern[i]);
        if(pattern[i] === '.'){ // check for dot(.)
            if(i+1 <plen && pattern[i+1] === '*'){ // if true, curr char 0 or more
                t = text[j];
                if(!tlen || text[j] !== t){ // we can bear it for *
                    ++i;
                    ++matched;
                }else{
                    while(j<tlen && text[j] === t){
                        ++j;
                        ++matched;
                    }
                    ++i;
                }
            }else{
                ++j;
                ++matched;
            }
        }else if(i+1 <plen && pattern[i+1] === '*'){ // if true, curr char 0 or more
            //console.log('next is star');
            if(!tlen || text[j] !== pattern[i]){ // we can bear it for *
                ++i;
                ++matched;
            }else{
                while(j<tlen && text[j] === pattern[i]){
                    ++j;
                    ++matched;
                }
                ++i;
            }
        }else{ // alphabet
            //console.log('an aplha');
            while(j<tlen && text[j] !== pattern[i]){
                if(matched) return false;
                ++j;
            }
            if(j === tlen) return false;
            ++j;
        }
    }
    //console.log(`i: ${i} plen: ${plen} j: ${j} tlen: ${tlen} text: ${text} pattern: ${pattern} `, matched);
    if(j === tlen) return true;
    return false;
    
  }

console.log(isMatch(cc[2][0], cc[2][1]) ? "Match" : "No-Match");