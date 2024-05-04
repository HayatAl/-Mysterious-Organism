// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};




let pAequorFactory=(num ,arr)=>{
if (typeof num ==='number' && arr.length ===15)
{
  return {

    specimenNum :num,
    dna:arr,
   //is responsible for randomly selecting 
  //  a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna
    mutate(){
     let x = Math.floor(Math.random()*15);
     let r;
      if (this.dna[x]==='A'){
        r =  ['T', 'C', 'G'][Math.floor(Math.random()*3)]
        }else if (this.dna[x]==='T'){
          r =  ['A', 'C', 'G'][Math.floor(Math.random()*3)]
          } else if (this.dna[x]==='C'){
             r =  ['A', 'T', 'G'][Math.floor(Math.random()*3)]
            }  else if (this.dna[x]==='G'){
              r =  ['A', 'T', 'C'][Math.floor(Math.random()*3)]
              }

             this.dna[x]=r;
             console.log(this.dna);
            
      },



      // wants to be able to compare the DNA sequences of different P. aequor
       compareDNA(obj){
        let dna1=this.dna;
        let dna2=obj.dna;
        console.log(dna1,dna2);
        let smilier = dna1.filter((elemnt,index)=>{
           return  elemnt===dna2[index];
         
        })
        console.log(`specimen #1 and specimen #2 have ${smilier.length} ${Math.floor((smilier.length / 15 )*100)}% DNA in common`);
      
      
      },

      /*.willLikelySurvive() returns true if the object’s
       .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.*/
      
      willLikelySurvive(){
            let Survive=this.dna.filter(elemnt=>{
              return elemnt ==='C' || elemnt ==='G'
            })
            console.log(Survive);
            return Math.floor((Survive.length /15 )*100) >= 60 ? true:false; 

      }
  
    }
  }
};



let pAequor1=(pAequorFactory(4, mockUpStrand()));
let pAequor2=(pAequorFactory(8, mockUpStrand()));


pAequor1.compareDNA(pAequor2);

pAequor1.willLikelySurvive();


//create 30 instances of pAequor
let pAequorS=[];
for (let i=0;i<31;i++){
  pAequorS.push(pAequorFactory(i, mockUpStrand())); 
}
console.log(pAequorS);