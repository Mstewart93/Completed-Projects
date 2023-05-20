#include <iostream>
#include <cstdlib>

int main() {

std::cout << "Magic 8-Ball:\n\n";

srand(time(NULL));

int answer = std::rand() % 10;

std::cout << answer;

if (answer == 0) {
  std::cout << "It is certain. \n";
}

else if (answer == 1) {
  std::cout << "\nMost likely";
}
else if (answer == 2) {
  std::cout << "\nReply hazy, try again";
}
else if (answer == 3) {
  std::cout << "\nMy sources say no";
}
else if (answer == 4) {
  std::cout << "\nYou may rely on it";
}
else if (answer == 5) {
  std::cout << "\ncannot predict now";
}
else if (answer == 6) {
  std::cout << "\nMy reply is no";
}
else if (answer == 7) {
  std::cout << "\nWithout a doubt";
}
else if (answer == 8){
  std::cout << "\nBetter not tell you now";
}
else if (answer == 9){
  std::cout << "\ncannot predict now";
}
else  {
  std::cout << "\nVery doubtful /n";
}

}