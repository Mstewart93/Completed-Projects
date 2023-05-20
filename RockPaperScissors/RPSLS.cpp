// this will play the big banf theory version of rock paper scissors 

#include <iostream>
#include <stdlib.h>

int main() {

srand (time(NULL));

int computer = rand() % 3 + 1;

int user = 0;

std::cout << rand() % 3 + 1<< "\n";
std::cout << rand() % 3 + 1<< "\n";
std::cout << rand() % 3 + 1<< "\n";

std::cout << "========================\n";
std::cout << "rock paper scissors!\n";
std::cout << "========================\n";

std::cout << "1) Rock\n";
std::cout << "2) Paper\n";
std::cout << "3) Scissors\n";
std::cout << "4) Lizzard\n";
std::cout << "5) Spock\n";

std::cout << "Shoot!  ";

std::cin >> user;

int rock = 1;
int paper = 2;
int scissors = 3;
int lizzard = 4;
int spock = 5;

if(user == rock && computer == scissors){

  std::cout << " You win\n";
}
else if (user == scissors && computer == paper ) {

  std::cout << "You win\n";
}

else if (user == paper && computer == rock) {

  std::cout << "You win\n";
}

else if (user == lizzard && computer == spock){

  std::cout << "You win\n";
}

else if (user == spock && computer == scissors){

  std::cout << "You win\n";
}

else if (user == scissors && computer == lizzard){

  std::cout << "You win\n";
}

else if (user == lizzard && computer == paper){

  std::cout << "You win\n";
}

else if (user == paper && computer == spock){

  std::cout << "You win\n";
}

else if (user == spock && computer == rock){

std::cout << "You win\n";
}

else if (user == rock && computer == lizzard){

  std::cout << "You win\n";
}

else if (user == computer) {

  std::cout << "Tie\n";
}

else { 
  std::cout << "You Lose\n";
}

std::cout << computer;
}