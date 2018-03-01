module.exports = function solveSudoku(matrix) {
let m=matrix;
let zeroElem = new Object();

function chkColumn(jC, elem){
    for(let c=0;c<9;c++)
    {
    if(m[c][jC] == elem) return true;
    }
    return false;
    }

function chkEnvir(iR, jC, elem){
     if(iR<3 && jC<3)
      {
      return checkSqr(0,0,elem);
      }
      if(jC<6 && jC>2 && iR<3)
      {
      return checkSqr(0,3,elem);
      }
      if(jC<9 && jC>5 && iR<3)
      {
      return checkSqr(0,6,elem);
      }
      if(jC<3 && iR>2 && iR<6)
      {
      return checkSqr(3,0,elem);
      }
      if( iR>2 && iR<6 && jC<6 && jC>2)
      {
      return checkSqr(3,3,elem);
      }
      if( iR>2 && iR<6 && jC<9 && jC>5)
      {
      return checkSqr(3,6,elem);
      }
      if( jC<3 && iR>5 && iR<9)
      {
      return checkSqr(6,0,elem);
      }
      if( jC<6 && jC>2 && iR>5 && iR<9)
      {
      return checkSqr(6,3,elem);
      }
      if(jC<9 && jC>5 && iR>5 && iR<9)
      {
      return checkSqr(6,6,elem);
      }
    }

function checkSqr(initI, initJ, elem)
{
  for(let x=initI;x<initI+3;x++){
    for(let y=initJ;y<initJ+3;y++)
    {
      if(m[x][y]==elem) return false;
    }
  }
  return true;
}

(function Sudoku(){
    
    if(function(zeroElem)
        {
          for (let i=0;i<9;i++){
            for (let j=0;j<9;j++){
              if(m[i][j] === 0)
              {
                zeroElem.row=i;zeroElem.col=j;
                return true;
              }
            }
          }
          return false;
        }(zeroElem)){  var RowZer=zeroElem.row;
var ColZer=zeroElem.col;
       for(let num=1;num<=9;num++) 
       {
         if(chkEnvir(RowZer,ColZer,num) && m[RowZer].indexOf(num) == -1 && !chkColumn(ColZer, num)){
           m[RowZer][ColZer]=num;
           if(Sudoku()) return true;
           m[RowZer][ColZer]=0;
         }
       } return false;
      } return true;
}());

    return (m);
    }
    
    