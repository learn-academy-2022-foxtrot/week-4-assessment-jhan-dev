# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️



#   PROBLEM #1

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#Create a method called evenOrOdd that takes in a num parameter and outputs a string saying if num is even or odd
def evenOrOdd(num)
    #Create an if statement that if num % 2's remainder is 0, it is an even num
    if num % 2 == 0         # --> Can also use num.even?
        "#{num} is even"
        #Create an else if statement that if num % 2's remainder is 1, it is an odd num
    elsif num % 2 == 1      # --> Can also use num.odd?
        "#{num} is odd"
    end
end

puts evenOrOdd(num1)
# Expected output: '7 is odd'

puts evenOrOdd(num2)
# Expected output: '42 is even'

puts evenOrOdd(num3)
# Expected output: '221 is odd'



#   PROBLEM #2

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#Create a method called removeVowels that takes in a string parameter and outputs a string w/o vowels
#Resource example: "hello".delete "aeiou", "^e"   #=> "hell"
def removeVowels(string)
    #Use the delete method w/ the string and let it compare for "aeoui" to delete from string
    string.delete "aeiuo"
end

puts removeVowels(beatles_album1)
# Expected output: 'Rbbr Sl'

puts removeVowels(beatles_album2)
# Expected output: 'Sgt Pppr'

puts removeVowels(beatles_album3)
# Expected output: 'bby Rd'



#   PROBLEM #3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#Create a method called palindrome that takes in a string parameter and outputs a string saying if the input was a palindrome or not
def palindrome(word)

    #If word as downcase strictly equals word as downcase reversed --> String interpolate {word} is a palindrome
    if word.downcase == word.downcase.reverse
        "#{word} is a palindrome"
    #Else if word as downcase strictly does NOT equals word as downcase reversed --> String interpolate {word} is NOT a palindrome
    elsif word != word.downcase.reverse
        "#{word} is not a palindrome"
    end
end

puts palindrome(palindrome_tester1)
# Expected output: 'Racecar is a palindrome'

puts palindrome(palindrome_tester2)
# Expected output: 'LEARN is not a palindrome'

puts palindrome(palindrome_tester3)
# Expected output: 'Rotator is a palindrome'
