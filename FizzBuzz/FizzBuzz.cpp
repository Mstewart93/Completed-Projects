#include <iostream>

int main() {

//numbers from 1 to 100.
// Multiples of 3 print fizz
//multiples of 5 print buzz
// multiples of 3 and 5 Fizzbuzz
//reminder to self the % operator gives you a remainder so if 
// remainder is 0 then it is a multiple of that numebr. 
for (int i = 1; i <= 100; i++){


if (i % 15== 0) { 

std::cout << "Fizzbuzz\n";
}

else if (i % 5 == 0){

  std::cout << "Buzz\n";
}

else if (i % 3 == 0){

  std::cout << "Fizz\n";
}

else {
  std::cout << i << "\n";
}

}
}